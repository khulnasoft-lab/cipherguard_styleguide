
/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2022 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2022 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         3.10.0
 */

import {defaultUserRbacContext} from "../../../../shared/context/Rbac/RbacContext.test.data";

/**
 * Default props
 * @returns {any}
 */
export function defaultProps(props) {
  const defaultProps = {
    hasPendingAccountRecoveryChoice: false,
    hasPendingMfaChoice: false,
    context: {
      onLogoutRequested: () => {
      },
      siteSettings: {
        canIUse: () => true
      }
    },
    rbacContext: defaultUserRbacContext()
  };
  return Object.assign(defaultProps, props || {});
}

