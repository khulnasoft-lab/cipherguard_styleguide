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
 * @since         2.13.0
 */
/**
 * This file contains icons from FontAwesome v3
 * by Dave Gandy - http://fontawesome.io.
 *
 * The Font Awesome font is licensed under the SIL OFL 1.1:
 * http://scripts.sil.org/OFL
 *
 * Font-Awesome-SVG-PNG is licensed under the MIT license
 * Copyright (c) 2014 Code Charm Ltd
 * https://github.com/encharm/Font-Awesome-SVG-PNG
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

class Icon extends Component {
  /**
   * Get icon classname
   * @returns {string}
   */
  getClassName() {
    let className = `svg-icon ${this.props.name}`;
    if (this.props.big) {
      className += ' icon-only';
    }
    if (this.props.baseline) {
      className += ' baseline';
    }
    if (this.props.dim) {
      className += ' dim';
    }
    return className;
  }

  /**
   * Render the component
   * @return {JSX}
   */
  render() {
    return (
      <span className={this.getClassName()} onClick={this.props.onClick} style={this.props.style}>
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === '2-columns' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.97528 1.43999V15.24M7.97528 1.43999H13.3453C13.5466 1.43866 13.7461 1.47733 13.9323 1.55375C14.1185 1.63017 14.2878 1.74282 14.4301 1.88516C14.5725 2.0275 14.6851 2.19669 14.7615 2.38292C14.838 2.56915 14.8766 2.7687 14.8753 2.96999V13.7C14.8766 13.9018 14.838 14.1018 14.7617 14.2886C14.6854 14.4754 14.5729 14.6452 14.4307 14.7883C14.2885 14.9315 14.1194 15.0451 13.9332 15.1226C13.7469 15.2001 13.547 15.24 13.3453 15.24H7.97528V1.43999ZM7.97528 1.43999H2.6153C2.41353 1.43867 2.21346 1.47727 2.02667 1.55357C1.83989 1.62987 1.67005 1.74236 1.52692 1.88457C1.38378 2.02677 1.2702 2.19588 1.19269 2.38217C1.11517 2.56845 1.07525 2.76823 1.07526 2.96999V13.7C1.07526 14.1084 1.2375 14.5001 1.52631 14.7889C1.81511 15.0777 2.20686 15.24 2.6153 15.24H7.97528V1.43999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === '3-dots-h' &&
          <svg width="16" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--icon-color)"stroke="none"/>
            <circle cx="8" cy="1.5" r="1.5" fill="var(--icon-color)"stroke="none"/>
            <circle cx="14.5" cy="1.5" r="1.5" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === '3-dots-v' &&
          <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--icon-color)"stroke="none"/>
            <circle cx="1.5" cy="8" r="1.5" fill="var(--icon-color)"stroke="none"/>
            <circle cx="1.5" cy="14.5" r="1.5" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'add' &&
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51996 1.50999V11.17" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.68994 6.34H11.3499" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'arrow-left' &&
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.62 6.34H0.959961" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.77995 11.17L0.949951 6.34L5.77995 1.50999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'arrow-right' &&
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.61993 6.34H11.2799" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.47992 1.50999L11.3099 6.34L6.47992 11.17" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'ascending' &&
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.87466 9.07V1.61" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.13467 5.34L4.87466 1.61L8.60464 5.34" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'ban' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.58527 13.33C10.8935 13.33 13.5753 10.6482 13.5753 7.34001C13.5753 4.03182 10.8935 1.35001 7.58527 1.35001C4.27708 1.35001 1.59528 4.03182 1.59528 7.34001C1.59528 10.6482 4.27708 13.33 7.58527 13.33Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.34528 3.11L11.8152 11.57" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'broken-link' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.76352 11.73L6.76352 12.73C6.44415 13.0524 6.0633 13.3075 5.64352 13.48C5.22571 13.6553 4.7766 13.7438 4.32352 13.74C3.40986 13.7429 2.53235 13.3833 1.88351 12.74C1.56332 12.4205 1.30928 12.0409 1.13596 11.6231C0.962628 11.2053 0.873383 10.7573 0.873383 10.305C0.873383 9.85264 0.962628 9.40473 1.13596 8.9869C1.30928 8.56907 1.56332 8.18952 1.88351 7.87L2.88351 6.87" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6635 7.82999L12.6635 6.82999C12.986 6.51063 13.241 6.12976 13.4135 5.70999C13.592 5.29282 13.6838 4.84374 13.6835 4.38999C13.6837 3.70751 13.4815 3.0403 13.1024 2.47277C12.7233 1.90524 12.1844 1.4629 11.5539 1.2017C10.9234 0.940496 10.2296 0.872172 9.56021 1.00537C8.89085 1.13857 8.27598 1.46731 7.79349 1.94999L6.79349 2.94999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.1735 11.24L3.36349 3.42999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'calendar' &&
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7348 2.64999H2.7748C1.99055 2.64999 1.35475 3.28575 1.35475 4.06999V14.03C1.35475 14.8142 1.99055 15.45 2.7748 15.45H12.7348C13.519 15.45 14.1548 14.8142 14.1548 14.03V4.06999C14.1548 3.28575 13.519 2.64999 12.7348 2.64999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5948 1.23V4.07" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.9048 1.23V4.07" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.35475 6.92H14.1548" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'camera' &&
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5953 12.07C16.5926 12.429 16.4482 12.7723 16.1934 13.0252C15.9387 13.2781 15.5941 13.42 15.2352 13.42H3.04523C2.68718 13.42 2.34381 13.2778 2.09064 13.0246C1.83746 12.7714 1.69525 12.428 1.69525 12.07V4.59C1.69525 4.23196 1.83746 3.88858 2.09064 3.63541C2.34381 3.38224 2.68718 3.24001 3.04523 3.24001H5.74518L7.09528 1.24001H11.1452L12.4952 3.24001H15.1953C15.5542 3.24 15.8986 3.38191 16.1534 3.6348C16.4081 3.88769 16.5526 4.23105 16.5552 4.59L16.5953 12.07Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.16522 10.72C10.6564 10.72 11.8652 9.51118 11.8652 8.02001C11.8652 6.52884 10.6564 5.32001 9.16522 5.32001C7.67405 5.32001 6.46527 6.52884 6.46527 8.02001C6.46527 9.51118 7.67405 10.72 9.16522 10.72Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'caret-down' &&
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L5 7L9 3" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'caret-left' &&
          <svg width="10" height="10" transform="rotate(90)" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L5 7L9 3" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'caret-right' &&
          <svg width="10" height="10" transform="rotate(270)" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L5 7L9 3" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'caret-up' &&
          <svg width="10" height="10" transform="rotate(180)" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L5 7L9 3" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'check' &&
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6647 0.940002L4.86478 9.74L0.864777 5.74" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'clock' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.69485 15.18C11.4725 15.18 14.5348 12.1176 14.5348 8.34C14.5348 4.56237 11.4725 1.5 7.69485 1.5C3.91723 1.5 0.854767 4.56237 0.854767 8.34C0.854767 12.1176 3.91723 15.18 7.69485 15.18Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.69485 4.23V8.34L10.4248 9.71" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'close-circle' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.42523 13.33C10.7334 13.33 13.4152 10.6482 13.4152 7.34001C13.4152 4.03182 10.7334 1.35001 7.42523 1.35001C4.11705 1.35001 1.43524 4.03182 1.43524 7.34001C1.43524 10.6482 4.11705 13.33 7.42523 13.33Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.12518 5.65001L5.73517 9.03001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.73517 5.65001L9.12518 9.03001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'close' &&
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.69525 1.2L1.41522 9.48" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.41522 1.2L9.69525 9.48" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'copy-to-clipboard' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6147 6.27H7.40469C7.22347 6.27 7.04405 6.3057 6.87662 6.37505C6.70919 6.4444 6.55707 6.54605 6.42892 6.6742C6.30078 6.80234 6.19908 6.95447 6.12973 7.1219C6.06038 7.28933 6.02469 7.46878 6.02469 7.65001V13.86C6.02469 14.226 6.17012 14.577 6.42892 14.8358C6.68772 15.0946 7.03869 15.24 7.40469 15.24H13.6147C13.9807 15.24 14.3317 15.0946 14.5905 14.8358C14.8493 14.577 14.9947 14.226 14.9947 13.86V7.65001C14.9947 7.46878 14.959 7.28933 14.8897 7.1219C14.8203 6.95447 14.7186 6.80234 14.5905 6.6742C14.4623 6.54605 14.3102 6.4444 14.1428 6.37505C13.9754 6.3057 13.7959 6.27 13.6147 6.27Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.26468 10.41H2.57468C2.38882 10.4136 2.20425 10.3791 2.03226 10.3086C1.86026 10.2381 1.70449 10.1331 1.57468 10C1.44256 9.86948 1.33818 9.71364 1.26773 9.54181C1.19728 9.36998 1.16224 9.1857 1.1647 9V2.82C1.16281 2.63439 1.19811 2.45027 1.26852 2.27852C1.33894 2.10677 1.44303 1.95086 1.57468 1.82C1.70499 1.68827 1.86107 1.58477 2.03311 1.51596C2.20515 1.44714 2.38946 1.41448 2.57468 1.42H8.7847C8.968 1.41862 9.14969 1.45404 9.31906 1.52416C9.48843 1.59428 9.64204 1.69767 9.77072 1.82822C9.8994 1.95877 10.0006 2.11381 10.0683 2.28417C10.1359 2.45453 10.1687 2.63674 10.1647 2.82V3.51" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'descending' &&
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.40469 1.61V9.07" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.13467 5.34L5.40469 9.07L1.6647 5.34" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'document' &&
          <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47476 1.39999H2.92471C2.74218 1.39999 2.5615 1.43594 2.39285 1.5058C2.22421 1.57565 2.071 1.67804 1.94193 1.80711C1.81285 1.93619 1.71039 2.08942 1.64053 2.25806C1.57068 2.42671 1.53482 2.60746 1.53482 2.78999V13.89C1.53482 14.0721 1.5708 14.2523 1.64078 14.4204C1.71075 14.5885 1.81333 14.7411 1.94254 14.8694C2.07174 14.9976 2.225 15.0991 2.39359 15.1678C2.56217 15.2366 2.74265 15.2713 2.92471 15.27H11.2448C11.4268 15.2713 11.6073 15.2366 11.7759 15.1678C11.9445 15.0991 12.0979 14.9976 12.2271 14.8694C12.3563 14.7411 12.4587 14.5885 12.5287 14.4204C12.5987 14.2523 12.6348 14.0721 12.6348 13.89V5.58999L8.47476 1.39999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.46475 1.39999V5.56999H12.6248" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.85477 9.03H4.30472" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.85477 11.81H4.30472" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.69473 6.25999H4.99478H4.30472" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'download-a' &&
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.01358 10.65L8.65359 13.29L11.2936 10.65" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.65359 7.34V13.29" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5135 11.36C15.0875 10.9566 15.518 10.3808 15.7425 9.71616C15.9671 9.05151 15.974 8.33258 15.7622 7.66375C15.5504 6.99492 15.131 6.411 14.5648 5.99674C13.9986 5.58248 13.3151 5.35944 12.6135 5.36H11.7835C11.5878 4.58232 11.2178 3.85932 10.7015 3.24567C10.1852 2.63202 9.53617 2.14378 8.80345 1.81786C8.07073 1.49194 7.27349 1.33687 6.47203 1.36438C5.67056 1.39189 4.88587 1.60126 4.17723 1.97666C3.46858 2.35205 2.85455 2.88365 2.38157 3.53126C1.90859 4.17886 1.58909 4.92553 1.44712 5.7148C1.30516 6.50407 1.34445 7.31529 1.56211 8.08712C1.77978 8.85895 2.17005 9.5712 2.70347 10.17" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'download' &&
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3233 10.64V13.7C15.3246 13.9018 15.286 14.1018 15.2097 14.2886C15.1334 14.4754 15.0209 14.6452 14.8787 14.7883C14.7365 14.9315 14.5674 15.0451 14.3811 15.1226C14.1949 15.2001 13.9951 15.24 13.7933 15.24H3.06332C2.86109 15.24 2.66081 15.2002 2.47397 15.1228C2.28713 15.0454 2.11737 14.9319 1.97437 14.7889C1.83136 14.6459 1.71793 14.4762 1.64053 14.2893C1.56314 14.1025 1.52332 13.9022 1.52332 13.7V10.64" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.59332 6.81L8.43332 10.64L12.2633 6.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.43332 10.64V1.44" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'edit' &&
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53454 2.85999H2.70452C2.52292 2.85866 2.34289 2.89345 2.17486 2.96233C2.00683 3.03121 1.85417 3.13281 1.72576 3.26122C1.59735 3.38963 1.49575 3.54229 1.42687 3.71032C1.35799 3.87835 1.32318 4.0584 1.32451 4.23999V13.9C1.31899 14.0852 1.35164 14.2696 1.42046 14.4416C1.48928 14.6136 1.59281 14.7697 1.72454 14.9C1.8554 15.0316 2.01128 15.1357 2.18303 15.2062C2.35478 15.2766 2.53892 15.3119 2.72454 15.31H12.3845C12.7489 15.3048 13.0969 15.1578 13.3546 14.9001C13.6123 14.6424 13.7593 14.2944 13.7645 13.93V9.06999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.7045 1.82C12.9733 1.55934 13.3303 1.4094 13.7045 1.4C13.8966 1.39867 14.0871 1.43552 14.2648 1.50842C14.4426 1.58132 14.604 1.68882 14.7399 1.82466C14.8757 1.9605 14.9832 2.12197 15.0561 2.29971C15.129 2.47745 15.1659 2.6679 15.1646 2.86C15.1622 3.04677 15.1229 3.23124 15.0491 3.40284C14.9753 3.57443 14.8685 3.72979 14.7346 3.86L8.18451 10.42L5.42456 11.11L6.11456 8.35L12.7045 1.82Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'envelope' &&
          <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.96527 1.24001H13.1552C13.493 1.24 13.8171 1.37348 14.0568 1.61137C14.2966 1.84925 14.4326 2.17226 14.4352 2.51V10.16C14.4326 10.4977 14.2966 10.8208 14.0568 11.0586C13.8171 11.2965 13.493 11.43 13.1552 11.43H2.96527C2.62752 11.43 2.30342 11.2965 2.06366 11.0586C1.8239 10.8208 1.68788 10.4977 1.68524 10.16V2.51C1.68788 2.17226 1.8239 1.84925 2.06366 1.61137C2.30342 1.37348 2.62752 1.24 2.96527 1.24001V1.24001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.4352 2.52L8.06525 6.98L1.69525 2.52" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'expand' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4549 1.73H14.8548V6.14" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.04483 14.95H1.6348V10.54" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.8648 1.73L9.71487 6.87" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.6348 14.95L6.77481 9.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'external-link' &&
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2239 9.10001V13.7C13.2239 14.1084 13.0617 14.5001 12.7729 14.7889C12.4841 15.0778 12.0924 15.24 11.6839 15.24H3.25388C3.05289 15.2412 2.85377 15.2019 2.66824 15.1246C2.48272 15.0473 2.31461 14.9335 2.17392 14.79C2.03098 14.6468 1.91764 14.4768 1.84043 14.2898C1.76321 14.1028 1.72363 13.9023 1.72391 13.7V5.27C1.72653 4.86503 1.88859 4.47739 2.17496 4.19103C2.46132 3.90466 2.84891 3.74263 3.25388 3.74001H7.85391" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.9239 1.44H15.5239V6.04" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.08389 9.87L15.5239 1.44" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'eye-close' &&
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2347 9.8C10.0451 10.0025 9.81744 10.1656 9.56473 10.28C9.30808 10.3893 9.0335 10.4503 8.75473 10.46C8.47778 10.4605 8.20314 10.4096 7.94473 10.31C7.68694 10.2031 7.45254 10.0469 7.25473 9.85001C7.05246 9.65668 6.89537 9.42107 6.79471 9.16C6.69246 8.90261 6.64477 8.62678 6.65469 8.35C6.65565 8.07447 6.71357 7.80211 6.82474 7.55C6.94001 7.29486 7.10291 7.06406 7.30472 6.87L10.2347 9.8ZM12.8647 12.44C11.6829 13.3356 10.2473 13.8329 8.76474 13.86C3.93474 13.86 1.17471 8.34 1.17471 8.34C2.03377 6.73809 3.22745 5.33978 4.67471 4.24L12.8647 12.44ZM7.30472 2.98C7.77695 2.87138 8.26016 2.81769 8.74472 2.82C13.5747 2.82 16.3347 8.34 16.3347 8.34C15.9175 9.12411 15.418 9.86159 14.8447 10.54L7.30472 2.98Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.17471 0.75L16.3547 15.93" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'eye-open' &&
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.99472 6.33999C0.99472 6.33999 3.75475 0.819992 8.58475 0.819992C13.4147 0.819992 16.1747 6.33999 16.1747 6.33999C16.1747 6.33999 13.4147 11.86 8.58475 11.86C3.75475 11.86 0.99472 6.33999 0.99472 6.33999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.58475 8.40999C8.99415 8.40999 9.39436 8.28859 9.73477 8.06113C10.0752 7.83368 10.3405 7.51038 10.4972 7.13214C10.6538 6.7539 10.6948 6.33769 10.615 5.93615C10.5351 5.53461 10.3379 5.16577 10.0484 4.87628C9.75894 4.58678 9.3901 4.38964 8.98856 4.30976C8.58702 4.22989 8.17082 4.27089 7.79257 4.42756C7.41433 4.58423 7.09101 4.84955 6.86356 5.18996C6.6361 5.53037 6.51474 5.93058 6.51474 6.33999C6.51474 6.88899 6.7328 7.4155 7.121 7.8037C7.5092 8.1919 8.03575 8.40999 8.58475 8.40999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'filter' &&
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8734 1.44H1.54337L7.67337 8.69V13.71L10.7334 15.24V8.69L16.8734 1.44Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'folder' &&
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10.77C14.0011 10.9326 13.9672 11.0937 13.9006 11.2433C13.834 11.393 13.736 11.528 13.6127 11.64C13.3673 11.8712 13.0363 12.0006 12.6916 12H2.29792C1.95325 12.0006 1.62224 11.8712 1.37683 11.64C1.25729 11.5257 1.16249 11.3901 1.09784 11.2408C1.03319 11.0915 0.999929 10.9316 1 10.77V2.22C1.00148 1.89698 1.13701 1.58771 1.37683 1.36C1.62224 1.12877 1.95325 0.999403 2.29792 1H5.54266L6.85103 2.84H12.6916C13.0363 2.8394 13.3673 2.96877 13.6127 3.2C13.7348 3.31089 13.832 3.44427 13.8986 3.59209C13.9651 3.73991 13.9996 3.89909 14 4.06V10.77Z" fill="var(--icon-background-color)" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'folders' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9438 12.5803C13.9455 12.7685 13.9124 12.9552 13.8464 13.1293C13.7804 13.3035 13.6829 13.4616 13.5595 13.5943C13.309 13.8584 12.972 14.0042 12.6222 13.9999H2.3125C1.96297 14.0031 1.62631 13.8574 1.37525 13.5943C1.25312 13.4611 1.15697 13.3027 1.09257 13.1285C1.02816 12.9543 0.996821 12.7679 1.00035 12.5803V5.92825C0.996282 5.74059 1.02739 5.55399 1.09182 5.37971C1.15626 5.20542 1.25268 5.04707 1.37525 4.91422C1.4979 4.78073 1.64403 4.67516 1.805 4.60376C1.96597 4.53235 2.13853 4.49655 2.3125 4.49847H5.54599L6.8394 6.59751H12.6597C13.0013 6.60275 13.3274 6.75187 13.5689 7.01317C13.8104 7.27447 13.9483 7.62737 13.9531 7.99687L13.9438 12.5803Z" fill="var(--icon-background-color)" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.04723 2.42985C1.04316 2.24219 1.07426 2.05559 1.1387 1.88131C1.20313 1.70702 1.29955 1.54868 1.42212 1.41582C1.54477 1.28233 1.6909 1.17676 1.85188 1.10535C2.01285 1.03395 2.1854 0.998153 2.35937 1.00007H6.8863L8.17968 3.09911H12.7066C13.0481 3.10435 13.3743 3.25347 13.6158 3.51477C13.8574 3.77607 13.9952 4.12896 14 4.49847" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'info-circle' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25473 15.24C9.61942 15.24 10.9535 14.8353 12.0882 14.0771C13.2229 13.319 14.1072 12.2413 14.6295 10.9805C15.1517 9.71971 15.2884 8.33235 15.0221 6.99388C14.7559 5.65541 14.0987 4.42595 13.1338 3.46097C12.1688 2.49599 10.9393 1.83882 9.60086 1.57259C8.26239 1.30635 6.87504 1.44299 5.61423 1.96524C4.35342 2.48748 3.27579 3.37187 2.51761 4.50657C1.75943 5.64127 1.35471 6.97531 1.35471 8.34C1.35735 10.1692 2.0852 11.9227 3.37863 13.2161C4.67206 14.5095 6.42555 15.2374 8.25473 15.24Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.25473 11.1V8.34" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.25473 5.65V5.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'internal-link' &&
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.52392 8.8V3.28C1.5226 3.038 1.56925 2.79813 1.66125 2.5743C1.75325 2.35046 1.88875 2.14709 2.05987 1.97597C2.231 1.80484 2.43436 1.66936 2.6582 1.57736C2.88204 1.48536 3.12189 1.43867 3.36389 1.44H13.4839C13.9719 1.44 14.4399 1.63386 14.785 1.97892C15.13 2.32399 15.3239 2.792 15.3239 3.28V13.4C15.3229 13.6402 15.2753 13.8779 15.1839 14.1C15.0899 14.3236 14.9542 14.5272 14.7839 14.7C14.4387 15.0443 13.9714 15.2383 13.4839 15.24H7.96393" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.35385 6.75999H9.95389V11.4" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.5239 15.24L9.95389 6.75999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'layout' &&
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8629 1.19H2.30292C1.54629 1.19 0.932922 1.80337 0.932922 2.56V12.12C0.932922 12.8766 1.54629 13.49 2.30292 13.49H11.8629C12.6195 13.49 13.2329 12.8766 13.2329 12.12V2.56C13.2329 1.80337 12.6195 1.19 11.8629 1.19Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.932922 5.29001H13.2329" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.03296 13.49V5.29001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'license' &&
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2155 8.58999C14.9711 7.80057 15.3874 6.74663 15.3755 5.65392C15.3635 4.5612 14.9242 3.51661 14.1515 2.7439C13.3788 1.97119 12.3342 1.5318 11.2415 1.51986C10.1487 1.50791 9.09484 1.92436 8.30542 2.67999L3.60535 7.38V13.3H9.52539L14.2155 8.58999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.2654 5.59L1.51538 15.34" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.3154 10.47H6.39539" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'life-ring' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.70966 13.43C11.0731 13.43 13.7996 10.7034 13.7996 7.34C13.7996 3.97659 11.0731 1.25 7.70966 1.25C4.34624 1.25 1.61969 3.97659 1.61969 7.34C1.61969 10.7034 4.34624 13.43 7.70966 13.43Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.70966 9.77999C9.05723 9.77999 10.1497 8.68757 10.1497 7.33999C10.1497 5.99242 9.05723 4.89999 7.70966 4.89999C6.36208 4.89999 5.26971 5.99242 5.26971 7.33999C5.26971 8.68757 6.36208 9.77999 7.70966 9.77999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.40973 3.03L5.98969 5.62" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.43964 9.06L12.0197 11.65" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.43964 5.62L12.0197 3.03" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.43964 5.62L11.5897 3.47" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.40973 11.65L5.98969 9.06" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'link' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.84119 9.03C7.13202 9.43825 7.50715 9.77928 7.94119 10.03C8.37534 10.2686 8.85677 10.4086 9.3512 10.44C9.86059 10.4745 10.3709 10.3889 10.8412 10.19C11.3076 10.0211 11.731 9.75138 12.0812 9.39999L14.1512 7.33C14.6209 6.84495 14.938 6.23271 15.0631 5.56918C15.1883 4.90564 15.1159 4.21998 14.8551 3.59716C14.5943 2.97435 14.1564 2.44177 13.5958 2.06543C13.0351 1.68909 12.3764 1.48553 11.7012 1.47999C11.2503 1.47878 10.8036 1.56647 10.3866 1.73806C9.96966 1.90966 9.59061 2.16177 9.27118 2.47999L8.08118 3.58999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.64117 7.65C9.34989 7.23849 8.97075 6.89691 8.53118 6.65C8.09831 6.40942 7.61823 6.266 7.12432 6.22974C6.63042 6.19347 6.13455 6.26522 5.67118 6.44C5.20474 6.60886 4.78133 6.87861 4.43118 7.23L2.36119 9.3C1.87601 9.78489 1.54639 10.4034 1.41442 11.0765C1.28246 11.7497 1.35414 12.4469 1.62033 13.079C1.88651 13.7112 2.33511 14.2497 2.90881 14.6257C3.48251 15.0017 4.15529 15.1982 4.84118 15.19C5.29207 15.1912 5.73876 15.1035 6.15573 14.9319C6.57269 14.7603 6.95174 14.5082 7.27117 14.19L8.45117 13.01" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'list' &&
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.95473 1.53999H15.3548" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.95473 6.34H15.3548" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.95473 11.14H15.3548" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.954727 1.53999H0.964737" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.954727 6.34H0.964737" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.954727 11.14H0.964737" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'log-out' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.44388 13.59H2.68387C2.49801 13.5936 2.31338 13.5591 2.14139 13.4886C1.96939 13.4181 1.81368 13.3131 1.68387 13.18C1.55176 13.0495 1.44737 12.8936 1.37692 12.7218C1.30647 12.55 1.27143 12.3657 1.27389 12.18V2.51C1.272 2.32439 1.3073 2.14028 1.37772 1.96853C1.44813 1.79678 1.55222 1.64087 1.68387 1.51C1.81418 1.37827 1.9702 1.27478 2.14224 1.20596C2.31428 1.13714 2.49866 1.10448 2.68387 1.11001H5.44388" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.2739 10.79L13.7239 7.34L10.2739 3.89" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.7239 7.34H5.44388" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'plus-circle' &&
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.38519 9.63999C7.76002 9.63999 9.68524 7.71482 9.68524 5.33999C9.68524 2.96517 7.76002 1.03999 5.38519 1.03999C3.01037 1.03999 1.08527 2.96517 1.08527 5.33999C1.08527 7.71482 3.01037 9.63999 5.38519 9.63999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.38519 3.62V7.06" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.66522 5.34H7.10516" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'plus-square' &&
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.12531 1.03999H2.43524C1.90505 1.03999 1.47528 1.4698 1.47528 1.99999V8.68999C1.47528 9.22019 1.90505 9.64999 2.43524 9.64999H9.12531C9.6555 9.64999 10.0853 9.22019 10.0853 8.68999V1.99999C10.0853 1.4698 9.6555 1.03999 9.12531 1.03999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.77533 3.42999V7.24999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.8653 5.34H7.68524" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'power' &&
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9098 4.59C12.7908 5.47109 13.3908 6.59365 13.6338 7.81571C13.8768 9.03777 13.752 10.3045 13.2751 11.4556C12.7983 12.6067 11.9908 13.5906 10.9548 14.2828C9.91882 14.9751 8.70077 15.3445 7.45477 15.3445C6.20878 15.3445 4.99079 14.9751 3.95477 14.2828C2.91876 13.5906 2.11125 12.6067 1.6344 11.4556C1.15755 10.3045 1.03278 9.03777 1.27582 7.81571C1.51885 6.59365 2.11881 5.47109 2.99982 4.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.47981 1.34V8.34" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'printer' &&
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.38623 5.49V1.17H10.7863V5.49" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.38627 11.04H2.14628C1.98391 11.04 1.82314 11.0079 1.67326 10.9454C1.52337 10.883 1.38734 10.7915 1.27299 10.6762C1.15864 10.5609 1.06822 10.4242 1.007 10.2738C0.945777 10.1234 0.914858 9.96237 0.916178 9.8V6.72001C0.916178 6.39379 1.04586 6.08093 1.27653 5.85026C1.5072 5.61959 1.82006 5.49001 2.14628 5.49001H11.9762C12.3034 5.48999 12.6173 5.61926 12.8495 5.84965C13.0818 6.08003 13.2136 6.39287 13.2162 6.72001V9.8C13.2162 10.1289 13.0856 10.4443 12.8531 10.6768C12.6205 10.9094 12.3051 11.04 11.9762 11.04H10.7463" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.7863 8.56999H3.38623V13.51H10.7863V8.56999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'question-circle' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.04996 15.24C9.41465 15.24 10.7487 14.8353 11.8834 14.0771C13.0181 13.319 13.9025 12.2413 14.4247 10.9805C14.947 9.71971 15.0836 8.33235 14.8174 6.99388C14.5511 5.65541 13.894 4.42595 12.929 3.46097C11.964 2.49599 10.7345 1.83882 9.39608 1.57259C8.05761 1.30635 6.67026 1.44299 5.40945 1.96524C4.14864 2.48748 3.071 3.37187 2.31282 4.50657C1.55464 5.64127 1.14996 6.97531 1.14996 8.34C1.14996 10.17 1.87692 11.925 3.17092 13.219C4.46492 14.513 6.21996 15.24 8.04996 15.24Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.03998 6.27001C6.20089 5.80813 6.52015 5.41815 6.94115 5.16921C7.36216 4.92026 7.85772 4.82844 8.33997 4.91001C8.8197 4.99744 9.25434 5.24832 9.56998 5.62001C9.88695 5.99449 10.0606 6.46939 10.06 6.96001C10.06 8.34001 7.98997 9.03001 7.98997 9.03001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.04993 11.79V11.73" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'refresh-1' &&
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4753 2.14V6.04H11.5753" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.18524 12.54V8.64H5.08527" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.81525 5.39C3.33356 3.92951 4.41025 2.73435 5.8089 2.0669C7.20755 1.39945 8.8138 1.31425 10.2752 1.83001C11.097 2.11893 11.8425 2.59081 12.4553 3.21L15.4553 6.04M1.16522 8.64001L4.16522 11.47C4.86357 12.1684 5.72733 12.6787 6.67609 12.9532C7.62484 13.2277 8.62773 13.2575 9.59113 13.0399C10.5545 12.8222 11.4471 12.3642 12.1857 11.7085C12.9243 11.0528 13.485 10.2208 13.8152 9.29" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'refresh' &&
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.60464 2.06999V6.06999H5.54471" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.25467 9.29999C3.57205 10.2045 4.1047 11.0183 4.80667 11.6711C5.50864 12.3239 6.3588 12.7962 7.28397 13.0471C8.20913 13.2981 9.18158 13.3203 10.1172 13.1117C11.0529 12.9032 11.9237 12.4701 12.6547 11.85C13.2373 11.3277 13.7104 10.695 14.0465 9.98847C14.3827 9.28196 14.5751 8.51572 14.6128 7.73422C14.6505 6.95272 14.5327 6.17152 14.2661 5.43591C13.9996 4.70031 13.5897 4.02495 13.0601 3.44902C12.5305 2.87309 11.8918 2.40804 11.1811 2.08087C10.4703 1.75369 9.70175 1.57089 8.91983 1.54307C8.13792 1.51526 7.3583 1.64298 6.62613 1.91882C5.89396 2.19467 5.22387 2.61315 4.65469 3.14999L1.65469 6.01999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'save' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4247 15.24H2.69469C2.28625 15.24 1.89456 15.0777 1.60576 14.7889C1.31695 14.5001 1.15471 14.1084 1.15471 13.7V2.96999C1.1547 2.76823 1.19463 2.56845 1.27214 2.38217C1.34965 2.19588 1.46323 2.02677 1.60637 1.88457C1.7495 1.74236 1.91934 1.62987 2.10612 1.55357C2.29291 1.47727 2.49292 1.43867 2.69469 1.43999H11.1247L14.9547 5.26999V13.7C14.956 13.9018 14.9174 14.1018 14.8411 14.2886C14.7648 14.4754 14.6523 14.6452 14.5101 14.7883C14.3679 14.9315 14.1988 15.0451 14.0125 15.1226C13.8262 15.2001 13.6265 15.24 13.4247 15.24Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.8947 15.24V9.10999H4.22472V15.24" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.22472 1.43999V5.26999H10.3647" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'search' &&
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.20346 12.17C8.29521 12.17 9.36247 11.8462 10.2702 11.2397C11.178 10.6332 11.8855 9.77105 12.3033 8.7624C12.7211 7.75375 12.8304 6.64387 12.6174 5.57309C12.4044 4.50232 11.8787 3.51875 11.1067 2.74676C10.3347 1.97478 9.35114 1.44905 8.28036 1.23606C7.20959 1.02307 6.09974 1.13238 5.09109 1.55018C4.08245 1.96797 3.22028 2.67548 2.61374 3.58324C2.00719 4.491 1.6835 5.55824 1.6835 6.64999C1.6835 8.11399 2.26506 9.51802 3.30026 10.5532C4.33546 11.5884 5.73947 12.17 7.20346 12.17V12.17Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.1035 13.59L11.1035 10.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'share' &&
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4733 5.58C12.6166 5.58 13.5434 4.65323 13.5434 3.51C13.5434 2.36677 12.6166 1.44 11.4733 1.44C10.3301 1.44 9.40335 2.36677 9.40335 3.51C9.40335 4.65323 10.3301 5.58 11.4733 5.58Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.19333 10.41C4.33656 10.41 5.26334 9.48323 5.26334 8.34C5.26334 7.19677 4.33656 6.27 3.19333 6.27C2.0501 6.27 1.12335 7.19677 1.12335 8.34C1.12335 9.48323 2.0501 10.41 3.19333 10.41Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4733 15.24C12.6166 15.24 13.5434 14.3132 13.5434 13.17C13.5434 12.0268 12.6166 11.1 11.4733 11.1C10.3301 11.1 9.40335 12.0268 9.40335 13.17C9.40335 14.3132 10.3301 15.24 11.4733 15.24Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.98334 9.38L9.69333 12.13" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.69333 4.55L4.98334 7.3" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'star' &&
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.30478 0.110001L9.32474 4.21L13.8548 4.87L10.5747 8.06L11.3548 12.57L7.30478 10.44L3.25479 12.57L4.03476 8.06L0.754791 4.87L5.28476 4.21L7.30478 0.110001Z" fill="var(--icon-favorites-color)"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'star-stroke' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.77L10.02 5.87L14.55 6.53L11.2699 9.72L12.05 14.23L8 12.1L3.95001 14.23L4.72998 9.72L1.45001 6.53L5.97998 5.87L8 1.77Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'switch' &&
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5154 10.8L13.7454 13.58L10.9753 10.8" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.58545 1.09999H10.9653C11.7009 1.09999 12.4065 1.39151 12.9276 1.9107C13.4487 2.42989 13.7427 3.13442 13.7454 3.86999V13.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.27539 3.87999L4.04541 1.09999L6.81543 3.87999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.19543 13.59H6.81543C6.45083 13.5913 6.08955 13.5206 5.75232 13.382C5.41509 13.2434 5.1085 13.0396 4.85022 12.7822C4.59194 12.5249 4.38702 12.2191 4.24719 11.8823C4.10736 11.5456 4.0354 11.1846 4.0354 10.82V1.12" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'theme-dark' &&
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.14 7.31001C13.0365 8.40623 12.6232 9.45037 11.9483 10.3204C11.2734 11.1904 10.3648 11.8503 9.32868 12.2229C8.29257 12.5956 7.17169 12.6656 6.09724 12.4248C5.02279 12.1841 4.03916 11.6424 3.26118 10.8632C2.4832 10.084 1.94314 9.09942 1.70405 8.02459C1.46497 6.94976 1.53678 5.82909 1.91108 4.79356C2.28539 3.75804 2.94664 2.85046 3.8177 2.17692C4.68876 1.50337 5.73364 1.09169 6.83003 0.990005C6.19481 1.86018 5.8913 2.92863 5.97419 4.0028C6.05709 5.07697 6.52085 6.08621 7.28205 6.84863C8.04326 7.61104 9.05177 8.07648 10.1258 8.16107C11.1998 8.24567 12.2688 7.94385 13.14 7.31001V7.31001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'theme-light' &&
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47571 11.23C10.2541 11.23 11.6957 9.78835 11.6957 8.00999C11.6957 6.23164 10.2541 4.78999 8.47571 4.78999C6.69735 4.78999 5.25574 6.23164 5.25574 8.00999C5.25574 9.78835 6.69735 11.23 8.47571 11.23Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.47571 0.919998V2.21" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.47571 13.82V15.11" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.45569 3L4.37573 3.91" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5757 12.11L13.4857 13.03" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.37573 8.00999H2.66577" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.2758 8.00999H15.5657" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.45569 13.03L4.37573 12.11" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5757 3.91L13.4857 3" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'trash' &&
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.30994 4.2H13.6899" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.75995 4.19999V2.81999C4.75806 2.63438 4.79335 2.45026 4.86377 2.27851C4.93419 2.10676 5.03829 1.95085 5.16994 1.81999C5.30095 1.68922 5.45711 1.58635 5.62898 1.5176C5.80086 1.44885 5.98488 1.41565 6.16994 1.41999H8.92995C9.11154 1.41866 9.29158 1.45345 9.45961 1.52233C9.62764 1.59121 9.78031 1.69281 9.90872 1.82122C10.0371 1.94963 10.1387 2.10229 10.2076 2.27032C10.2765 2.43835 10.3113 2.6184 10.3099 2.79999V4.17999L4.75995 4.19999ZM12.3799 4.17999V13.84C12.3843 14.0251 12.3511 14.2091 12.2823 14.3809C12.2136 14.5528 12.1107 14.709 11.9799 14.84C11.8491 14.9716 11.6932 15.0758 11.5214 15.1462C11.3497 15.2166 11.1656 15.2519 10.9799 15.25H4.07994C3.7121 15.2474 3.36007 15.1001 3.09996 14.84C2.83985 14.5799 2.69256 14.2278 2.68994 13.86V4.19999L12.3799 4.17999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.13995 7.64999V11.79" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.89996 7.64999V11.79" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'txt' &&
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0753 4.78H0.875366" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.2754 1.58H0.875366" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.2754 7.98H0.875366" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0753 11.18H0.875366" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'upload-a' &&
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7482 9.98L8.10822 7.34L5.4682 9.98" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.10822 7.34V13.28" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.6383 11.59C14.2828 11.24 14.7924 10.6853 15.0865 10.0134C15.3807 9.34158 15.4426 8.59089 15.2626 7.87992C15.0825 7.16895 14.6707 6.53821 14.0923 6.08732C13.5138 5.63642 12.8018 5.39107 12.0684 5.39H11.2283C11.0717 4.70118 10.7786 4.05078 10.3661 3.47732C9.95362 2.90385 9.43025 2.41898 8.82702 2.05142C8.22379 1.68385 7.553 1.44107 6.85425 1.33744C6.1555 1.23382 5.44297 1.27145 4.75903 1.44813C4.07509 1.6248 3.43358 1.93692 2.87243 2.366C2.31129 2.79507 1.84193 3.33239 1.49219 3.94612C1.14244 4.55985 0.919424 5.23753 0.836302 5.93901C0.753179 6.6405 0.811675 7.35153 1.0083 8.03C1.21212 8.83805 1.60647 9.58555 2.15832 10.21" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.7482 9.98L8.10822 7.34L5.4682 9.98" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'upload' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1234 10.64V13.7C15.1234 14.1067 14.9625 14.4969 14.6758 14.7854C14.3892 15.0739 14.0001 15.2374 13.5934 15.24H2.85333C2.44663 15.2374 2.05752 15.0739 1.77087 14.7854C1.48423 14.4969 1.32333 14.1067 1.32333 13.7V10.64" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0634 5.27L8.22336 1.44L4.39334 5.27" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.22336 1.44V10.64" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'user' &&
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9329 13.59V12.17C11.9305 11.4474 11.6458 10.7543 11.1395 10.2386C10.6332 9.72301 9.94542 9.42564 9.22295 9.40999H3.70296C3.34014 9.40867 2.98065 9.47915 2.64519 9.61739C2.30974 9.75562 2.00495 9.95887 1.7484 10.2154C1.49185 10.472 1.28858 10.7768 1.15035 11.1122C1.01211 11.4477 0.941629 11.8072 0.94295 12.17V13.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.41296 6.64999C6.95884 6.64999 7.49247 6.48812 7.94635 6.18485C8.40023 5.88157 8.75396 5.45052 8.96286 4.9462C9.17176 4.44187 9.22643 3.88693 9.11993 3.35154C9.01344 2.81615 8.75056 2.32437 8.36456 1.93838C7.97857 1.55238 7.4868 1.28952 6.95142 1.18302C6.41603 1.07653 5.86107 1.13118 5.35675 1.34008C4.85243 1.54898 4.42138 1.90274 4.1181 2.35662C3.81483 2.8105 3.65295 3.34411 3.65295 3.88999C3.65559 4.62118 3.94723 5.32166 4.46426 5.83869C4.98129 6.35572 5.68178 6.64736 6.41296 6.64999V6.64999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'users' &&
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1038 13.59V12.17C12.1124 11.799 12.0449 11.4302 11.9056 11.0862C11.7663 10.7423 11.5581 10.4305 11.2938 10.17C11.0319 9.90758 10.7199 9.70061 10.3763 9.56145C10.0326 9.42228 9.66448 9.35376 9.2938 9.35999H3.77378C3.04963 9.38607 2.36453 9.69487 1.8654 10.2202C1.36627 10.7455 1.09287 11.4455 1.1038 12.17V13.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.6138 6.64999C7.15968 6.64999 7.69331 6.48812 8.14719 6.18485C8.60107 5.88157 8.95483 5.45052 9.16373 4.9462C9.37262 4.44187 9.42727 3.88693 9.32077 3.35154C9.21428 2.81615 8.95139 2.32437 8.5654 1.93838C8.17941 1.55238 7.68764 1.28952 7.15225 1.18302C6.61686 1.07653 6.06191 1.13118 5.55759 1.34008C5.05326 1.54898 4.62221 1.90274 4.31894 2.35662C4.01567 2.8105 3.85379 3.34411 3.85379 3.88999C3.85643 4.62118 4.14804 5.32166 4.66507 5.83869C5.1821 6.35572 5.88261 6.64736 6.6138 6.64999V6.64999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.2738 13.59V12.17C16.2709 11.5583 16.0672 10.9645 15.6938 10.48C15.324 9.98829 14.7989 9.63591 14.2038 9.48" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.4438 1.22C12.0403 1.37297 12.5662 1.72595 12.9338 2.22C13.3101 2.703 13.5144 3.29774 13.5144 3.91C13.5144 4.52226 13.3101 5.117 12.9338 5.6C12.5662 6.09405 12.0403 6.44703 11.4438 6.6" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'video' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6053 1.59H3.04523C2.23337 1.59 1.57526 2.24814 1.57526 3.06V13.62C1.57526 14.4319 2.23337 15.09 3.04523 15.09H13.6053C14.4171 15.09 15.0753 14.4319 15.0753 13.62V3.06C15.0753 2.24814 14.4171 1.59 13.6053 1.59Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.94525 1.59V15.09" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6953 1.59V15.09" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.57526 8.34H15.0753" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.57526 4.97H4.94525" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.57526 11.71H4.94525" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6953 11.71H15.0753" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6953 4.97H15.0753" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'warning' &&
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.04506 1.94L1.39504 11.38C1.30734 11.5316 1.25039 11.699 1.22756 11.8726C1.20473 12.0462 1.21645 12.2227 1.26198 12.3918C1.30751 12.5609 1.38602 12.7193 1.49294 12.858C1.59986 12.9967 1.73308 13.1129 1.88503 13.2C2.08111 13.3184 2.30599 13.3807 2.53505 13.38H13.845C14.0205 13.3787 14.1941 13.3427 14.3556 13.274C14.5171 13.2053 14.6634 13.1054 14.7862 12.9799C14.9089 12.8544 15.0055 12.7058 15.0706 12.5428C15.1356 12.3798 15.1677 12.2055 15.1651 12.03C15.1657 11.8009 15.1034 11.5761 14.985 11.38L9.33498 1.94C9.2446 1.78868 9.12507 1.65685 8.98329 1.55214C8.84152 1.44744 8.68038 1.37195 8.50917 1.33008C8.33797 1.28821 8.1602 1.28079 7.9861 1.30824C7.812 1.33569 7.64503 1.39748 7.49501 1.49C7.312 1.60289 7.15795 1.75699 7.04506 1.94V1.94Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.1951 5.37V8.04" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.1951 10.71H8.20511" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'chevron-left' &&
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.76616 10.805L0.936157 5.975L5.76616 1.145" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'chevron-right' &&
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.766174 1.145L5.59618 5.975L0.766174 10.805" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'cog' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7254 6.42L12.4355 5.7C12.3855 5.13 13.5555 3.92 13.3255 3.7L12.7654 3.13C12.7654 3.13 12.4354 2.80999 12.2054 2.56999C11.9754 2.32999 10.7554 3.57 10.2054 3.47L9.49545 3.17C9.05545 2.8 9.02545 1.11 8.69545 1.11H7.12544C6.79544 1.11 6.77545 2.8 6.33545 3.17L5.61545 3.47C5.05545 3.52 3.84545 2.33999 3.61545 2.56999C3.38545 2.79999 3.05545 3.13 3.05545 3.13L2.49545 3.7C2.25545 3.93 3.43545 5.14 3.38545 5.7L3.08545 6.42C2.72545 6.85 1.08545 6.88001 1.08545 7.21001V8.8C1.08545 9.13 2.77545 9.15 3.08545 9.59L3.38545 10.31C3.38545 10.87 2.25545 12.09 2.49545 12.31L3.05545 12.87L3.61545 13.43C3.85545 13.67 5.06545 12.49 5.61545 12.54L6.33545 12.84C6.77545 13.2 6.79544 14.84 7.12544 14.84H8.72545C9.05545 14.84 9.08545 13.15 9.52545 12.84L10.2354 12.54C10.8054 12.54 12.0154 13.67 12.2354 13.43L12.7955 12.87L13.3555 12.31C13.5855 12.08 12.4155 10.86 12.4655 10.31L12.7254 9.64C13.0954 9.2 14.7854 9.18001 14.7854 8.85001V7.25999C14.8254 6.87999 13.1354 6.85 12.7254 6.42ZM7.88545 10.19C7.45189 10.192 7.02749 10.0652 6.66603 9.82579C6.30457 9.58636 6.02233 9.24502 5.85504 8.84503C5.68775 8.44504 5.64295 8.00439 5.72632 7.57892C5.80969 7.15344 6.01747 6.76228 6.32335 6.455C6.62922 6.14772 7.01941 5.93816 7.4445 5.85284C7.86959 5.76753 8.31044 5.81031 8.7112 5.97577C9.11195 6.14123 9.45458 6.42192 9.69566 6.78227C9.93675 7.14263 10.0654 7.56643 10.0654 8C10.0656 8.57226 9.84174 9.12185 9.44179 9.53114C9.04184 9.94044 8.49756 10.1769 7.92545 10.19H7.88545Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'contrast' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.30612 14.875C9.67081 14.875 11.0049 14.4703 12.1396 13.7121C13.2743 12.954 14.1587 11.8763 14.6809 10.6155C15.2032 9.35471 15.3398 7.96734 15.0735 6.62888C14.8073 5.29041 14.1502 4.06094 13.1852 3.09596C12.2202 2.13098 10.9907 1.47382 9.65225 1.20758C8.31378 0.941342 6.92643 1.07799 5.66562 1.60023C4.40481 2.12248 3.32718 3.00687 2.569 4.14157C1.81082 5.27627 1.40613 6.61031 1.40613 7.97501C1.40613 9.805 2.13309 11.56 3.42709 12.854C4.72109 14.1481 6.47613 14.875 8.30612 14.875V14.875Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.30612 1.07501C6.47613 1.07501 4.72109 1.80196 3.42709 3.09596C2.13309 4.38996 1.40613 6.14501 1.40613 7.97501C1.40613 9.805 2.13309 11.56 3.42709 12.854C4.72109 14.1481 6.47613 14.875 8.30612 14.875V1.07501Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'copy-to-clipboard-2' &&
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0061 2.55C11.3774 2.55 11.7335 2.6975 11.9961 2.96005C12.2586 3.2226 12.4061 3.57869 12.4061 3.95V13.75C12.4061 14.1213 12.2586 14.4774 11.9961 14.7399C11.7335 15.0025 11.3774 15.15 11.0061 15.15H2.60611C2.23481 15.15 1.87872 15.0025 1.61617 14.7399C1.35361 14.4774 1.20612 14.1213 1.20612 13.75V3.95C1.20612 3.57869 1.35361 3.2226 1.61617 2.96005C1.87872 2.6975 2.23481 2.55 2.60611 2.55" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.9061 2.22H8.2261C8.2261 1.84339 8.0765 1.48221 7.8102 1.21591C7.54389 0.94961 7.18271 0.800003 6.80611 0.800003C6.4295 0.800003 6.0683 0.94961 5.802 1.21591C5.5357 1.48221 5.38611 1.84339 5.38611 2.22H4.7061C4.52045 2.22 4.3424 2.29374 4.21112 2.42502C4.07985 2.55629 4.0061 2.73435 4.0061 2.92V3.62C4.0061 3.80565 4.07985 3.9837 4.21112 4.11497C4.3424 4.24625 4.52045 4.32001 4.7061 4.32001H8.9061C9.09175 4.32001 9.26979 4.24625 9.40106 4.11497C9.53234 3.9837 9.60611 3.80565 9.60611 3.62V2.92C9.60611 2.73435 9.53234 2.55629 9.40106 2.42502C9.26979 2.29374 9.09175 2.22 8.9061 2.22Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'home-1' &&
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.54611 0.934998L1.20612 5.86499V13.605C1.20873 13.9781 1.35812 14.3353 1.62198 14.5991C1.88584 14.863 2.24297 15.0124 2.61612 15.015H5.61612V8.755H9.52612V15.015H12.5261C12.8985 15.0098 13.2541 14.8596 13.5174 14.5963C13.7807 14.333 13.931 13.9773 13.9361 13.605V5.86499L7.54611 0.934998Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'home' &&
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.56547 0.764991L0.975466 5.115V11.945C0.974867 12.2743 1.10424 12.5905 1.33547 12.825C1.57112 13.0544 1.88658 13.1835 2.21546 13.185H4.83547V7.665H8.28546V13.185H10.9055C11.2348 13.1856 11.551 13.0562 11.7855 12.825C11.9031 12.7107 11.9965 12.5739 12.0601 12.4227C12.1237 12.2715 12.1561 12.109 12.1555 11.945V5.115L6.56547 0.764991Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'key' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.96613 14.385C6.75553 14.385 8.20613 12.9344 8.20613 11.145C8.20613 9.3556 6.75553 7.905 4.96613 7.905C3.17672 7.905 1.72614 9.3556 1.72614 11.145C1.72614 12.9344 3.17672 14.385 4.96613 14.385Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5461 1.565L7.2561 8.845" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3461 5.735L15.2061 3.875" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {this.props.name === 'lock-open' &&
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <rect height="7.37" rx=".75" stroke="var(--icon-color)" strokeLinejoin="round" strokeWidth="var(--icon-stroke-width)" width="9.81" x="3.09" y="7.43"/>
              <path d="m14.39 6.15v-1.61c0-1.85-.68-3.35-1.52-3.35-.84 0-1.52 1.5-1.52 3.35v2.89" stroke="var(--icon-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--icon-stroke-width)"/>
              <path d="m0 0h16v16h-16z"/>
            </g>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'lock' &&
          <svg width="16" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2155 7.41H1.90546C1.49124 7.41 1.15546 7.74579 1.15546 8.16V14.03C1.15546 14.4442 1.49124 14.78 1.90546 14.78H10.2155C10.6297 14.78 10.9655 14.4442 10.9655 14.03V8.16C10.9655 7.74579 10.6297 7.41 10.2155 7.41Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round"/>
            <path d="M2.72546 7.39999V4.52C2.72546 3.63153 3.07841 2.77945 3.70666 2.1512C4.3349 1.52295 5.18699 1.17 6.07546 1.17V1.17C6.96394 1.17 7.81603 1.52295 8.44427 2.1512C9.07252 2.77945 9.42546 3.63153 9.42546 4.52V7.39999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'settings' &&
          <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.786133 3.105H3.55614" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.98615 3.105H11.7262" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.786133 7.97501H8.09613" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5361 7.97501H11.7261" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0.786133 12.835H3.82614" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.2561 12.835H11.7261" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.55615 1.285V4.935" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.09613 6.145V9.795" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.82617 11.015V14.665" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        {/*
          * @copyright     Copyright (c) 2013-2017 Cole Bemis (https://github.com/feathericons/feather)
          * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.khulnasoft.com)
          * @license       https://opensource.org/licenses/MIT MIT License
        */}
        {this.props.name === 'tag' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.62 8.39256L14.93 4.53256C14.9802 4.38718 14.989 4.23071 14.9554 4.08062C14.9219 3.93053 14.8473 3.79272 14.74 3.68255L12.38 1.32255C12.2698 1.21524 12.132 1.14064 11.9819 1.10709C11.8318 1.07354 11.6754 1.08236 11.53 1.13255L7.66999 2.44256C7.54938 2.48377 7.43989 2.5522 7.34999 2.64256L1.43999 8.62255C1.3638 8.6987 1.30335 8.78912 1.26211 8.88863C1.22087 8.98815 1.19965 9.09483 1.19965 9.20255C1.19965 9.31028 1.22087 9.41694 1.26211 9.51646C1.30335 9.61598 1.3638 9.70641 1.43999 9.78256L6.34999 14.6226C6.42614 14.6987 6.51656 14.7592 6.61608 14.8004C6.7156 14.8417 6.82227 14.8629 6.92999 14.8629C7.03772 14.8629 7.14439 14.8417 7.2439 14.8004C7.34342 14.7592 7.43384 14.6987 7.50999 14.6226L13.44 8.69256C13.5206 8.60648 13.582 8.50421 13.62 8.39256V8.39256Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M11.78 5.34255C12.3433 5.34255 12.8 4.88588 12.8 4.32255C12.8 3.75922 12.3433 3.30256 11.78 3.30256C11.2167 3.30256 10.76 3.75922 10.76 4.32255C10.76 4.88588 11.2167 5.34255 11.78 5.34255Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }

        {this.props.name === '2-columns-narrow-right' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4927 1.01001H2.75269C1.90769 1.01001 1.22266 1.69501 1.22266 2.54001V13.28C1.22266 14.125 1.90769 14.81 2.75269 14.81H13.4927C14.3377 14.81 15.0226 14.125 15.0226 13.28V2.54001C15.0226 1.69501 14.3377 1.01001 13.4927 1.01001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4227 1.01001V14.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === '2+2-columns' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0927 1.01001H2.35266C1.50767 1.01001 0.822693 1.69501 0.822693 2.54001V13.28C0.822693 14.125 1.50767 14.81 2.35266 14.81H13.0927C13.9376 14.81 14.6227 14.125 14.6227 13.28V2.54001C14.6227 1.69501 13.9376 1.01001 13.0927 1.01001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.0226 1.01001V7.91" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.35266 7.91V14.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.6227 7.91H0.822693" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === '3+1-columns' &&
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2927 1.66H2.55267C1.70768 1.66 1.02264 2.34501 1.02264 3.19V13.93C1.02264 14.775 1.70768 15.46 2.55267 15.46H13.2927C14.1377 15.46 14.8227 14.775 14.8227 13.93V3.19C14.8227 2.34501 14.1377 1.66 13.2927 1.66Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.62268 1.66V6.51999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.2227 1.66V6.51999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.8227 6.51999H1.02264" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'bug' &&
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.73268 5.40999C8.15113 5.40867 8.56568 5.48993 8.95265 5.64916C9.33962 5.80838 9.6914 6.04242 9.98775 6.33785C10.2841 6.63327 10.5192 6.98427 10.6796 7.37074C10.8401 7.75721 10.9227 8.17154 10.9227 8.58998V9.98998C10.9227 10.836 10.5866 11.6474 9.98836 12.2457C9.39012 12.8439 8.57872 13.18 7.73268 13.18C7.31424 13.18 6.89991 13.0974 6.51344 12.937C6.12697 12.7765 5.77597 12.5414 5.48055 12.245C5.18512 11.9487 4.95111 11.5969 4.79189 11.21C4.63267 10.823 4.55137 10.4084 4.55269 9.98998V8.58998C4.55269 7.74659 4.88772 6.93775 5.48409 6.34139C6.08045 5.74502 6.88929 5.40999 7.73268 5.40999V5.40999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.74268 5.41V4.69C5.74268 4.2577 5.91441 3.8431 6.22009 3.53741C6.52578 3.23173 6.94038 3.06 7.37268 3.06H8.09265C8.52495 3.06 8.93955 3.23173 9.24524 3.53741C9.55092 3.8431 9.72266 4.2577 9.72266 4.69V5.41" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.06268 1.45999C6.99268 1.64999 7.61268 2.11999 7.62268 2.64999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.40265 1.45999C8.47265 1.64999 7.85265 2.11999 7.84265 2.64999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.8627 7.95999L13.5427 6.51001L12.5427 4.31" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.9227 9.29999H13.0226L14.1627 11.8" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5427 11.51L12.0126 12.78L10.5427 14.91" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.52264 7.95999L1.84265 6.51001L2.84265 4.31" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.46265 9.29999H2.36267L1.22266 11.8" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.84265 11.51L3.36267 12.78L4.84265 14.91" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'cloud' &&
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2073 5.06497H11.3573C11.1192 4.10573 10.616 3.2328 9.90537 2.54587C9.19474 1.85894 8.30523 1.38569 7.33847 1.18018C6.3717 0.974661 5.36663 1.04515 4.43801 1.38361C3.5094 1.72206 2.69467 2.31484 2.08688 3.09424C1.47909 3.87364 1.10273 4.80825 1.00077 5.79135C0.898818 6.77445 1.07538 7.76642 1.51029 8.65396C1.94521 9.5415 2.62095 10.2889 3.46035 10.8107C4.29975 11.3325 5.26897 11.6077 6.25733 11.605H12.2073C13.0746 11.605 13.9063 11.2605 14.5196 10.6472C15.1328 10.034 15.4773 9.20222 15.4773 8.33496C15.4773 7.4677 15.1328 6.63598 14.5196 6.02274C13.9063 5.40949 13.0746 5.06497 12.2073 5.06497V5.06497Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'columns-caret-left' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6927 1.01001H2.9527C2.1077 1.01001 1.42267 1.69501 1.42267 2.54001V13.28C1.42267 14.125 2.1077 14.81 2.9527 14.81H13.6927C14.5377 14.81 15.2227 14.125 15.2227 13.28V2.54001C15.2227 1.69501 14.5377 1.01001 13.6927 1.01001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.02271 1.01001V14.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9327 5.59L9.61267 7.91L11.9327 10.23" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'columns-caret-right' &&
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8927 1.01001H3.15265C2.30765 1.01001 1.62268 1.69501 1.62268 2.54001V13.28C1.62268 14.125 2.30765 14.81 3.15265 14.81H13.8927C14.7377 14.81 15.4227 14.125 15.4227 13.28V2.54001C15.4227 1.69501 14.7377 1.01001 13.8927 1.01001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.22266 1.01001V14.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.81268 10.23L12.1327 7.91L9.81268 5.59" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'columns-narrow-left' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6927 1.01001H2.95267C2.10767 1.01001 1.42267 1.69501 1.42267 2.54001V13.28C1.42267 14.125 2.10767 14.81 2.95267 14.81H13.6927C14.5377 14.81 15.2227 14.125 15.2227 13.28V2.54001C15.2227 1.69501 14.5377 1.01001 13.6927 1.01001Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.02264 1.01001V14.81" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'columns' &&
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8926 1.66H3.15265C2.30765 1.66 1.62265 2.34501 1.62265 3.19V13.93C1.62265 14.775 2.30765 15.46 3.15265 15.46H13.8926C14.7376 15.46 15.4227 14.775 15.4227 13.93V3.19C15.4227 2.34501 14.7376 1.66 13.8926 1.66Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.22266 1.66V15.46" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.8227 1.66V15.46" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'dashboard-2' &&
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1126 3.82999C15.0921 5.06821 15.6243 6.6012 15.6227 8.17999C15.6218 9.26541 15.3721 10.3362 14.8927 11.31" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.20267 11.28C1.72784 10.3157 1.48147 9.25491 1.48267 8.18001C1.48722 7.09544 1.74051 6.02639 2.22309 5.0551C2.70566 4.0838 3.40465 3.23616 4.26624 2.57741C5.12783 1.91865 6.12907 1.46634 7.19291 1.25529C8.25675 1.04424 9.35483 1.08005 10.4027 1.36" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.55267 8.17999L12.4326 2.34" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.6227 8.17999H14.0527" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.55267 1.12V2.69" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.56262 3.19L4.67264 4.29999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.49268 8.17999H3.06268" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'dice' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.14615 5.29L1.81615 6.97C1.50297 7.07105 1.24229 7.29153 1.09065 7.58358C0.939009 7.87563 0.908637 8.2157 1.00615 8.52999L2.68616 13.86C2.78515 14.175 3.00477 14.4381 3.29706 14.5917C3.58934 14.7453 3.93054 14.7771 4.24615 14.68L9.57616 13C9.73199 12.9511 9.87662 12.8719 10.0018 12.7669C10.1269 12.6619 10.23 12.5333 10.3053 12.3883C10.3806 12.2433 10.4265 12.0849 10.4403 11.9222C10.4542 11.7595 10.4358 11.5956 10.3862 11.44L8.70616 6.1C8.60511 5.78683 8.38463 5.52612 8.09257 5.37448C7.80052 5.22283 7.46044 5.19249 7.14615 5.29V5.29Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6762 10.09C11.8345 10.1286 11.9988 10.1353 12.1597 10.1098C12.3207 10.0843 12.4749 10.0271 12.6135 9.94154C12.7521 9.85595 12.8724 9.74366 12.9673 9.61122C13.0621 9.47877 13.1297 9.32879 13.1662 9.17L14.4562 3.72001C14.5313 3.40046 14.4766 3.06417 14.3041 2.78486C14.1317 2.50556 13.8555 2.30603 13.5362 2.23002L8.09618 0.940016C7.77417 0.867702 7.43664 0.924619 7.15614 1.09852C6.87565 1.27243 6.67459 1.54943 6.59618 1.87001L6.13617 3.87001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.43617 9.62C3.878 9.62 4.23618 9.26184 4.23618 8.82001C4.23618 8.37818 3.878 8.01999 3.43617 8.01999C2.99434 8.01999 2.63617 8.37818 2.63617 8.82001C2.63617 9.26184 2.99434 9.62 3.43617 9.62Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M6.88617 8.51999C7.328 8.51999 7.68617 8.16183 7.68617 7.72C7.68617 7.27817 7.328 6.92001 6.88617 6.92001C6.44434 6.92001 6.08618 7.27817 6.08618 7.72C6.08618 8.16183 6.44434 8.51999 6.88617 8.51999Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M5.69617 10.79C6.13799 10.79 6.49617 10.4318 6.49617 9.98999C6.49617 9.54816 6.13799 9.19 5.69617 9.19C5.25434 9.19 4.89618 9.54816 4.89618 9.98999C4.89618 10.4318 5.25434 10.79 5.69617 10.79Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M4.52618 13.05C4.96801 13.05 5.32619 12.6918 5.32619 12.25C5.32619 11.8082 4.96801 11.45 4.52618 11.45C4.08436 11.45 3.7262 11.8082 3.7262 12.25C3.7262 12.6918 4.08436 13.05 4.52618 13.05Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M7.96614 11.97C8.40797 11.97 8.76614 11.6118 8.76614 11.17C8.76614 10.7282 8.40797 10.37 7.96614 10.37C7.52431 10.37 7.16614 10.7282 7.16614 11.17C7.16614 11.6118 7.52431 11.97 7.96614 11.97Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M11.2362 8.48999C11.678 8.48999 12.0362 8.13183 12.0362 7.69C12.0362 7.24817 11.678 6.89001 11.2362 6.89001C10.7943 6.89001 10.4362 7.24817 10.4362 7.69C10.4362 8.13183 10.7943 8.48999 11.2362 8.48999Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M8.54616 4.14001C8.98799 4.14001 9.34616 3.78182 9.34616 3.34C9.34616 2.89817 8.98799 2.54001 8.54616 2.54001C8.10433 2.54001 7.74615 2.89817 7.74615 3.34C7.74615 3.78182 8.10433 4.14001 8.54616 4.14001Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }

        {this.props.name === 'face-ID' &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35001 5.07001V2.51001C1.34869 2.33845 1.38134 2.16831 1.44608 2.00943C1.51082 1.85055 1.60637 1.70607 1.72722 1.58429C1.84807 1.46251 1.99183 1.36585 2.15021 1.2999C2.30859 1.23394 2.47845 1.19998 2.65002 1.19998H4.95001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.72 1.19998H13.29C13.4616 1.19998 13.6315 1.23394 13.7898 1.2999C13.9482 1.36585 14.092 1.46251 14.2128 1.58429C14.3337 1.70607 14.4292 1.85055 14.494 2.00943C14.5587 2.16831 14.5913 2.33845 14.59 2.51001V4.79999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.59 10.59V13.16C14.59 13.5057 14.4534 13.8374 14.2098 14.0828C13.9663 14.3282 13.6357 14.4674 13.29 14.47H10.99" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.22 14.45H2.67C2.3243 14.4473 1.99366 14.3082 1.75014 14.0628C1.50663 13.8174 1.36999 13.4857 1.37 13.14V10.84" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.94 5.53V7.13" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.01 5.53V7.13" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.97 5.39999V8.23999C7.97002 8.38679 7.9124 8.52774 7.80953 8.63248C7.70666 8.73721 7.56678 8.79737 7.42 8.79999H7.31" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.1 10.28C9.49291 10.8839 8.67138 11.223 7.81503 11.223C6.95867 11.223 6.13715 10.8839 5.53003 10.28" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'fingerprint' &&
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.68002 16C7.83861 15.3719 7.15609 14.5553 6.68721 13.6158C6.21833 12.6763 5.97612 11.64 5.98003 10.59C6.01806 10.0205 6.27111 9.48669 6.68794 9.09676C7.10478 8.70683 7.65424 8.48989 8.22502 8.48989C8.79581 8.48989 9.34526 8.70683 9.7621 9.09676C10.1789 9.48669 10.432 10.0205 10.47 10.59C10.47 10.8841 10.528 11.1754 10.6405 11.4472C10.7531 11.719 10.9181 11.9659 11.1261 12.1739C11.3341 12.3819 11.581 12.5469 11.8528 12.6595C12.1246 12.772 12.4159 12.83 12.71 12.83C13.0042 12.83 13.2955 12.772 13.5672 12.6595C13.839 12.5469 14.0859 12.3819 14.2939 12.1739C14.5019 11.9659 14.6669 11.719 14.7795 11.4472C14.8921 11.1754 14.95 10.8841 14.95 10.59C14.9417 8.90033 14.2971 7.27584 13.1447 6.04012C11.9923 4.8044 10.4167 4.04814 8.73169 3.92202C7.04672 3.7959 5.37609 4.30918 4.05258 5.35958C2.72907 6.40997 1.84984 7.9204 1.59003 9.58998" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M12.6801 10.59C12.6801 9.39652 12.2059 8.25193 11.362 7.40802C10.5181 6.56411 9.37353 6.09 8.18005 6.09C6.98658 6.09 5.84198 6.56411 4.99807 7.40802C4.15416 8.25193 3.68005 9.39652 3.68005 10.59C3.67942 12.0766 4.04704 13.5402 4.75005 14.85" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M3.52002 2.98998C5.11912 2.00811 6.98513 1.55064 8.85704 1.68153C10.7289 1.81242 12.5131 2.52514 13.96 3.71999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M8.22003 10.59C8.2202 11.6349 8.58483 12.6471 9.2511 13.4521C9.91736 14.2571 10.8435 14.8045 11.87 15" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
        }

        {this.props.name === 'folder-root' &&
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10.7744C14.0001 10.9354 13.9668 11.0948 13.9022 11.2436C13.8375 11.3923 13.7427 11.5275 13.6232 11.6413C13.3765 11.8699 13.0463 11.9985 12.7021 12H2.29791C1.95367 11.9985 1.62347 11.8699 1.37681 11.6413C1.25728 11.5275 1.16248 11.3923 1.09782 11.2436C1.03317 11.0948 0.999929 10.9354 1 10.7744V2.22555C0.999929 2.06459 1.03317 1.90517 1.09782 1.75643C1.16248 1.6077 1.25728 1.47257 1.37681 1.35871C1.62347 1.13012 1.95367 1.00152 2.29791 1H5.55314L6.85105 2.83333H12.7021C13.0463 2.83485 13.3765 2.96345 13.6232 3.19204C13.7427 3.30589 13.8375 3.44106 13.9022 3.58979C13.9668 3.73853 14.0001 3.89792 14 4.05888V10.7744Z" fill="var(--icon-background-color)" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.49995 4.91578L4.25519 7.26721V10.9937C4.25519 11.1733 4.33018 11.3457 4.46366 11.4727C4.59714 11.5998 4.77817 11.6712 4.96694 11.6712H6.46372V8.68208H8.45245V11.6712H9.9597C10.0532 11.6715 10.1458 11.6541 10.232 11.6199C10.3183 11.5856 10.3965 11.5353 10.4621 11.4719C10.5938 11.344 10.6688 11.1727 10.6715 10.9937V7.26721L7.49995 4.91578Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }

        {this.props.name === 'folder-shared' &&
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 10.7744C14.0001 10.9354 13.9668 11.0948 13.9022 11.2436C13.8375 11.3923 13.7427 11.5275 13.6232 11.6413C13.3765 11.8699 13.0463 11.9985 12.7021 12H2.2979C1.95366 11.9985 1.62347 11.8699 1.37681 11.6413C1.25728 11.5275 1.16248 11.3923 1.09782 11.2436C1.03317 11.0948 0.999929 10.9354 1 10.7744V2.22555C0.999929 2.06459 1.03317 1.90517 1.09782 1.75643C1.16248 1.6077 1.25728 1.47256 1.37681 1.35871C1.62347 1.13012 1.95366 1.00152 2.2979 1H5.55314L6.85104 2.83333H12.7021C13.0463 2.83485 13.3765 2.96345 13.6232 3.19204C13.7427 3.30589 13.8375 3.44106 13.9022 3.58979C13.9668 3.73853 14.0001 3.89791 14 4.05888V10.7744Z" fill="var(--icon-background-color)" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.3889 12V10.7246C10.3922 10.3531 10.2418 9.99517 9.97022 9.72827C9.83273 9.59843 9.66922 9.49625 9.48941 9.42779C9.30959 9.35932 9.11715 9.32597 8.92353 9.32972H6.05557C5.8655 9.3284 5.67704 9.36305 5.50116 9.43168C5.32528 9.50031 5.1655 9.60154 5.03109 9.72948C4.89668 9.85743 4.79034 10.0095 4.71824 10.177C4.64615 10.3444 4.60973 10.5238 4.61112 10.7047V11.9801" fill="var(--icon-color)"stroke="none"/>
            <path d="M7.49998 7.97461C7.78567 7.97461 8.06493 7.89397 8.30247 7.74288C8.54001 7.5918 8.72515 7.37705 8.83448 7.1258C8.9438 6.87456 8.97241 6.59808 8.91667 6.33136C8.86094 6.06464 8.72337 5.81965 8.52136 5.62735C8.31935 5.43505 8.06198 5.30409 7.78178 5.25103C7.50159 5.19798 7.21116 5.22523 6.94722 5.3293C6.68329 5.43337 6.45769 5.60961 6.29897 5.83573C6.14025 6.06184 6.05554 6.32766 6.05554 6.59961C6.05554 6.96428 6.20772 7.31404 6.47861 7.5719C6.74949 7.82977 7.11689 7.97461 7.49998 7.97461Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }

        {this.props.name === 'heart-o' &&
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.46701 14.12C8.39968 14.1229 8.33253 14.1109 8.27032 14.085C8.20811 14.0591 8.15238 14.0198 8.10702 13.97L2.98703 9.04L2.75701 8.82L2.30703 8.29C2.10475 8.03461 1.91773 7.76746 1.747 7.48998C1.56775 7.17196 1.42039 6.837 1.30703 6.48998C1.1817 6.1264 1.11749 5.74455 1.11703 5.35998C1.08303 4.84662 1.15416 4.33172 1.32611 3.84682C1.49806 3.36192 1.76721 2.91725 2.11703 2.54C2.50658 2.19036 2.9619 1.92184 3.45639 1.75014C3.95087 1.57845 4.4746 1.50701 4.997 1.54C5.33771 1.5472 5.67517 1.60793 5.997 1.71999C6.34988 1.83562 6.68607 1.99697 6.997 2.19997C7.26741 2.3717 7.52783 2.5587 7.777 2.76C7.99865 2.93314 8.20908 3.12018 8.40701 3.32C8.59918 3.11788 8.80644 2.93068 9.027 2.76C9.247 2.58 9.50703 2.39997 9.80703 2.19997C10.1184 1.99766 10.4545 1.83635 10.807 1.71999C11.1286 1.60695 11.4662 1.54619 11.807 1.54C12.3295 1.50645 12.8534 1.57762 13.3479 1.74935C13.8425 1.92107 14.2978 2.18989 14.687 2.54C15.0388 2.9159 15.3092 3.36039 15.4813 3.84563C15.6534 4.33088 15.7234 4.84641 15.687 5.35998C15.6358 6.06837 15.4442 6.75949 15.1231 7.39303C14.802 8.02656 14.358 8.58983 13.817 9.04998L8.70703 13.97C8.64352 14.0425 8.56002 14.0947 8.46701 14.12Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'heart' &&
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.05462 13.12C7.98595 13.1217 7.91766 13.1093 7.854 13.0835C7.79034 13.0577 7.73269 13.0191 7.68462 12.97L2.57461 8.04L2.34463 7.82L1.89462 7.29C1.68905 7.03708 1.5019 6.7697 1.33462 6.48998C1.15536 6.17196 1.00798 5.837 0.894616 5.48998C0.769279 5.1264 0.705073 4.74455 0.704614 4.35998C0.670613 3.84662 0.74177 3.33172 0.91372 2.84682C1.08567 2.36192 1.35479 1.91725 1.70461 1.54C2.09386 1.18989 2.54913 0.921074 3.04369 0.74935C3.53826 0.577625 4.06216 0.506451 4.58462 0.539999C4.92533 0.547199 5.26278 0.607934 5.58462 0.719992C5.93749 0.835618 6.27369 0.996973 6.58462 1.19997C6.88462 1.39997 7.14462 1.58 7.36462 1.76C7.58627 1.93314 7.79669 2.12018 7.99462 2.32C8.18679 2.11788 8.39405 1.93068 8.61462 1.76C8.83462 1.58 9.09462 1.39997 9.39462 1.19997C9.70594 0.997665 10.042 0.836354 10.3946 0.719992C10.716 0.606272 11.0537 0.545489 11.3946 0.539999C11.9171 0.506451 12.441 0.577625 12.9355 0.74935C13.4301 0.921074 13.8854 1.18989 14.2746 1.54C14.6264 1.9159 14.8968 2.36039 15.0689 2.84563C15.241 3.33088 15.311 3.84641 15.2746 4.35998C15.2235 5.06837 15.0317 5.75949 14.7107 6.39303C14.3896 7.02656 13.9457 7.58983 13.4046 8.04998L8.29461 12.97C8.23111 13.0425 8.14763 13.0947 8.05462 13.12V13.12Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }

        {this.props.name === 'heartbeat' &&
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.524 7.18165H9.754L8.55402 13.14L6.14401 1.69998L4.95401 7.03865H1.284" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'Pin' &&
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.98903 8.67999L10.849 5.16L11.019 5.32999C11.2505 5.55539 11.5609 5.68152 11.884 5.68152C12.2072 5.68152 12.5175 5.55539 12.749 5.32999C12.863 5.21661 12.9535 5.08183 13.0152 4.93338C13.0769 4.78493 13.1087 4.62576 13.1087 4.465C13.1087 4.30423 13.0769 4.14506 13.0152 3.99661C12.9535 3.84817 12.863 3.71338 12.749 3.60001L10.419 1.26999C10.1896 1.04058 9.87847 0.911713 9.55403 0.911713C9.22959 0.911713 8.91844 1.04058 8.68903 1.26999C8.45961 1.4994 8.33073 1.81057 8.33073 2.13501C8.33073 2.45945 8.45961 2.77059 8.68903 3L8.86903 3.16998L5.33904 5.03C4.87276 4.77332 4.33557 4.67547 3.80873 4.75125C3.28189 4.82703 2.79407 5.07229 2.41904 5.44998L2.00903 5.85001L8.16904 12.01L8.56903 11.61C8.94755 11.2334 9.19324 10.7438 9.26901 10.2152C9.34478 9.68667 9.2465 9.14779 8.98903 8.67999V8.67999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.89906 10.13L1.29907 12.73" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'plug' &&
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.01277 5.26999C3.52129 5.84389 3.26446 6.58213 3.29362 7.33716C3.32278 8.09219 3.63577 8.8084 4.17005 9.34268C4.70434 9.87697 5.42058 10.19 6.17561 10.2191C6.93064 10.2483 7.66884 9.99148 8.24275 9.5L10.3528 7.38998L6.13276 3.16L4.01277 5.26999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.01273 9.5L1.96271 11.5C1.7532 11.7098 1.61057 11.9769 1.5528 12.2677C1.49503 12.5585 1.52473 12.8599 1.63816 13.1339C1.75158 13.4078 1.94364 13.642 2.19007 13.8068C2.4365 13.9716 2.72623 14.0597 3.02271 14.06H12.0227" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.17273 2.82999L9.46271 1.54001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6927 5.35001L11.9828 4.06" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.58276 2.62L10.8528 7.89001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'server' &&
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2891 8.79999H2.47908C1.93232 8.79999 1.48907 9.24325 1.48907 9.79001V11.77C1.48907 12.3168 1.93232 12.76 2.47908 12.76H12.2891C12.8358 12.76 13.2791 12.3168 13.2791 11.77V9.79001C13.2791 9.24325 12.8358 8.79999 12.2891 8.79999Z" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.48907 7.01001V5.82999C1.48907 5.56477 1.59443 5.31043 1.78197 5.12289C1.9695 4.93536 2.22386 4.82999 2.48907 4.82999H12.2991C12.5643 4.82999 12.8186 4.93536 13.0062 5.12289C13.1937 5.31043 13.2991 5.56477 13.2991 5.82999V7.01001" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.48907 3.04999V1.87C1.48907 1.60478 1.59443 1.35044 1.78197 1.1629C1.9695 0.975366 2.22386 0.869995 2.48907 0.869995H12.2991C12.5643 0.869995 12.8186 0.975366 13.0062 1.1629C13.1937 1.35044 13.2991 1.60478 13.2991 1.87V3.04999" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.46906 3.60999C3.88327 3.60999 4.21906 3.2742 4.21906 2.85999C4.21906 2.44577 3.88327 2.10999 3.46906 2.10999C3.05484 2.10999 2.71906 2.44577 2.71906 2.85999C2.71906 3.2742 3.05484 3.60999 3.46906 3.60999Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M3.46906 7.57001C3.88327 7.57001 4.21906 7.23422 4.21906 6.82001C4.21906 6.40579 3.88327 6.07001 3.46906 6.07001C3.05484 6.07001 2.71906 6.40579 2.71906 6.82001C2.71906 7.23422 3.05484 7.57001 3.46906 7.57001Z" fill="var(--icon-color)"stroke="none"/>
            <path d="M3.46906 11.53C3.88327 11.53 4.21906 11.1942 4.21906 10.78C4.21906 10.3658 3.88327 10.03 3.46906 10.03C3.05484 10.03 2.71906 10.3658 2.71906 10.78C2.71906 11.1942 3.05484 11.53 3.46906 11.53Z" fill="var(--icon-color)"stroke="none"/>
          </svg>
        }

        {this.props.name === 'share-2' &&
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.11267 11.7L6.36267 13.21L6.32269 7.70999L1.16266 5.44L15.9727 1.45999L10.7827 12.82L8.21265 8.38" fill="none" stroke="var(--icon-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'failed' &&
          <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="63.25" cy="63.1909" r="61" stroke="var(--icon-failed-color)" strokeWidth="4"/>
            <g clipPath="url(#clip0_174_687280)">
              <path d="M63.249 32.4197L63.249 69.784" stroke="var(--icon-failed-color)" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M63.249 85.2234H63.1493" stroke="var(--icon-failed-color)" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_174_687280">
                <rect width="68.1081" height="68.1081" fill="var(--icon-exclamation-color)" transform="translate(29.1959 29.137)"/>
              </clipPath>
            </defs>
          </svg>
        }

        {this.props.name === 'success' &&
          <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="63.25" cy="63.1909" r="61" stroke="var(--icon-success-color)" strokeWidth="4"/>
            <path d="M85.9519 46.1641L54.7357 77.3803L40.5465 63.1911" stroke="var(--icon-success-color)" strokeWidth="6.69935" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'exclamation' &&
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.70175 0.0187378C5.51507 0.0187378 4.35498 0.370631 3.36829 1.02992C2.38159 1.68921 1.61254 2.62628 1.15842 3.72264C0.704293 4.81899 0.585428 6.02539 0.816939 7.18927C1.04845 8.35316 1.62007 9.42228 2.45918 10.2614C3.29829 11.1005 4.36718 11.6719 5.53107 11.9035C6.69495 12.135 7.90159 12.0161 8.99794 11.562C10.0943 11.1079 11.0313 10.3389 11.6905 9.35217C12.3498 8.36548 12.7017 7.20539 12.7017 6.0187C12.7017 4.42741 12.0695 2.90129 10.9443 1.77607C9.81911 0.650856 8.29305 0.0187378 6.70175 0.0187378Z" fill="var(--icon-exclamation-background-color)"/>
            <path d="M6.71118 3.0694L6.71118 6.6279" stroke="var(--icon-exclamation-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.71118 9H6.70169" stroke="var(--icon-exclamation-color)" vectorEffect="non-scaling-stroke" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }

        {this.props.name === 'spinner' &&
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" transform="translate(1 1)" fill="none" stroke="var(--spinner-background)" strokeWidth="var(--spinner-stroke-width)"/>
            <ellipse id="loading" rx="8" ry="8" transform="translate(9 9)" fill="none" stroke="var(--spinner-color)" strokeWidth="var(--spinner-stroke-width)" strokeLinecap="round"/>
          </svg>
        }

        {this.props.name === 'timer' &&
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse rx="8" ry="8" transform="translate(10 10)" fill="none" stroke="var(--timer-background)" strokeWidth="var(--timer-stroke-width)"/>
            <ellipse id="timer-progress" rx="8" ry="8" transform="matrix(0-1 1 0 10 10)" fill="none" stroke="var(--timer-color)"  strokeLinecap="round" strokeWidth="var(--timer-stroke-width)"/>
          </svg>
        }
      </span>
    );
  }
}

Icon.defaultProps = {
  big: false,
  baseline: false,
  dim: false,
  onClick: () => {
  }
};

Icon.propTypes = {
  name: PropTypes.string,
  big: PropTypes.bool,
  dim: PropTypes.bool,
  baseline: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default Icon;
