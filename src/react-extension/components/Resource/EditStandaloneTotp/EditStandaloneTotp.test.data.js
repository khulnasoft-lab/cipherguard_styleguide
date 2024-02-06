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

import {
  resourceStandaloneTotpDto
} from "../../../../shared/models/entity/resource/resourceEntity.test.data";
import {defaultUserAppContext} from "../../../contexts/ExtAppContext.test.data";

/**
 * Default props
 * @returns {*}
 */
export function defaultProps(data = {}) {
  const defaultData = {
    context: defaultUserAppContext(),
    resource: resourceStandaloneTotpDto(),
    onClose: jest.fn(),
    onSubmit: jest.fn(),
    onCancel: jest.fn(),
    onOpenUploadQrCode: jest.fn()
  };

  return Object.assign(defaultData, data);
}
