/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2022 KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2022 KhulnaSoft Ltd (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         4.3.0
 */

import {defaultAccountKit, defaultImportAccountKitContext, defaultProps} from "../../../contexts/Desktop/ImportAccountKitContext.test.data";


export function defaultContextProps(props = {}) {
  return defaultProps({
    importAccountKitContext: defaultImportAccountKitContext({accountKit: defaultAccountKit()}),
    ...props
  });
}

