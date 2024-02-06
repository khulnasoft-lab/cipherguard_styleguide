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
  RESOURCE_NAME_MAX_LENGTH,
  RESOURCE_URI_MAX_LENGTH
} from "../../constants/inputs.const";
import TotpViewModel from "../totp/TotpViewModel";

/**
 * Model related to the standalone TOTP
 */
class StandaloneTotpViewModel extends TotpViewModel {
  /**
   * Constructor
   * @param {object} [resource]
   */
  constructor(resource = {}) {
    super(resource);
    this.name = resource.name || "";
    this.uri = resource.uri || "";
  }

  /**
   * Get current view model schema
   * @returns {Object} schema
   */
  static getSchema() {
    return {
      type: "object",
      required: [
        "name",
        "secret_key",
        "period",
        "digits",
        "algorithm",
      ],
      properties: {
        name: {
          type: "string",
          notEmpty: true,
          maxLength: RESOURCE_NAME_MAX_LENGTH
        },
        uri: {
          type: "string",
          maxLength: RESOURCE_URI_MAX_LENGTH
        },
        secret_key: super.getSchema().properties.secret_key,
        period: super.getSchema().properties.period,
        digits: super.getSchema().properties.digits,
        algorithm: super.getSchema().properties.algorithm
      }
    };
  }

  /**
   * Returns a DTO with the same data structure of the resource entity dto.
   * @returns {object}
   */
  toResourceDto() {
    return {
      name: this.name,
      uri: this.uri
    };
  }

  /**
   * Create standalone TOTP from URL
   * @param url {URL}
   * @return {StandaloneTotpViewModel}
   */
  static createStandaloneTotpFromUrl(url) {
    const totp = {
      name: url.pathname.substring(7).split(":").join(": "),
      uri: url.searchParams.get('issuer') || "",
      secret_key: url.searchParams.get('secret').toUpperCase(),
      algorithm: url.searchParams.get('algorithm'),
      digits: parseInt(url.searchParams.get('digits'), 10) || 6,
      period: parseInt(url.searchParams.get('period'), 10) || 30,
    };

    return new StandaloneTotpViewModel(totp);
  }
}

export default StandaloneTotpViewModel;
