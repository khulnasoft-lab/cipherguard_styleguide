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

import React from "react";
import AddTotp from "./AddTotp";
import {defaultProps} from "./AddTotp.test.data";

export default {
  title: 'Components/Resource/AddTotp',
  component: AddTotp,
};

const Template = args  =>
  <AddTotp {...args}/>;

export const Initial = Template.bind({});
Initial.args = defaultProps();
