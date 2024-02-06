/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) Cipherguard SA (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cipherguard SA (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         4.4.0
 */


import TotpViewModel from "./TotpViewModel";

/**
 * The default TOTP ViewModel DTO
 * @param {Object} data The data to override
 * @returns {Object}
 */
export const defaultTotpViewModelDto = (data = {}) => {
  const defaultData = {
    secret_key: "DAV3DS4ERAAF5QGH",
    period: 30,
    digits: 6,
    algorithm: TotpViewModel.SUPPORTED_ALGORITHMS[0]
  };

  return Object.assign(defaultData, data);
};
