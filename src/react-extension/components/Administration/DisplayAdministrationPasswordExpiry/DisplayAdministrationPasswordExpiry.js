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
import Icon from "../../../../shared/components/Icons/Icon";
import {Trans, withTranslation} from "react-i18next";
import {withAppContext} from "../../../../shared/context/AppContext/AppContext";
import {withAdministrationWorkspace} from "../../../contexts/AdministrationWorkspaceContext";
import {withAdminPasswordExpiry} from "../../../contexts/Administration/AdministrationPaswordExpiryContext/AdministrationPaswordExpiryContext";
import DisplayAdministrationPasswordExpiryActions from "../DisplayAdministrationWorkspaceActions/DisplayAdministrationPasswordExpiryActions/DisplayAdministrationPasswordExpiryActions";

class DisplayAdministrationPasswordExpiry extends React.PureComponent {
  /**
   * Default constructor
   */
  constructor(props) {
    super(props);
    this.state = this.defaultState;
    this.bindCallbacks();
  }

  /**
   * Get default state
   * @returns {Object}
   */
  get defaultState() {
    return {
      isReady: false,
    };
  }

  /**
   * On the component did mount, set the workspace action component and get the account recovery policy
   *
   */
  async componentDidMount() {
    this.props.administrationWorkspaceContext.setDisplayAdministrationWorkspaceAction(DisplayAdministrationPasswordExpiryActions);
    await this.props.adminPasswordExpiryContext.findSettings();
    this.setState({isReady: true});
  }

  /**
   * On the component will unmount.
   */
  componentWillUnmount() {
    this.props.administrationWorkspaceContext.resetDisplayAdministrationWorkspaceAction();
  }

  /**
   * Bind callbacks methods
   */
  bindCallbacks() {
    this.handleSettingsActivationChange = this.handleSettingsActivationChange.bind(this);
  }

  /**
   * Should input be disabled? True if state is loading or processing
   * @returns {boolean}
   */
  hasAllInputDisabled() {
    return this.props.adminPasswordExpiryContext.isProcessing();
  }

  /**
   * Handles checkbox check's state change
   */
  handleSettingsActivationChange(e) {
    const value = Boolean(e.target.checked);
    this.props.adminPasswordExpiryContext.setSettingsBulk({
      automatic_expiry: value,
      automatic_update: value,
    });
  }

  /**
   * Render the component
   * @returns {JSX}
   */
  render() {
    if (!this.state.isReady) {
      return null;
    }
    const adminContext = this.props.adminPasswordExpiryContext;
    const settings = adminContext.getSettings();
    const isActive = Boolean(settings?.automatic_expiry);
    return (
      <div className="row">
        <div className="password-expiry-settings col8 main-column">
          <h3 id="password-expiry-settings-title">
            <span className="input toggle-switch form-element">
              <input type="checkbox" className="toggle-switch-checkbox checkbox" name="passwordExpirySettingsToggle"
                onChange={this.handleSettingsActivationChange} checked={isActive} disabled={this.hasAllInputDisabled()}
                id="passwordExpirySettingsToggle"/>
              <label htmlFor="passwordExpirySettingsToggle"><Trans>Password Expiry</Trans></label>
            </span>
          </h3>
          {adminContext.hasSettingsChanges() &&
            <div className="warning message" id="password-expiry-settings-save-banner">
              <p>
                <Trans>Don&apos;t forget to save your settings to apply your modification.</Trans>
              </p>
            </div>
          }
          {!isActive &&
            <p className="description">
              <Trans>No Password Expiry is configured. Enable it to activate automatic password expiration and automatic password expiration reset workflows.</Trans>
            </p>
          }
          {isActive &&
            <>
              <h4 id="password-expiry-settings-automatic-workflows" className="title title--required no-border"><Trans>Automatic workflows</Trans></h4>
              <div className="radiolist-alt">
                <div className={`input radio`}>
                  <label htmlFor="passwordExpiryAutomaticExpiry">
                    <span className="name"><Trans>Automatic expiry</Trans></span>
                    <span className="info">
                      <Trans>Password automatically expires when a user or a group is removed from the permission list.</Trans>
                    </span>
                  </label>
                </div>
                <div className={`input radio`}>
                  <label htmlFor="passwordExpiryAutomatiUpdate">
                    <span className="name"><Trans>Automatic update</Trans></span>
                    <span className="info">
                      <Trans>When users change their passwords, the expiry date is automatically renewed.</Trans>
                    </span>
                  </label>
                </div>
              </div>
            </>
          }
        </div>
        <div className="col4 last">
          <div className="sidebar-help">
            <h3><Trans>What is password expiry?</Trans></h3>
            <p><Trans>For more information about the password expiry, checkout the dedicated page on the help website.</Trans></p>
            <a className="button" href="https://help.cipherguard.khulnasoft.com/configure/password-expiry" target="_blank" rel="noopener noreferrer">
              <Icon name="life-ring"/>
              <span><Trans>Read the documentation</Trans></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

DisplayAdministrationPasswordExpiry.propTypes = {
  context: PropTypes.object, // Application context
  administrationWorkspaceContext: PropTypes.object, // The administration workspace context
  adminPasswordExpiryContext: PropTypes.object, // The admin password context context
  t: PropTypes.func, // The translation function
};

export default withAppContext(withAdministrationWorkspace(withAdminPasswordExpiry(withTranslation('common')(DisplayAdministrationPasswordExpiry))));
