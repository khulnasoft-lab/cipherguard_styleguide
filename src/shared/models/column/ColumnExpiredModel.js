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

import ColumnModel, {ColumnModelTypes} from "./ColumnModel";

/**
 * Model related to the column "expiry" use only with the UI
 */
class ColumnExpiredModel extends ColumnModel {
  /**
   * Constructor
   * @param {Object} columnDto
   */
  constructor(columnDto = {}) {
    columnDto.id = ColumnModelTypes.EXPIRED;
    columnDto.field = ColumnModelTypes.EXPIRED;
    columnDto.width = columnDto.width || 145;
    columnDto.defaultWidth = 145;
    columnDto.resizable = true;
    columnDto.draggable = true;
    columnDto.sortable = true;
    super(columnDto);
  }
}

export default ColumnExpiredModel;

