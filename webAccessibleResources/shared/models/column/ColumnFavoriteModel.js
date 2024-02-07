/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2023 KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2023 KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         4.2.0
 */

import ColumnModel, {ColumnModelTypes} from "./ColumnModel";

/**
 * Model related to the column favorite use only with the UI
 */
class ColumnFavoriteModel extends ColumnModel {
  /**
   * Constructor
   * @param {Object} columnDto
   */
  constructor(columnDto = {}) {
    columnDto.id = ColumnModelTypes.FAVORITE;
    columnDto.field = ColumnModelTypes.FAVORITE;
    columnDto.width = columnDto.width || 20;
    columnDto.defaultWidth = 20;
    columnDto.resizable = false;
    columnDto.draggable = false;
    columnDto.sortable = true;
    columnDto.getValue = value => ({id: value.id, favorite: value.favorite});
    super(columnDto);
  }
}

export default ColumnFavoriteModel;

