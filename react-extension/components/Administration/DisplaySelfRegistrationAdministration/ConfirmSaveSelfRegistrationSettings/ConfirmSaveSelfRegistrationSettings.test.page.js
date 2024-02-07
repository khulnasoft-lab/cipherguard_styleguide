/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2020 KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         3.8.3
 */

import React from "react";
import MockTranslationProvider from "../../../../test/mock/components/Internationalisation/MockTranslationProvider";
import {render, fireEvent, waitFor} from '@testing-library/react';
import {AdminSelfRegistrationContextProvider} from "../../../../contexts/Administration/AdministrationSelfRegistration/AdministrationSelfRegistrationContext";
import AppContext from "../../../../../shared/context/AppContext/AppContext";
import ConfirmSaveSelfRegistrationSettings from "./ConfirmSaveSelfRegistrationSettings";
/**
 * The ConfirmSaveSelfRegistrationSettings component represented as a page
 */
export default class ConfirmSaveSelfRegistrationSettingsPage {
  /**
   * Default constructor
   * @param appContext An app context
   * @param props Props to attach
   */
  constructor(appContext, props) {
    this._page = render(
      <MockTranslationProvider>
        <AppContext.Provider value={appContext}>
          <AdminSelfRegistrationContextProvider  {...props}>
            <ConfirmSaveSelfRegistrationSettings {...props}/>
          </AdminSelfRegistrationContextProvider>
        </AppContext.Provider>
      </MockTranslationProvider>
    );
  }

  /**
   * Returns the title element
   */
  get title() {
    return this._page.container.querySelector('.dialog-header-title').textContent;
  }

  /**
   * Returns the warning message
   */
  get warningMessage() {
    return this._page.container.querySelector('.warning.message');
  }

  /**
   * Returns the list of domains
   */
  get domainsList() {
    return this._page.container.querySelector('#domains-list');
  }

  /**
   * Returns the save button element
   */
  get saveButton() {
    return this._page.container.querySelector('.submit-wrapper button[type=\"submit\"]');
  }

  /**
   * Returns the cancel button element
   */
  get cancelButton() {
    return this._page.container.querySelector('.submit-wrapper .cancel');
  }

  /**
   * Click on the element
   *
   */
  async click(element) {
    const leftClick = {button: 0};
    fireEvent.click(element, leftClick);
    await waitFor(() => {
    });
  }
}

