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
 * @since         3.0.0
 */

/**
 * Default props
 * @returns {{}}
 */
export function defaultProps(props) {
  const defaultProps = {
    onAccept: jest.fn(() => Promise.resolve()),
    serverKey: {"fingerprint": "0c1d1761110d1e33c9006d1a5b1b332ed06426d3"},
  };
  return Object.assign(defaultProps, props || {});
}
