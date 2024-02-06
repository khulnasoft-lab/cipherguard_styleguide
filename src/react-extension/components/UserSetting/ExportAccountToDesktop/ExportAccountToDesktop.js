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
 * @since         4.3.0
 */

import React from 'react';
import PropTypes from "prop-types";
import {withAppContext} from "../../../../shared/context/AppContext/AppContext";
import {withActionFeedback} from "../../../contexts/ActionFeedbackContext";
import {Trans, withTranslation} from "react-i18next";
import Icon from "../../../../shared/components/Icons/Icon";


/**
 * This component displays the user profile information
 */
class ExportAccountToDesktop extends React.Component {
  /**
   * Default constructor
   * @param props Component props
   */
  constructor(props) {
    super(props);
    this.bindHandlers();
  }

  /**
   * Binds the component handlers
   */
  bindHandlers() {
    this.handleDownloadAccount = this.handleDownloadAccount.bind(this);
  }

  /**
   * handle the download account kit click event
   */
  async handleDownloadAccount() {
    try {
      await this.props.context.port.request('passbolt.desktop.export-account');
      await this.props.actionFeedbackContext.displaySuccess(this.props.t("The account kit has been downloaded successfully."));
    } catch (error) {
      // Could be that the user canceled or couldn't remember the passphrase
      if (error.name !== "UserAbortsOperationError") {
        return this.handleError(error);
      }
    }
  }

  /**
   * handle error to display the error dialog
   * @param error
   */
  async handleError(error) {
    await this.props.actionFeedbackContext.displayError(error.message);
  }

  /**
   * Render
   * @returns {JSX.Element}
   */
  render() {
    return (
      <div className="grid grid-responsive-12 profile-desktop-export">
        <div className="row">
          <>
            <div className="desktop-section col6 main-column">
              <h3><Trans>Welcome to the desktop app setup</Trans></h3>
              <h4 className="no-border"><Trans>Download the desktop app</Trans></h4>
              <p>
                <Trans>Cipherguard is available on the Windows store.</Trans>
              </p>
              <a className="windows-store" href="https://apps.microsoft.com/store/detail/passbolt/TBD" target="_blank" rel="noopener noreferrer">
                <svg width="160" height="56" viewBox="0 0 160 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_94_20105)">
                    <path d="M159.592 0.410278H0.425781V55.2598H159.592V0.410278Z" fill="black" />
                    <path d="M0.833333 0.802676H159.167V54.8495H0.833333V0.802676ZM0 55.6522H160V0H0V55.6522Z" fill="#D2D2D2" />
                    <path d="M28.5742 12.2363H13.0557V27.1839H28.5742V12.2363Z" fill="#F25022" />
                    <path d="M45.7036 12.2363H30.1851V27.1839H45.7036V12.2363Z" fill="#7FBA00" />
                    <path d="M28.5742 28.7179H13.0557V43.6655H28.5742V28.7179Z" fill="#00A4EF" />
                    <path d="M45.7036 28.7179H30.1851V43.6655H45.7036V28.7179Z" fill="#FFB900" />
                    <path d="M75.6113 29.0747C75.6113 28.6287 75.778 28.272 76.1113 27.9688C76.4447 27.6655 76.8336 27.5228 77.2965 27.5228C77.778 27.5228 78.1854 27.6834 78.5002 27.9866C78.815 28.2898 78.9817 28.6644 78.9817 29.0747C78.9817 29.5028 78.815 29.8773 78.4817 30.1627C78.1484 30.466 77.7595 30.6087 77.278 30.6087C76.7965 30.6087 76.4076 30.466 76.0743 30.1627C75.778 29.8595 75.6113 29.5028 75.6113 29.0747ZM78.6669 43.6655H75.9076V32.3389H78.6669V43.6655Z" fill="white" />
                    <path d="M87.0743 41.7212C87.4817 41.7212 87.9447 41.632 88.4447 41.4537C88.9447 41.2753 89.3891 41.0256 89.815 40.7223V43.2017C89.3706 43.4514 88.8706 43.6298 88.315 43.7547C87.7595 43.8795 87.1298 43.9509 86.4632 43.9509C84.741 43.9509 83.3336 43.4158 82.241 42.3634C81.1484 41.311 80.6113 39.9553 80.6113 38.3322C80.6113 36.5128 81.1669 35.0144 82.278 33.8372C83.3891 32.6599 84.9447 32.0713 86.9817 32.0713C87.5002 32.0713 88.0187 32.1426 88.5558 32.2675C89.0928 32.3924 89.5002 32.5529 89.815 32.7134V35.2642C89.3891 34.9609 88.9447 34.729 88.5002 34.5685C88.0558 34.408 87.5928 34.3188 87.1298 34.3188C86.0373 34.3188 85.1669 34.6577 84.4817 35.3355C83.815 36.0133 83.4817 36.9409 83.4817 38.1003C83.4817 39.2419 83.7965 40.1337 84.4447 40.7759C85.0928 41.418 85.9632 41.7212 87.0743 41.7212Z" fill="white" />
                    <path d="M97.6855 32.1605C97.9077 32.1605 98.1114 32.1784 98.278 32.1962C98.4447 32.2319 98.6114 32.2675 98.7225 32.3032V34.9966C98.5743 34.8896 98.3706 34.8004 98.0929 34.7112C97.8151 34.6221 97.4818 34.5685 97.0743 34.5685C96.3892 34.5685 95.8151 34.8361 95.3521 35.3891C94.8892 35.942 94.6484 36.7804 94.6484 37.9398V43.6655H91.8892V32.3389H94.6484V34.1226H94.6855C94.9447 33.4983 95.3151 33.0167 95.8336 32.6778C96.3521 32.3389 96.9632 32.1605 97.6855 32.1605Z" fill="white" />
                    <path d="M98.8706 38.1716C98.8706 36.2987 99.4262 34.8182 100.519 33.7123C101.611 32.6242 103.148 32.0713 105.093 32.0713C106.926 32.0713 108.371 32.6064 109.408 33.6588C110.445 34.7112 110.963 36.1382 110.963 37.9219C110.963 39.7591 110.408 41.2218 109.315 42.3099C108.222 43.3979 106.722 43.9331 104.834 43.9331C103.019 43.9331 101.556 43.4158 100.5 42.3812C99.4076 41.3645 98.8706 39.9553 98.8706 38.1716ZM101.759 38.0824C101.759 39.2597 102.037 40.1694 102.593 40.7937C103.148 41.418 103.945 41.7212 104.982 41.7212C105.982 41.7212 106.759 41.418 107.278 40.7937C107.797 40.1694 108.074 39.2419 108.074 38.0111C108.074 36.7982 107.797 35.8706 107.259 35.2463C106.722 34.622 105.945 34.3188 104.963 34.3188C103.945 34.3188 103.167 34.6398 102.593 35.2998C102.037 35.9598 101.759 36.8695 101.759 38.0824Z" fill="white" />
                    <path d="M115.074 35.3177C115.074 35.6923 115.204 35.9955 115.445 36.2095C115.704 36.4236 116.259 36.6912 117.111 37.0301C118.222 37.4582 119 37.9398 119.445 38.4749C119.889 39.01 120.111 39.6521 120.111 40.4013C120.111 41.4715 119.685 42.3277 118.833 42.9699C117.982 43.612 116.833 43.9331 115.389 43.9331C114.907 43.9331 114.37 43.8796 113.778 43.7547C113.185 43.6477 112.685 43.4871 112.278 43.3266V40.7045C112.778 41.0434 113.315 41.311 113.907 41.5072C114.482 41.7034 115.019 41.8104 115.482 41.8104C116.111 41.8104 116.574 41.7212 116.87 41.5607C117.167 41.4002 117.315 41.1148 117.315 40.7045C117.315 40.3299 117.167 40.0267 116.852 39.777C116.537 39.5273 115.963 39.224 115.093 38.903C114.074 38.4927 113.352 38.0289 112.926 37.5117C112.5 36.9944 112.278 36.3344 112.278 35.5496C112.278 34.5328 112.704 33.6945 113.537 33.0345C114.37 32.3745 115.463 32.0535 116.815 32.0535C117.222 32.0535 117.685 32.0891 118.204 32.1783C118.722 32.2675 119.148 32.3745 119.482 32.5172V35.0501C119.111 34.8182 118.685 34.622 118.204 34.4437C117.722 34.2831 117.222 34.1939 116.759 34.1939C116.241 34.1939 115.815 34.301 115.537 34.4972C115.222 34.6934 115.074 34.9788 115.074 35.3177Z" fill="white" />
                    <path d="M121.333 38.1716C121.333 36.2987 121.889 34.8182 122.982 33.7123C124.074 32.6242 125.611 32.0713 127.556 32.0713C129.389 32.0713 130.833 32.6064 131.871 33.6588C132.908 34.7112 133.426 36.1382 133.426 37.9219C133.426 39.7591 132.871 41.2218 131.778 42.3099C130.685 43.3979 129.185 43.9331 127.296 43.9331C125.482 43.9331 124.019 43.4158 122.963 42.3812C121.871 41.3645 121.333 39.9553 121.333 38.1716ZM124.204 38.0824C124.204 39.2597 124.482 40.1694 125.037 40.7937C125.593 41.418 126.389 41.7212 127.426 41.7212C128.426 41.7212 129.204 41.418 129.722 40.7937C130.241 40.1694 130.519 39.2419 130.519 38.0111C130.519 36.7982 130.241 35.8706 129.704 35.2463C129.167 34.622 128.389 34.3188 127.408 34.3188C126.389 34.3188 125.611 34.6398 125.037 35.2998C124.482 35.9598 124.204 36.8695 124.204 38.0824Z" fill="white" />
                    <path d="M142.556 34.5328V40.3477C142.556 41.5607 142.852 42.4525 143.426 43.059C144 43.6655 144.889 43.9509 146.056 43.9509C146.445 43.9509 146.852 43.9152 147.26 43.826C147.667 43.7368 147.963 43.6655 148.13 43.5584V41.3466C147.963 41.4536 147.76 41.5428 147.537 41.6142C147.315 41.6855 147.111 41.7212 146.963 41.7212C146.408 41.7212 145.982 41.5785 145.723 41.2931C145.463 41.0077 145.334 40.5083 145.334 39.8126V34.515H148.149V32.3388H145.352V28.9854L142.574 29.8059V32.3567H138.445V30.9832C138.445 30.3054 138.593 29.7881 138.908 29.4314C139.223 29.0746 139.667 28.9141 140.241 28.9141C140.537 28.9141 140.797 28.9497 141.037 29.0211C141.26 29.0924 141.426 29.1638 141.519 29.2173V26.9163C141.315 26.845 141.093 26.8093 140.834 26.7736C140.574 26.7379 140.278 26.7201 139.945 26.7201C138.686 26.7201 137.649 27.0947 136.852 27.8617C136.056 28.6287 135.649 29.5919 135.649 30.787V32.3567H133.686V34.5328H135.649V43.6833H138.445V34.5328H142.556Z" fill="white" />
                    <path d="M73.2407 27.8617V43.6655H70.3889V31.2864H70.3518L65.2592 43.6655H63.3703L58.1481 31.2864H58.1111V43.6655H55.4814V27.8617H59.5555L64.2777 39.5808H64.3518L69.3333 27.8617H73.2407Z" fill="white" />
                    <path d="M62.9631 21.0301C61.9816 21.5652 60.8705 21.8328 59.6298 21.8328C58.6853 21.8328 57.852 21.6366 57.1113 21.2263C56.389 20.8339 55.815 20.2631 55.4261 19.5318C55.0372 18.8005 54.8335 17.9799 54.8335 17.0702C54.8335 16.107 55.0557 15.233 55.4816 14.4838C55.9076 13.7347 56.5187 13.1282 57.315 12.7001C58.1113 12.272 59.0002 12.058 60.0002 12.058C60.5002 12.058 61.0002 12.1115 61.5002 12.2007C62.0002 12.2899 62.4076 12.4147 62.7224 12.5574V13.9844C61.9816 13.5028 61.0372 13.2709 59.889 13.2709C59.2039 13.2709 58.5928 13.4315 58.0372 13.7525C57.4816 14.0736 57.0557 14.5195 56.7594 15.0725C56.4631 15.6433 56.315 16.2854 56.315 16.9989C56.315 18.1226 56.6298 19.0145 57.2409 19.6745C57.852 20.3345 58.7039 20.6555 59.7779 20.6555C60.4631 20.6555 61.0742 20.5307 61.5928 20.2631V17.8194H59.5002V16.6422H62.9631V21.0301Z" fill="white" />
                    <path d="M70.9444 18.6577H66.0925C66.111 19.3355 66.3332 19.8528 66.7036 20.2274C67.0925 20.5841 67.5925 20.7803 68.2221 20.7803C69.0555 20.7803 69.7777 20.5484 70.4073 20.0847V21.2262C70.1295 21.4046 69.7777 21.5652 69.3518 21.6722C68.9258 21.7792 68.4814 21.8327 68.0369 21.8327C66.9814 21.8327 66.1481 21.5295 65.574 20.923C64.9999 20.3165 64.7036 19.4604 64.7036 18.3544C64.7036 17.6766 64.8518 17.0523 65.1295 16.5172C65.4073 15.9643 65.8147 15.5362 66.3147 15.2329C66.8147 14.9297 67.3888 14.7692 67.9999 14.7692C68.9073 14.7692 69.6295 15.0546 70.1481 15.6254C70.6666 16.1961 70.9258 16.981 70.9258 17.9977V18.6577H70.9444ZM69.5925 17.641C69.5925 17.0523 69.4444 16.6064 69.1666 16.3032C68.8888 15.9999 68.4999 15.8394 67.9814 15.8394C67.5184 15.8394 67.111 15.9999 66.7592 16.321C66.4073 16.6421 66.2036 17.088 66.0925 17.641H69.5925Z" fill="white" />
                    <path d="M76.204 21.6008C76.0744 21.6721 75.9078 21.7257 75.667 21.7613C75.4448 21.797 75.2411 21.8148 75.0559 21.8148C73.7596 21.8148 73.1115 21.1192 73.1115 19.7457V15.9999H71.9263V14.9297H73.1115V13.3243L74.4633 12.9141V14.9118H76.1855V15.9821H74.4633V19.5138C74.4633 19.9598 74.5374 20.2808 74.6855 20.4592C74.8337 20.6376 75.0929 20.7268 75.4818 20.7268C75.7411 20.7268 75.9818 20.6554 76.1855 20.5127V21.6008H76.204Z" fill="white" />
                    <path d="M82.9073 12.5395C82.9073 12.7536 82.8332 12.9319 82.6666 13.0925C82.4999 13.253 82.2962 13.3243 82.0555 13.3243C81.8147 13.3243 81.611 13.253 81.4444 13.0925C81.2777 12.9498 81.2036 12.7536 81.2036 12.5217C81.2036 12.2898 81.2962 12.0936 81.4629 11.9509C81.6295 11.8082 81.8332 11.719 82.0555 11.719C82.2777 11.719 82.4814 11.7903 82.6481 11.9509C82.8332 12.1293 82.9073 12.3076 82.9073 12.5395ZM82.7221 21.6722H81.3703V14.9297H82.7221V21.6722Z" fill="white" />
                    <path d="M88.5927 21.6008C88.4631 21.6721 88.2964 21.7257 88.0557 21.7613C87.8335 21.797 87.6298 21.8148 87.4446 21.8148C86.1483 21.8148 85.5001 21.1192 85.5001 19.7457V15.9999H84.3149V14.9297H85.5001V13.3243L86.852 12.9141V14.9118H88.5742V15.9821H86.852V19.5138C86.852 19.9598 86.9261 20.2808 87.0742 20.4592C87.2224 20.6376 87.4816 20.7268 87.8705 20.7268C88.1298 20.7268 88.3705 20.6554 88.5742 20.5127V21.6008H88.5927Z" fill="white" />
                    <path d="M97.4445 12.7893C97.2223 12.6822 96.9816 12.6109 96.7038 12.6109C95.9445 12.6109 95.5741 13.0568 95.5741 13.9487V14.9119H97.1667V15.9821H95.5741V21.6544H94.2223V16H93.0371V14.9297H94.2223V13.8952C94.2223 13.1817 94.426 12.6109 94.8519 12.1828C95.2779 11.7547 95.8519 11.5406 96.5927 11.5406C96.963 11.5406 97.2408 11.5763 97.463 11.6655V12.7893H97.4445Z" fill="white" />
                    <path d="M102.426 16.2318C102.352 16.1783 102.204 16.1248 102.019 16.0713C101.833 16.0356 101.667 15.9999 101.537 15.9999C101.056 15.9999 100.667 16.214 100.371 16.6242C100.074 17.0345 99.9261 17.5696 99.9261 18.2296V21.6721H98.5742V14.9297H99.9261V16.2853H99.9631C100.111 15.8215 100.352 15.4648 100.667 15.1972C100.982 14.9297 101.352 14.8048 101.759 14.8048C102.037 14.8048 102.259 14.8405 102.408 14.894V16.2318H102.426Z" fill="white" />
                    <path d="M110.148 18.2653C110.148 19.3533 109.815 20.2274 109.167 20.8695C108.519 21.5116 107.648 21.8327 106.574 21.8327C105.519 21.8327 104.667 21.5116 104.037 20.8873C103.408 20.263 103.093 19.4247 103.093 18.3723C103.093 17.2485 103.426 16.3745 104.074 15.7324C104.722 15.0902 105.611 14.7692 106.741 14.7692C107.796 14.7692 108.63 15.0724 109.222 15.6967C109.852 16.321 110.148 17.1772 110.148 18.2653ZM108.759 18.3009C108.759 17.4983 108.574 16.8918 108.222 16.4815C107.852 16.0713 107.352 15.8572 106.685 15.8572C106.019 15.8572 105.482 16.0713 105.093 16.5172C104.704 16.9453 104.519 17.5696 104.519 18.3544C104.519 19.1215 104.704 19.7101 105.093 20.1382C105.482 20.5663 106 20.7803 106.685 20.7803C107.371 20.7803 107.889 20.5663 108.241 20.156C108.574 19.7101 108.759 19.1036 108.759 18.3009Z" fill="white" />
                    <path d="M122.241 21.6722H120.889V17.8372C120.889 17.1415 120.778 16.6421 120.556 16.321C120.333 15.9999 119.945 15.8573 119.407 15.8573C118.963 15.8573 118.574 16.0535 118.278 16.4459C117.963 16.8383 117.815 17.3199 117.815 17.855V21.6722H116.463V17.7123C116.463 16.4816 115.963 15.8573 114.982 15.8573C114.519 15.8573 114.13 16.0535 113.833 16.428C113.537 16.8026 113.389 17.2842 113.389 17.8729V21.69H112.037V14.9297H113.389V15.9821H113.407C113.907 15.1616 114.648 14.7692 115.593 14.7692C116.037 14.7692 116.445 14.894 116.815 15.1259C117.167 15.3578 117.426 15.6967 117.593 16.1248C117.87 15.661 118.185 15.3221 118.574 15.0903C118.963 14.8762 119.407 14.7513 119.926 14.7513C121.463 14.7513 122.222 15.661 122.222 17.4983V21.6722H122.241Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_94_20105">
                      <rect width="160" height="55.6522" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <h4><Trans>Transfer your account kit</Trans></h4>
              <p><Trans>An account kit is required to transfer your profile and private key to the desktop app.</Trans></p>
              <div className="submit-wrapper">
                <button type="button" id="download-account-kit" className={`button primary`} role="button" onClick={this.handleDownloadAccount}>
                  <Trans>Download your account kit</Trans>
                </button>
              </div>
            </div>
            <div className="col4 last">
              <div className="sidebar-help">
                <h3><Trans>Get started in 5 easy steps</Trans></h3>
                <p><Trans>1. Click download the account kit.</Trans></p>
                <p><Trans>2. Install the application from the store.</Trans></p>
                <p><Trans>3. Open the application.</Trans></p>
                <p><Trans>4. Upload the account kit on the desktop app.</Trans></p>
                <p><Trans>5. And you are done!</Trans></p>
                <a className="button" href="https://help.cipherguard.khulnasoft.com/TBD" target="_blank" rel="noopener noreferrer">
                  <Icon name="document" />
                  <span><Trans>Read the documentation</Trans></span>
                </a>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
}

ExportAccountToDesktop.propTypes = {
  context: PropTypes.object, // Application context
  actionFeedbackContext: PropTypes.any, // The action feedback context
  t: PropTypes.func, // The translation function
};

export default withAppContext(withActionFeedback(withTranslation('common')(ExportAccountToDesktop)));
