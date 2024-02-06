/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.cipherguard.khulnasoft.com Cipherguard(tm)
 * @since         2.11.0
 */

/**
 * Unit tests on DisplayUserDetails in regard of specifications
 */

import {defaultAppContext, defaultProps} from "./DisplayUserGroupDetails.test.data";
import DisplayUserGroupDetailsPage from "./DisplayUserGroupDetails.test.page";

beforeEach(() => {
  jest.resetModules();
  let clipboardData = ''; //initalizing clipboard data so it can be used in testing
  const mockClipboard = {
    writeText: jest.fn(data => clipboardData = data),
    readText: jest.fn(() => document.activeElement.value = clipboardData),
  };
  global.navigator.clipboard = mockClipboard;
});

describe("Display User Details", () => {
  let page; // The page to test against
  const context = defaultAppContext(); // The applicative context
  const props = defaultProps(); // The props to pass

  const mockContextRequest = (context, implementation) => jest.spyOn(context.port, 'request').mockImplementation(implementation);

  beforeEach(() => {
    page = new DisplayUserGroupDetailsPage(context, props);
  });

  it('As LU I should follow a permalink to see the details of a group', async() => {
    expect.assertions(2);
    mockContextRequest(context, () => {});
    jest.spyOn(props.actionFeedbackContext, "displaySuccess").mockImplementationOnce(() => {});
    await page.copyPermalink();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("http://localhost/app/groups/view/516c2db6-0aed-52d8-854f-b3f3499995e7");
    expect(props.actionFeedbackContext.displaySuccess).toHaveBeenCalled();
  });


  it('As LU I should close the details area', async() => {
    jest.spyOn(props.userWorkspaceContext, "onDetailsLocked").mockImplementationOnce(() => {});
    await page.close();
    expect(props.userWorkspaceContext.onDetailsLocked).toHaveBeenCalled();
  });
});
