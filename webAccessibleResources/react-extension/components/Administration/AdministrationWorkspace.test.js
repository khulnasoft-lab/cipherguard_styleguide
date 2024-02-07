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
 * @since         2.11.0
 */

/**
 * Unit tests on AdministrationWorkspace in regard of specifications
 */
import React from 'react';
import {
  defaultAppContext, defaultProps,
} from "./AdministrationWorkspace.test.data";
import AdministrationWorkspacePage from "./AdministrationWorkspace.test.page";
import {waitFor} from "@testing-library/dom";
import {AdministrationWorkspaceMenuTypes} from "../../contexts/AdministrationWorkspaceContext";
import each from "jest-each";

jest.mock("./DisplayAdministrationMenu/DisplayAdministrationMenu", () => () => <></>);
jest.mock("./DisplayAdministrationWorkspaceBreadcrumb/DisplayAdministrationWorkspaceBreadcrumb", () => () => <></>);

jest.mock("./DisplayMfaAdministration/DisplayMfaAdministration", () => () => <span className="mfa-details"></span>);
jest.mock("./DisplayPasswordPoliciesAdministration/DisplayPasswordPoliciesAdministration", () => () => <span className="password-policies-details"></span>);
jest.mock("./DisplayUserDirectoryAdministration/DisplayUserDirectoryAdministration", () => () => <span className="user-directory-details"></span>);
jest.mock("./DisplayEmailNotificationsAdministration/DisplayEmailNotificationsAdministration", () => () => <span className="email-notifications-details"></span>);
jest.mock("./DisplaySubscriptionKey/DisplaySubscriptionKey", () => () => <span className="subscription-key-details"></span>);
jest.mock("./DisplayInternationalizationAdministration/DisplayInternationalizationAdministration", () => () => <span className="internationalization-details"></span>);
jest.mock("./ManageAccountRecoveryAdministrationSettings/ManageAccountRecoveryAdministrationSettings", () => () => <span className="account-recovery-details"></span>);
jest.mock("./ManageSmtpAdministrationSettings/ManageSmtpAdministrationSettings", () => () => <span className="smtp-settings-details"></span>);
jest.mock("./DisplaySelfRegistrationAdministration/DisplaySelfRegistrationAdministration", () => () => <span className="self-registration-details"></span>);
jest.mock("./ManageSsoSettings/ManageSsoSettings", () => () => <span className="sso-settings-details"></span>);
jest.mock("./DisplayRbacAdministration/DisplayRbacAdministration", () => () => <span className="rbacs-settings-details"></span>);
jest.mock("./DisplayAdministrationUserPassphrasePolicies/DisplayAdministrationUserPassphrasePolicies", () => () => <span className="user-passphrase-policies-details"></span>);
jest.mock("./DisplayAdministrationPasswordExpiry/DisplayAdministrationPasswordExpiry", () => () => <span className="password-expiry-details"></span>);

beforeEach(() => {
  jest.resetModules();
});

const scenarios = [
  {selectedMenu: AdministrationWorkspaceMenuTypes.MFA, field: 'isMfaSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.MFA_POLICY, field: 'isMfaPolicySelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.PASSWORD_POLICIES, field: 'isPasswordPoliciesSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.USER_DIRECTORY, field: 'isUserDirectorySelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.EMAIL_NOTIFICATION, field: 'isEmailNotificationsSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.SUBSCRIPTION, field: 'isSubscriptionKeySelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.INTERNATIONALIZATION, field: 'isInternationalizationSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.ACCOUNT_RECOVERY, field: 'isAccountRecoverySelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.SMTP_SETTINGS, field: 'isSmtpSettingsSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.SELF_REGISTRATION, field: 'isSelfRegistrationSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.SSO, field: 'isSsoSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.RBAC, field: 'isRbacSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.USER_PASSPHRASE_POLICIES, field: 'isUserPasphrasePoliciesSelected'},
  {selectedMenu: AdministrationWorkspaceMenuTypes.PASSWORD_EXPIRY, field: 'isPasswordExpirySelected'},
];

each(
  scenarios
).describe("Display Administration Workspace", currentScenario => {
  it(`As AD, I should see: ${currentScenario.selectedMenu}`, async() => {
    expect.assertions(scenarios.length);

    const page = new AdministrationWorkspacePage(defaultAppContext(), defaultProps(currentScenario.selectedMenu));
    await waitFor(() => {});

    expect(page[currentScenario.field]).toBeTruthy();

    const unselectedMenuItem = scenarios.filter(scenario => scenario !== currentScenario);
    for (let i = 0; i < unselectedMenuItem.length; i++) {
      const fieldName = unselectedMenuItem[i];
      expect(page[fieldName]).toBeFalsy();
    }
  });
});

