/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         4.4.0
 */

import React from "react";
import PropTypes from "prop-types";
import {withAppContext} from "../../shared/context/AppContext/AppContext";
import {withTranslation} from "react-i18next";

/**
 * The User Passphrase Policies Context
 * @type {React.Context<Object>}
 */
export const PasswordExpirySettingsContext = React.createContext({
  getSettings: () => {}, // Returns settings for UI changes
  findSettings: () => {}, // request the settings from the background page
  isFeatureEnabled: () => {}, // Returns true if the feature flag is enabled and the settings are set
});

/**
 * The Password Expiry settings context provider
 */
export class PasswordExpirySettingsContextProvider extends React.Component {
  /**
   * Default constructor
   * @param props The component props
   */
  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  /**
   * Returns the default component state
   */
  get defaultState() {
    return {
      settings: null, // the current password expiry settings
      findSettings: this.findSettings.bind(this), // find the Password expiry settings
      getSettings: this.getSettings.bind(this), // returns the settings that have been fetch previously
      isFeatureEnabled: this.isFeatureEnabled.bind(this), // Returns true if the feature flag is enabled and the settings are set
    };
  }

  /**
   * Find the User Passphrase Policies
   * @return {Promise<void>}
   */
  async findSettings() {
    if (!this.props.context.siteSettings.canIUse('passwordExpiry') || this.getSettings() !== null) {
      return;
    }
    const settings = await this.props.context.port.request("cipherguard.password-expiry.find");
    this.setState({settings});
  }

  /**
   * Get the User Passphrase Policies
   * @return {Object}
   */
  getSettings() {
    return this.state.settings;
  }

  /**
   * Returns true if the feature flag is enabled and the settings are set.
   * @returns {boolean}
   */
  isFeatureEnabled() {
    const settings = this.getSettings();
    if (!this.props.context.siteSettings.canIUse('passwordExpiry') || !settings) {
      return false;
    }

    const areSettingsEnabled = settings.automatic_expiry || settings.policy_override || settings.automatic_update;
    return areSettingsEnabled;
  }

  /**
   * Render the component
   * @returns {JSX}
   */
  render() {
    return (
      <PasswordExpirySettingsContext.Provider value={this.state}>
        {this.props.children}
      </PasswordExpirySettingsContext.Provider>
    );
  }
}

PasswordExpirySettingsContextProvider.propTypes = {
  context: PropTypes.any, // The application context
  children: PropTypes.any, // The children components
  t: PropTypes.any, // The translate context
};

export default withAppContext(withTranslation('common')(PasswordExpirySettingsContextProvider));

/**
 * Password expiry Context Consumer HOC
 * @param WrappedComponent
 */
export function withPasswordExpiry(WrappedComponent) {
  return class WithAdminUserPassphrasePolicies extends React.Component {
    render() {
      return (
        <PasswordExpirySettingsContext.Consumer>
          {passwordExpiryContext => (
            <WrappedComponent
              passwordExpiryContext={passwordExpiryContext}
              {...this.props}
            />
          )}
        </PasswordExpirySettingsContext.Consumer>
      );
    }
  };
}
