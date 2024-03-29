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

import Entity from "../abstract/entity";
import EntitySchema from "../abstract/entitySchema";

const ENTITY_NAME = 'PasswordExpirySettings';

class PasswordExpirySettingsEntity extends Entity {
  /**
   * Password Expiry entity constructor
   *
   * @param {Object} PasswordExpirySettingsDto password expiry settings dto
   * @throws {EntityValidationError} if the dto cannot be converted into an entity
   */
  constructor(PasswordExpirySettingsDto) {
    super(EntitySchema.validate(
      PasswordExpirySettingsEntity.ENTITY_NAME,
      PasswordExpirySettingsDto,
      PasswordExpirySettingsEntity.getSchema()
    ));
  }

  /**
   * Get user passphrase policies entity schema
   * @returns {Object} schema
   */
  static getSchema() {
    return {
      "type": "object",
      "required": [
        "automatic_expiry",
        "automatic_update",
      ],
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid",
        },
        "default_expiry_period": {
          "anyOf": [{
            "type": "integer",
            "gte": 0,
          }, {
            "type": "null"
          }]
        },
        "policy_override": {
          "type": "boolean",
        },
        "automatic_expiry": {
          "type": "boolean",
        },
        "automatic_update": {
          "type": "boolean",
        },
        "expiry_notification": {
          "anyOf": [{
            "type": "integer",
            "gte": 0,
          }, {
            "type": "null"
          }]
        },
        "created": {
          "type": "string",
          "format": "date-time"
        },
        "created_by": {
          "type": "string",
          "format": "uuid"
        },
        "modified": {
          "type": "string",
          "format": "date-time"
        },
        "modified_by": {
          "type": "string",
          "format": "uuid"
        },
      }
    };
  }

  /*
   * ==================================================
   * Static properties getters
   * ==================================================
   */
  /**
   * PasswordExpirySettingsEntity.ENTITY_NAME
   * @returns {string}
   */
  static get ENTITY_NAME() {
    return ENTITY_NAME;
  }

  /**
   * Return the default settings overriden with the given data if any.
   * @param {PasswordExpirySettingsDto} data the data to override the entity with
   * @returns {PasswordExpirySettingsEntity}
   */
  static createFromDefault(data = {}) {
    const defaultData = {
      default_expiry_period: 0,
      policy_override: false,
      automatic_expiry: false,
      automatic_update: false,
      expiry_notification: 0,
    };

    const dto = Object.assign(defaultData, data);
    return new PasswordExpirySettingsEntity(dto);
  }
}

export default PasswordExpirySettingsEntity;
