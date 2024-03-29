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
import {defaultPasswordExpirySettingsEntityDto} from '../../shared/models/passwordExpirySettings/PasswordExpirySettingsDto.test.data';
import {defaultUserAppContext} from './ExtAppContext.test.data';

export const defaultPasswordExpirySettingsContext = (data = {}) => {
  const settings = data?.getSettings
    ? data.getSettings()
    : defaultPasswordExpirySettingsEntityDto();

  const isFeatureEnabled = Boolean(settings?.automatic_update)
    || Boolean(settings?.automatic_expiry)
    || Boolean(settings?.policy_override);

  const defaultData = {
    findSettings: jest.fn(),
    getSettings: jest.fn(() => settings),
    isFeatureEnabled: jest.fn(() => isFeatureEnabled),
  };

  return Object.assign(defaultData, data);
};

export const defaultProps = (data = {}) => ({
  context: defaultUserAppContext(),
  ...data,
});
