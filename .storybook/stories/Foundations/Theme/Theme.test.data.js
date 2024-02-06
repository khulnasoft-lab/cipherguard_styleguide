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
 * @since        3.7.0
 */
import {DESCRIPTIONS} from "./Theme";

export function getArgTypes(data) {
  const argTypes = {};
  Object.entries(data).map(([colorVariableName, value]) => {
    argTypes[colorVariableName] = {
      description: DESCRIPTIONS[colorVariableName],
      table: {
        category: colorVariableName.substring(0, colorVariableName.indexOf('-')),
        defaultValue: {summary: value},
      },
    };
  });
  return argTypes;
}

export const defaultColorVariables = {
  "default-background": "#FFFFFF",
  "default-border": "#E0E0E0",
  "default-text-color": "#000000",
  "text-info-color": "#666666",
  "text-light-color": "#888888",
  "text-lighter-color": "#989693",
  "text-lightest-color": "#E0E0E0",
  "text-focus-color": "#2894DF",
  "text-warning-color": "#DD6A00",
  "text-error-color": "#D40101",
  "text-secret-hover-color": "#D40101",
  "text-error-api-color": "#000000",
  "text-notification-color": "#000000",
  "header-main-menu-background": "#333333",
  "header-main-menu-text-color": "#EBEBE9",
  "header-main-menu-hover-text-color": "#FFFFFF",
  "header-workspace-background": "#EEEEEE",
  "footer-background": "#EEEEEE",
  "authentication-background": "#F0F0F0",
  "authentication-title-text-color": "#666666",
  "attention-required-border": "#DD6A00",
  "quickaccess-header-background": "#EEEEEE",
  "quickaccess-footer-background": "#EEEEEE",
  "quickaccess-back-link-background": "#F5F5F5",
  "quickaccess-list-title-background": "#F5F5F5",
  "quickaccess-list-title-hover-background": "#E9E9E9",
  "quickaccess-list-title-active-background": "#DDEBF8",
  "quickaccess-border": "#E0E0E0",
  "inform-menu-hover-background": "#E9E9E9",
  "inform-menu-active-background": "#DDEBF8",
  "inform-menu-border": "#E0E0E0",
  "dialog-background": "#EEEEEE",
  "dialog-overlay-background": "rgba(255, 255, 255, 0.9)",
  "dialog-border": "#D7D7D7",
  "dialog-box-shadow-color": "rgba(0, 0, 0, 0.1)",
  "dialog-divider-border": "#E0E0E0",
  "dialog-permission-updated-background": "#FFDBA6",
  "dialog-permission-border": "#F8F8F8",
  "dialog-folder-move-selected-background": "#F8F8F8",
  "dialog-folder-move-border": "#F8F8F8",
  "dialog-folder-move-selected-border": "#F8F8F8",
  "dialog-delete-conflict-title-background": "#F0F0F0",
  "button-background": "#F8F8F8",
  "button-active-background": "#DEDEDE",
  "button-border": "#E0E0E0",
  "button-focus-border": "#2894DF",
  "button-icon-background": "#EEEEEE",
  "button-icon-active-background": "#E0E0E0",
  "button-icon-border": "#BDBDBD",
  "button-primary-background": "#2894DF",
  "button-primary-border": "#2894DF",
  "button-primary-color": "#FFFFFF",
  "button-warning-background": "#D40101",
  "button-warning-border": "#D40101",
  "button-warning-color": "#FFFFFF",
  "button-transparent-background": "rgba(255, 255, 255, .1)",
  "button-transparent-border": "rgba(0, 0, 0, .05)",
  "link-highlight-background": "#2894DF",
  "link-border": "#CCCCCC",
  "link-hover-border": "#2894DF",
  "tooltip-background": "#B3B3B3",
  "tooltip-text-color": "#000000",
  "input-background": "#FFFFFF",
  "input-disabled-background": "#F0F0F0",
  "input-infield-background": "#F8F8F8",
  "input-border": "#BDBDBD",
  "input-infield-border": "#E0E0E0",
  "input-focus-border": "#2894DF",
  "input-checkbox-background": "#FFFFFF",
  "input-checkbox-disabled-background": "#C4C4C4",
  "input-checkbox-disabled-image-background": "#A1A1A1",
  "input-checkbox-border": "#A0A0A0",
  "input-checkbox-disabled-border": "#C4C4C4",
  "input-checkbox-focus-border": "#2894DF",
  "input-radio-background": "#FFFFFF",
  "input-radio-dot-background": "#2A9CEB",
  "input-radio-disabled-background": "#C4C4C4",
  "input-radio-dot-disabled-background": "#A1A1A1",
  "input-radio-border": "#A0A0A0",
  "input-radio-disabled-border": "#C4C4C4",
  "input-radio-focus-border": "#2894DF",
  "input-radio-list-background": "#F8F8F8",
  "input-radio-list-border": "#E0E0E0",
  "input-radio-list-hover-border": "#C4C4C4",
  "input-radio-list-focus-border": "#2894DF",
  "input-toggle-background": "#808080",
  "input-toggle-focus-background": "#2894DF",
  "input-toggle-dot-background": "#FFFFFF",
  "input-toggle-checked-background": "#009900",
  "input-toggle-focus-border": "#2894DF",
  "input-range-background": "#CCCCCC",
  "input-range-dot-background": "#F0F0F0",
  "input-range-dot-border": "#CCCCCC",
  "select-background": "#F8F8F8",
  "select-setup-extension-background": "#FFFFFF",
  "select-hover-background": "#DDDDDD",
  "select-focus-background": "#2894DF",
  "select-focus-text-color": "#FFFFFF",
  "select-border": "#E0E0E0",
  "select-focus-border": "#2894DF",
  "complexity-text-color": "#7C7C7C",
  "complexity-bar-default-background": "#BDBDBD",
  "complexity-bar-gradient.0.background": "#A40000",
  "complexity-bar-gradient.1.background": "#FFA724",
  "complexity-bar-gradient.2.background": "#0EAA00",
  "hint-success-color": "#009900",
  "hint-warning-color": "#DD6A00",
  "hint-error-color": "#D40101",
  "drag-background": "#808080",
  "drag-number-background": "#D40101",
  "drag-text-color": "#FFFFFF",
  "announcement-background": "#FEF0BF",
  "announcement-text-color": "#000000",
  "chips-text-color": "#FFFFFF",
  "chips-beta-background": "#DD6A00",
  "chips-new-background": "#2894DF",
  "autocomplete-background": "#FFFFFF",
  "autocomplete-hover-background": "#DEDEDE",
  "autocomplete-selected-background": "#F8F8F8",
  "autocomplete-border": "#BDBDBD",
  "progress-bar-default-background": "#BDBDBD",
  "progress-bar-background": "#D40101",
  "workspace-left-background": "#FAFAFA",
  "workspace-middle-background": "#FAFAFA",
  "workspace-title-border": "#E0E0E0",
  "workspace-left-menu-hover-background": "#DCDCDC",
  "workspace-left-menu-focus-border": "#2894DF",
  "workspace-left-menu-focus-background": "#2894DF",
  "workspace-left-menu-focus-text-color": "#FFFFFF",
  "dropdown-background": "#F8F8F8",
  "dropdown-profile-background": "#FFFFFF",
  "dropdown-focus-background": "#2894DF",
  "dropdown-focus-text-color": "#FFFFFF",
  "dropdown-item-hover-background": "#DCDCDC",
  "tableview-background": "#FFFFFF",
  "tableview-even-background": "#FAFAFA",
  "tableview-hover-background": "#E9E9E9",
  "tableview-selected-background": "#DDEBF8",
  "tableview-header-background": "#EEEEEE",
  "tableview-shadow-color": "#FFFFFF",
  "breadcrumb-background": "#FAFAFA",
  "info-panel-background": "#FFFFFF",
  "info-panel-border": "#F0F0F0",
  "info-panel-header-icon-background": "#F0F0F0",
  "info-panel-header-icon-color": "#7C7C7C",
  "info-panel-header-subtitle-text-color": "#80807E",
  "info-panel-header-section-background": "#FFFFFF",
  "info-panel-section-content-background": "#FFFFFF",
  "info-panel-section-notice-background": "#DDEBF8",
  "info-panel-section-border": "#E0E0E0",
  "comment-background": "#EEEEEE",
  "tag-text-color": "#2894DF",
  "tag-border": "#2894DF",
  "tag-background": "rgba(42,156,235,0.05)",
  "tag-hover-text-color": "#FFFFFF",
  "tag-hover-border": "#2894DF",
  "tag-hover-background": "#2894DF",
  "tag-editor-focus-border": "#2894DF",
  "notice-background": "#E8E8E8",
  "table-background": "#FFFFFF",
  "table-warning-background": "#FEF0BF",
  "table-error-background": "#FFA6A6",
  "table-border": "#E0E0E0",
  "table-row-even-background": "#FFFFFF",
  "tab-selected-background": "#FFFFFF",
  "tab-unselected-background": "#D7D7D7",
  "tab-border": "#D7D7D7",
  "mfa-background": "#F0F0F0",
  "mfa-border": "#F0F0F0",
  "mfa-provider-border": "#E0E0E0",
  "mfa-hint-trusted-device-color": "#009900",
  "feedback-card-border": "#E0E0E0",
  "account-recovery-card-background": "#F8F8F8",
  "usercard-created-background": "#0EAA00",
  "usercard-updated-background": "#2894DF",
  "usercard-removed-background": "#D40101",
  "message-error-text-color": "#000000",
  "message-error-background": "#FFA6A6",
  "message-success-text-color": "#000000",
  "message-success-background": "#EDF7EB",
  "message-notice-text-color": "#000000",
  "message-notice-background": "#DDEBF8",
  "message-warning-text-color": "#000000",
  "message-warning-background": "#FFDBA6",
  "message-link-border": "#888888",
  "icon-color": "#000000",
  "icon-background-color": "#FFFFFF",
  "icon-primary-color": "#FFFFFF",
  "icon-primary-background-color": "#000000",
  "icon-warning-color": "#FFFFFF",
  "icon-warning-background-color": "#000000",
  "icon-favorite-color": "#D40101",
  "icon-unfavorite-color": "#C9C9C9",
  "icon-exclamation-required-color": "#DD6A00",
  "icon-exclamation-default-color": "#9A9A9A",
  "icon-exclamation-color": "#FFFFFF",
  "icon-spinner-color": "#7A7A7A",
  "icon-spinner-background": "#000000",
  "icon-spinner-primary-color": "#FFFFFF",
  "icon-spinner-primary-background": "#FFFFFF",
  "icon-spinner-warning-color": "#FFFFFF",
  "icon-spinner-warning-background": "#FFFFFF",
  "icon-failed-color": "#D40101",
  "icon-success-color": "#009900",
  "shadow-focus-color": "#2A9CEB",
  "shadow-drag-color": "#808080",
};

export const midgarColorVariables = {
  "default-background": "#202020",
  "default-border": "#202020",
  "default-text-color": "#FFFFFF",
  "text-info-color": "#CACACA",
  "text-light-color": "#8B8B89",
  "text-lighter-color": "#8B8B89",
  "text-lightest-color": "#444442",
  "text-focus-color": "#2894DF",
  "text-warning-color": "#DD6A00",
  "text-error-color": "#D40101",
  "text-secret-hover-color": "#D40101",
  "text-error-api-color": "#202020",
  "text-notification-color": "#000000",
  "header-main-menu-background": "#1C1C1C",
  "header-main-menu-text-color": "#EBEBE9",
  "header-main-menu-hover-text-color": "#FFFFFF",
  "header-workspace-background": "#2C2C2C",
  "footer-background": "#2C2C2C",
  "authentication-background": "#101010",
  "authentication-title-text-color": "#CACACA",
  "attention-required-border": "#DD6A00",
  "quickaccess-header-background": "#353535",
  "quickaccess-footer-background": "#353535",
  "quickaccess-back-link-background": "#2C2C2C",
  "quickaccess-list-title-background": "#2C2C2C",
  "quickaccess-list-title-hover-background": "#101010",
  "quickaccess-list-title-active-background": "#404040",
  "quickaccess-border": "#101010",
  "inform-menu-hover-background": "#101010",
  "inform-menu-active-background": "#404040",
  "inform-menu-border": "#101010",
  "dialog-background": "#353535",
  "dialog-overlay-background": "rgba(0, 0, 0, 0.8)",
  "dialog-border": "#181818",
  "dialog-box-shadow-color": "rgba(0, 0, 0, 0.5)",
  "dialog-divider-border": "#101010",
  "dialog-permission-updated-background": "#5C564C",
  "dialog-permission-border": "#000000",
  "dialog-folder-move-selected-background": "#353535",
  "dialog-folder-move-border": "#000000",
  "dialog-folder-move-selected-border": "#353535",
  "dialog-delete-conflict-title-background": "#353535",
  "button-background": "#353535",
  "button-active-background": "#101010",
  "button-border": "#202020",
  "button-focus-border": "#2894DF",
  "button-icon-background": "#424242",
  "button-icon-active-background": "#101010",
  "button-icon-border": "#1E1E1E",
  "button-primary-background": "#2894DF",
  "button-primary-border": "#2894DF",
  "button-primary-color": "#FFFFFF",
  "button-warning-background": "#D40101",
  "button-warning-border": "#D40101",
  "button-warning-color": "#FFFFFF",
  "button-transparent-background": "rgba(0, 0, 0, .1)",
  "button-transparent-border": "rgba(255, 255, 255, .05)",
  "link-highlight-background": "#2894DF",
  "link-border": "#515151",
  "link-hover-border": "#2894DF",
  "tooltip-background": "#151515",
  "tooltip-text-color": "#FFFFFF",
  "input-background": "#000000",
  "input-disabled-background": "#444442",
  "input-infield-background": "#353535",
  "input-border": "#000000",
  "input-infield-border": "#202020",
  "input-focus-border": "#2894DF",
  "input-checkbox-background": "#202020",
  "input-checkbox-disabled-background": "#000000",
  "input-checkbox-disabled-image-background": "#303030",
  "input-checkbox-border": "#7A7A7A",
  "input-checkbox-disabled-border": "#292929",
  "input-checkbox-focus-border": "#2894DF",
  "input-radio-background": "#202020",
  "input-radio-dot-background": "#2A9CEB",
  "input-radio-disabled-background": "#000000",
  "input-radio-dot-disabled-background": "#292929",
  "input-radio-border": "#7A7A7A",
  "input-radio-disabled-border": "#000000",
  "input-radio-focus-border": "#2894DF",
  "input-radio-list-background": "#353535",
  "input-radio-list-border": "#202020",
  "input-radio-list-hover-border": "#202020",
  "input-radio-list-focus-border": "#2894DF",
  "input-toggle-background": "#808080",
  "input-toggle-focus-background": "#2894DF",
  "input-toggle-dot-background": "#FFFFFF",
  "input-toggle-checked-background": "#009900",
  "input-toggle-focus-border": "#2894DF",
  "input-range-background": "#424242",
  "input-range-dot-background": "#7A7A7A",
  "input-range-dot-border": "#424242",
  "select-background": "#353535",
  "select-setup-extension-background": "#202020",
  "select-hover-background": "#404040",
  "select-focus-background": "#2894DF",
  "select-focus-text-color": "#FFFFFF",
  "select-border": "#202020",
  "select-focus-border": "#2894DF",
  "complexity-text-color": "#FFFFFF",
  "complexity-bar-default-background": "#424242",
  "complexity-bar-gradient.0.background": "#A40000",
  "complexity-bar-gradient.1.background": "#FFA724",
  "complexity-bar-gradient.2.background": "#0EAA00",
  "hint-success-color": "#009900",
  "hint-warning-color": "#DD6A00",
  "hint-error-color": "#D40101",
  "drag-background": "#808080",
  "drag-number-background": "#D40101",
  "drag-text-color": "#FFFFFF",
  "announcement-background": "#FEF0BF",
  "announcement-text-color": "#000000",
  "chips-text-color": "#FFFFFF",
  "chips-beta-background": "#DD6A00",
  "chips-new-background": "#2894DF",
  "autocomplete-background": "#000000",
  "autocomplete-hover-background": "#202020",
  "autocomplete-selected-background": "#353535",
  "autocomplete-border": "#000000",
  "progress-bar-default-background": "#424242",
  "progress-bar-background": "#D40101",
  "workspace-left-background": "#353535",
  "workspace-middle-background": "#353535",
  "workspace-title-border": "#101010",
  "workspace-left-menu-hover-background": "#404040",
  "workspace-left-menu-focus-border": "#2894DF",
  "workspace-left-menu-focus-background": "#2894DF",
  "workspace-left-menu-focus-text-color": "#FFFFFF",
  "dropdown-background": "#353535",
  "dropdown-profile-background": "#1C1C1C",
  "dropdown-focus-background": "#2894DF",
  "dropdown-focus-text-color": "#FFFFFF",
  "dropdown-item-hover-background": "#404040",
  "tableview-background": "#202020",
  "tableview-even-background": "#1C1C1C",
  "tableview-hover-background": "#101010",
  "tableview-selected-background": "#404040",
  "tableview-header-background": "#3B3B3B",
  "tableview-shadow-color": "#616161",
  "breadcrumb-background": "#353535",
  "info-panel-background": "#353535",
  "info-panel-border": "#000000",
  "info-panel-header-icon-background": "#111111",
  "info-panel-header-icon-color": "#7C7C7C",
  "info-panel-header-subtitle-text-color": "#B1B1B1",
  "info-panel-header-section-background": "#353535",
  "info-panel-section-content-background": "#303030",
  "info-panel-section-notice-background": "#DDEBF8",
  "info-panel-section-border": "#202020",
  "comment-background": "#1F1F1F",
  "tag-text-color": "#DDEBF8",
  "tag-border": "#B8D0FD",
  "tag-background": "rgba(42,156,235,0.1)",
  "tag-hover-text-color": "#2A9CEB",
  "tag-hover-border": "#2A9CEB",
  "tag-hover-background": "#303030",
  "tag-editor-focus-border": "#2894DF",
  "notice-background": "#202020",
  "table-background": "#202020",
  "table-warning-background": "#FEF0BF",
  "table-error-background": "#FFA6A6",
  "table-border": "#202020",
  "table-row-even-background": "#424242",
  "tab-selected-background": "#202020",
  "tab-unselected-background": "#101010",
  "tab-border": "#101010",
  "mfa-background": "#444442",
  "mfa-border": "#444442",
  "mfa-provider-border": "#000000",
  "mfa-hint-trusted-device-color": "#009900",
  "feedback-card-border": "#000000",
  "account-recovery-card-background": "#353535",
  "usercard-created-background": "#0EAA00",
  "usercard-updated-background": "#2894DF",
  "usercard-removed-background": "#D40101",
  "message-error-text-color": "#000000",
  "message-error-background": "#FFA6A6",
  "message-success-text-color": "#000000",
  "message-success-background": "#EDF7EB",
  "message-notice-text-color": "#000000",
  "message-notice-background": "#DDEBF8",
  "message-warning-text-color": "#000000",
  "message-warning-background": "#FFDBA6",
  "message-link-border": "#000000",
  "icon-color": "#FFFFFF",
  "icon-background-color": "#3B3B3B",
  "icon-primary-color": "#FFFFFF",
  "icon-primary-background-color": "#3B3B3B",
  "icon-warning-color": "#FFFFFF",
  "icon-warning-background-color": "#3B3B3B",
  "icon-favorite-color": "#D40101",
  "icon-unfavorite-color": "#696969",
  "icon-exclamation-required-color": "#DD6A00",
  "icon-exclamation-default-color": "#696969",
  "icon-exclamation-color": "#FFFFFF",
  "icon-spinner-color": "#7A7A7A",
  "icon-spinner-background": "#FFFFFF",
  "icon-spinner-primary-color": "#FFFFFF",
  "icon-spinner-primary-background": "#FFFFFF",
  "icon-spinner-warning-color": "#FFFFFF",
  "icon-spinner-warning-background": "#FFFFFF",
  "icon-failed-color": "#D40101",
  "icon-success-color": "#009900",
  "shadow-focus-color": "#2A9CEB",
  "shadow-drag-color": "#808080",
};

export const solarizedLightColorVariables = {
  "default-background": "hsla(44,87%,98%,1)",
  "default-border": "hsla(44,50%,93%,1)",
  "default-text-color": "hsla(194,81%,14%,1)",
  "text-info-color": "hsla(44,50%,75%,1)",
  "text-light-color": "hsla(44,50%,78%,1)",
  "text-lighter-color": "hsla(44,50%,79%,1)",
  "text-lightest-color": "hsla(44,50%,88%,1)",
  "text-focus-color": "hsla(194,100%,15%,1)",
  "text-warning-color": "hsla(18,80%,44%,1)",
  "text-error-color": "hsla(1,71%,52%,1)",
  "text-secret-hover-color": "hsla(1,71%,52%,1)",
  "text-error-api-color": "hsla(194,81%,14%,1)",
  "text-notification-color": "hsla(194,81%,14%,1)",
  "header-main-menu-background": "hsla(194,81%,14%,1)",
  "header-main-menu-text-color": "hsla(194,81%,40%,1)",
  "header-main-menu-hover-text-color": "hsla(44,87%,98%,1)",
  "header-workspace-background": "hsla(44,50%,89%,1)",
  "footer-background": "hsla(44,50%,89%,1)",
  "authentication-background": "hsla(44,50%,91%,1)",
  "authentication-title-text-color": "hsla(44,50%,75%,1)",
  "attention-required-border": "hsla(18,80%,44%,1)",
  "quickaccess-header-background": "hsla(44,50%,89%,1)",
  "quickaccess-footer-background": "hsla(44,50%,89%,1)",
  "quickaccess-back-link-background": "hsla(44,50%,92%,1)",
  "quickaccess-list-title-background": "hsla(44,50%,92%,1)",
  "quickaccess-list-title-hover-background": "hsla(44,50%,90%,1)",
  "quickaccess-list-title-active-background": "hsla(44,50%,87%,1)",
  "quickaccess-border": "hsla(44,50%,88%,1)",
  "inform-menu-hover-background": "hsla(44,50%,90%,1)",
  "inform-menu-active-background": "hsla(44,50%,87%,1)",
  "inform-menu-border": "hsla(44,50%,88%,1)",
  "dialog-background": "hsla(44,50%,92%,1)",
  "dialog-overlay-background": "hsla(194,81%,14%,0.8)",
  "dialog-border": "hsla(44,50%,87%,1)",
  "dialog-box-shadow-color": "hsla(44,50%,15%,0.2)",
  "dialog-divider-border": "hsla(44,50%,88%,1)",
  "dialog-permission-updated-background": "hsla(18,80%,54%,1)",
  "dialog-permission-border": "hsla(44,50%,92%,1)",
  "dialog-folder-move-selected-background": "hsla(44,50%,92%,1)",
  "dialog-folder-move-border": "hsla(44,50%,92%,1)",
  "dialog-folder-move-selected-border": "hsla(44,50%,92%,1)",
  "dialog-delete-conflict-title-background": "hsla(44,50%,91%,1)",
  "button-background": "hsla(44,50%,92%,1)",
  "button-active-background": "hsla(44,50%,85%,1)",
  "button-border": "hsla(44,50%,76%,1)",
  "button-focus-border": "hsla(194,100%,15%,1)",
  "button-icon-background": "hsla(44,50%,89%,1)",
  "button-icon-active-background": "hsla(44,50%,88%,1)",
  "button-icon-border": "hsla(44,50%,76%,1)",
  "button-primary-background": "hsla(194,100%,15%,1)",
  "button-primary-border": "hsla(194,100%,15%,1)",
  "button-primary-color": "hsla(44,87%,98%,1)",
  "button-warning-background": "hsla(1,71%,52%,1)",
  "button-warning-border": "hsla(1,71%,52%,1)",
  "button-warning-color": "hsla(44,87%,98%,1)",
  "button-transparent-background": "hsla(46,48%,92%,0.1)",
  "button-transparent-border": "hsla(194,14%,5%,0.05)",
  "link-highlight-background": "hsla(194,100%,15%,1)",
  "link-border": "hsla(44,50%,83%,1)",
  "link-hover-border": "hsla(194,100%,10%,1)",
  "tooltip-background": "hsla(44,50%,81%,1)",
  "tooltip-text-color": "hsla(194,81%,14%,1)",
  "input-background": "hsla(44,87%,98%,1)",
  "input-disabled-background": "hsla(44,50%,91%,1)",
  "input-infield-background": "hsla(44,50%,92%,1)",
  "input-border": "hsla(44,50%,82%,1)",
  "input-infield-border": "hsla(44,50%,88%,1)",
  "input-focus-border": "hsla(194,100%,15%,1)",
  "input-checkbox-background": "hsla(44,87%,98%,1)",
  "input-checkbox-disabled-background": "hsla(44,50%,83%,1)",
  "input-checkbox-disabled-image-background": "hsla(44,50%,81%,1)",
  "input-checkbox-border": "hsla(44,50%,80%,1)",
  "input-checkbox-disabled-border": "hsla(44,50%,83%,1)",
  "input-checkbox-focus-border": "hsla(194,100%,15%,1)",
  "input-radio-background": "hsla(44,87%,98%,1)",
  "input-radio-dot-background": "hsla(194,100%,20%,1)",
  "input-radio-disabled-background": "hsla(44,50%,83%,1)",
  "input-radio-dot-disabled-background": "hsla(44,50%,81%,1)",
  "input-radio-border": "hsla(44,50%,80%,1)",
  "input-radio-disabled-border": "hsla(44,50%,83%,1)",
  "input-radio-focus-border": "hsla(194,100%,15%,1)",
  "input-radio-list-background": "hsla(44,50%,92%,1)",
  "input-radio-list-border": "hsla(44,50%,88%,1)",
  "input-radio-list-hover-border": "hsla(44,50%,83%,1)",
  "input-radio-list-focus-border": "hsla(194,100%,15%,1)",
  "input-toggle-background": "hsla(44,50%,76%,1)",
  "input-toggle-focus-background": "hsla(194,100%,15%,1)",
  "input-toggle-dot-background": "hsla(44,87%,98%,1)",
  "input-toggle-checked-background": "hsla(45,100%,35%,1)",
  "input-toggle-focus-border": "hsla(194,100%,15%,1)",
  "input-range-background": "hsla(44,50%,83%,1)",
  "input-range-dot-background": "hsla(44,50%,91%,1)",
  "input-range-dot-border": "hsla(44,50%,83%,1)",
  "select-background": "hsla(44,50%,92%,1)",
  "select-setup-extension-background": "hsla(44,87%,98%,1)",
  "select-hover-background": "hsla(44,50%,85%,1)",
  "select-focus-background": "hsla(194,100%,15%,1)",
  "select-focus-text-color": "hsla(44,87%,98%,1)",
  "select-border": "hsla(44,50%,88%,1)",
  "select-focus-border": "hsla(194,100%,15%,1)",
  "complexity-text-color": "hsla(194,81%,14%,1)",
  "complexity-bar-default-background": "hsla(44,50%,82%,1)",
  "complexity-bar-gradient.0.background": "#A40000",
  "complexity-bar-gradient.1.background": "#FFA724",
  "complexity-bar-gradient.2.background": "#0EAA00",
  "hint-success-color": "hsla(45,100%,35%,1)",
  "hint-warning-color": "hsla(18,80%,44%,1)",
  "hint-error-color": "hsla(1,71%,52%,1)",
  "drag-background": "hsla(44,50%,76%,1)",
  "drag-number-background": "hsla(1,71%,52%,1)",
  "drag-text-color": "hsla(194,81%,14%,1)",
  "announcement-background": "hsla(18,80%,64%,1)",
  "announcement-text-color": "hsla(194,81%,14%,1)",
  "chips-text-color": "hsla(44,87%,98%,1)",
  "chips-beta-background": "hsla(18,80%,44%,1)",
  "chips-new-background": "hsla(194,100%,15%,1)",
  "autocomplete-background": "hsla(44,87%,98%,1)",
  "autocomplete-hover-background": "hsla(44,50%,85%,1)",
  "autocomplete-selected-background": "hsla(44,50%,92%,1)",
  "autocomplete-border": "hsla(44,50%,82%,1)",
  "progress-bar-default-background": "hsla(44,50%,82%,1)",
  "progress-bar-background": "hsla(1,71%,52%,1)",
  "workspace-left-background": "hsla(44,50%,93%,1)",
  "workspace-middle-background": "hsla(44,50%,93%,1)",
  "workspace-title-border": "hsla(44,50%,88%,1)",
  "workspace-left-menu-hover-background": "hsla(44,50%,86%,1)",
  "workspace-left-menu-focus-border": "hsla(194,100%,15%,1)",
  "workspace-left-menu-focus-background": "hsla(194,100%,15%,1)",
  "workspace-left-menu-focus-text-color": "hsla(44,87%,98%,1)",
  "dropdown-background": "hsla(44,50%,92%,1)",
  "dropdown-profile-background": "hsla(44,87%,98%,1)",
  "dropdown-focus-background": "hsla(194,100%,15%,1)",
  "dropdown-focus-text-color": "hsla(44,87%,98%,1)",
  "dropdown-item-hover-background": "hsla(44,50%,86%,1)",
  "tableview-background": "hsla(44,87%,98%,1)",
  "tableview-even-background": "hsla(44,50%,93%,1)",
  "tableview-hover-background": "hsla(44,50%,90%,1)",
  "tableview-selected-background": "hsla(44,50%,81%,1)",
  "tableview-header-background": "hsla(44,50%,89%,1)",
  "tableview-shadow-color": "hsla(44,87%,98%,1)",
  "breadcrumb-background": "hsla(44,50%,93%,1)",
  "info-panel-background": "hsla(44,50%,92%,1)",
  "info-panel-border": "hsla(44,50%,91%,1)",
  "info-panel-header-icon-background": "hsla(44,50%,91%,1)",
  "info-panel-header-icon-color": "hsla(44,50%,77%,1)",
  "info-panel-header-subtitle-text-color": "hsla(44,50%,78%,1)",
  "info-panel-section-header-background": "hsla(44,50%,90%,1)",
  "info-panel-section-content-background": "hsla(44,50%,89%,1)",
  "info-panel-section-notice-background": "hsla(44,50%,87%,1)",
  "info-panel-section-border": "hsla(44,50%,88%,1)",
  "comment-background": "hsla(44,50%,89%,1)",
  "tag-text-color": "hsla(194,100%,15%,1)",
  "tag-border": "hsla(194,100%,15%,1)",
  "tag-background": "rgba(42,156,235,0.05)",
  "tag-hover-text-color": "hsla(44,87%,98%,1)",
  "tag-hover-border": "hsla(194,100%,15%,1)",
  "tag-hover-background": "hsla(194,100%,15%,1)",
  "tag-editor-focus-border": "hsla(194,100%,15%,1)",
  "notice-background": "hsla(44,50%,89%,1)",
  "table-background": "hsla(44,87%,98%,1)",
  "table-warning-background": "hsla(18,80%,64%,1)",
  "table-error-background": "hsla(1,71%,72%,1)",
  "table-border": "hsla(44,50%,88%,1)",
  "table-row-even-background": "hsla(44,87%,98%,1)",
  "tab-selected-background": "hsla(44,87%,98%,1)",
  "tab-unselected-background": "hsla(44,50%,87%,1)",
  "tab-border": "hsla(44,50%,87%,1)",
  "mfa-background": "hsla(44,50%,91%,1)",
  "mfa-border": "hsla(44,50%,91%,1)",
  "mfa-provider-border": "hsla(44,50%,88%,1)",
  "mfa-hint-trusted-device-color": "hsla(45,100%,35%,1)",
  "feedback-card-border": "hsla(44,50%,88%,1)",
  "account-recovery-card-background": "hsla(44,50%,92%,1)",
  "usercard-created-background": "hsla(68,100%,30%,1)",
  "usercard-updated-background": "hsla(18,80%,54%,1)",
  "usercard-removed-background": "hsla(1,71%,52%,1)",
  "message-error-text-color": "hsla(194,81%,14%,1)",
  "message-error-background": "hsla(1,71%,72%,1)",
  "message-success-text-color": "hsla(194,81%,14%,1)",
  "message-success-background": "hsla(45,100%,35%,1)",
  "message-notice-text-color": "hsla(194,81%,14%,1)",
  "message-notice-background": "hsla(44,50%,87%,1)",
  "message-warning-text-color": "hsla(194,81%,14%,1)",
  "message-warning-background": "hsla(18,80%,54%,1)",
  "message-link-border": "hsla(44,50%,78%,1)",
  "icon-color": "hsla(194,81%,14%,1)",
  "icon-background-color": "hsla(44,87%,98%,1)",
  "icon-primary-color": "hsla(44,87%,98%,1)",
  "icon-primary-background-color": "hsla(194,81%,14%,1)",
  "icon-warning-color": "hsla(44,87%,98%,1)",
  "icon-warning-background-color": "hsla(194,81%,14%,1)",
  "icon-favorite-color": "hsla(1,71%,52%,1)",
  "icon-unfavorite-color": "hsla(44,50%,84%,1)",
  "icon-exclamation-required-color": "hsla(18,80%,44%,1)",
  "icon-exclamation-default-color": "hsla(44,50%,80%,1)",
  "icon-exclamation-color": "hsla(44,87%,98%,1)",
  "icon-spinner-color": "hsla(44,50%,76%,1)",
  "icon-spinner-background": "hsla(194,81%,14%,1)",
  "icon-spinner-primary-color": "hsla(44,87%,98%,1)",
  "icon-spinner-primary-background": "hsla(44,87%,98%,1)",
  "icon-spinner-warning-color": "hsla(44,87%,98%,1)",
  "icon-spinner-warning-background": "hsla(44,87%,98%,1)",
  "icon-failed-color": "hsla(1,71%,52%,1)",
  "icon-success-color": "hsla(45,100%,35%,1)",
  "shadow-focus-color": "hsla(194,100%,20%,1)",
  "shadow-drag-color": "hsla(44,50%,76%,1)",
};

export const solarizedDarkColorVariables = {
  "default-background": "hsla(194,14%,23%,1)",
  "default-border": "hsla(194,14%,23%,1)",
  "default-text-color": "hsla(46,42%,88%,1)",
  "text-info-color": "hsla(194,14%,56%,1)",
  "text-light-color": "hsla(194,14%,51%,1)",
  "text-lighter-color": "hsla(194,14%,51%,1)",
  "text-lightest-color": "hsla(194,14%,37%,1)",
  "text-focus-color": "hsla(45,100%,45%,1)",
  "text-warning-color": "hsla(18,80%,44%,1)",
  "text-error-color": "hsla(1,71%,52%,1)",
  "text-secret-hover-color": "hsla(1,71%,52%,1)",
  "text-error-api-color": "hsla(194,14%,23%,1)",
  "text-notification-color": "hsla(194,14%,5%,1)",
  "header-main-menu-background": "hsla(194,14%,19%,1)",
  "header-main-menu-text-color": "hsla(194,14%,60%,1)",
  "header-main-menu-hover-text-color": "hsla(46,42%,88%,1)",
  "header-workspace-background": "hsla(194,14%,24%,1)",
  "footer-background": "hsla(194,14%,24%,1)",
  "authentication-background": "hsla(194,14%,10%,1)",
  "authentication-title-text-color": "hsla(194,14%,56%,1)",
  "attention-required-border": "hsla(18,80%,44%,1)",
  "quickaccess-header-background": "hsla(194,14%,30%,1)",
  "quickaccess-footer-background": "hsla(194,14%,30%,1)",
  "quickaccess-back-link-background": "hsla(194,14%,24%,1)",
  "quickaccess-list-title-background": "hsla(194,14%,24%,1)",
  "quickaccess-list-title-hover-background": "hsla(194,14%,10%,1)",
  "quickaccess-list-title-active-background": "hsla(194,14%,33%,1)",
  "quickaccess-border": "hsla(194,14%,10%,1)",
  "inform-menu-hover-background": "hsla(194,14%,10%,1)",
  "inform-menu-active-background": "hsla(194,14%,33%,1)",
  "inform-menu-border": "hsla(194,14%,10%,1)",
  "dialog-background": "hsla(194,14%,30%,1)",
  "dialog-overlay-background": "hsla(194,14%,5%,0.8)",
  "dialog-border": "hsla(194,14%,17%,1)",
  "dialog-box-shadow-color": "hsla(194,14%,1%,0.5)",
  "dialog-divider-border": "hsla(194,14%,10%,1)",
  "dialog-permission-updated-background": "hsla(194,14%,40%,1)",
  "dialog-permission-border": "hsla(194,14%,5%,1)",
  "dialog-folder-move-selected-background": "hsla(194,14%,30%,1)",
  "dialog-folder-move-border": "hsla(194,14%,5%,1)",
  "dialog-folder-move-selected-border": "hsla(194,14%,30%,1)",
  "dialog-delete-conflict-title-background": "hsla(194,14%,30%,1)",
  "button-background": "hsla(194,14%,30%,1)",
  "button-active-background": "hsla(194,14%,10%,1)",
  "button-border": "hsla(194,14%,23%,1)",
  "button-focus-border": "hsla(45,100%,45%,1)",
  "button-icon-background": "hsla(194,14%,35%,1)",
  "button-icon-active-background": "hsla(194,14%,10%,1)",
  "button-icon-border": "hsla(194,14%,15%,1)",
  "button-primary-background": "hsla(45,100%,45%,1)",
  "button-primary-border": "hsla(45,100%,45%,1)",
  "button-primary-color": "hsla(194,14%,5%,1)",
  "button-warning-background": "hsla(1,71%,52%,1)",
  "button-warning-border": "hsla(1,71%,52%,1)",
  "button-warning-color": "hsla(46,42%,88%,1)",
  "button-transparent-background": "hsla(194,14%,5%,0.1)",
  "button-transparent-border": "hsla(194,14%,90%,0.1)",
  "link-highlight-background": "hsla(45,100%,45%,1)",
  "link-border": "hsla(194,14%,39%,1)",
  "link-hover-border": "hsla(45,100%,45%,1)",
  "tooltip-background": "hsla(194,14%,14%,1)",
  "tooltip-text-color": "hsla(46,42%,88%,1)",
  "input-background": "hsla(194,14%,5%,1)",
  "input-disabled-background": "hsla(194,14%,37%,1)",
  "input-infield-background": "hsla(194,14%,30%,1)",
  "input-border": "hsla(194,14%,5%,1)",
  "input-infield-border": "hsla(194,14%,23%,1)",
  "input-focus-border": "hsla(45,100%,45%,1)",
  "input-checkbox-background": "hsla(194,14%,23%,1)",
  "input-checkbox-disabled-background": "hsla(194,14%,5%,1)",
  "input-checkbox-disabled-image-background": "hsla(194,14%,28%,1)",
  "input-checkbox-border": "hsla(194,14%,46%,1)",
  "input-checkbox-disabled-border": "hsla(194,14%,26%,1)",
  "input-checkbox-focus-border": "hsla(45,100%,45%,1)",
  "input-radio-background": "hsla(194,14%,23%,1)",
  "input-radio-dot-background": "hsla(45,100%,50%,1)",
  "input-radio-disabled-background": "hsla(194,14%,5%,1)",
  "input-radio-dot-disabled-background": "hsla(194,14%,26%,1)",
  "input-radio-border": "hsla(194,14%,46%,1)",
  "input-radio-disabled-border": "hsla(194,14%,5%,1)",
  "input-radio-focus-border": "hsla(45,100%,45%,1)",
  "input-radio-list-background": "hsla(194,14%,30%,1)",
  "input-radio-list-border": "hsla(194,14%,23%,1)",
  "input-radio-list-hover-border": "hsla(194,14%,23%,1)",
  "input-radio-list-focus-border": "hsla(45,100%,45%,1)",
  "input-toggle-background": "hsla(194,14%,48%,1)",
  "input-toggle-focus-background": "hsla(45,100%,45%,1)",
  "input-toggle-dot-background": "hsla(46,42%,88%,1)",
  "input-toggle-checked-background": "hsla(68,100%,35%,1)",
  "input-toggle-focus-border": "hsla(45,100%,45%,1)",
  "input-range-background": "hsla(194,14%,35%,1)",
  "input-range-dot-background": "hsla(194,14%,46%,1)",
  "input-range-dot-border": "hsla(194,14%,35%,1)",
  "select-background": "hsla(194,14%,30%,1)",
  "select-setup-extension-background": "hsla(194,14%,23%,1)",
  "select-hover-background": "hsla(194,14%,33%,1)",
  "select-focus-background": "hsla(45,100%,45%,1)",
  "select-focus-text-color": "hsla(46,42%,88%,1)",
  "select-border": "hsla(194,14%,23%,1)",
  "select-focus-border": "hsla(45,100%,45%,1)",
  "complexity-text-color": "hsla(46,42%,88%,1)",
  "complexity-bar-default-background": "hsla(194,14%,35%,1)",
  "complexity-bar-gradient.0.background": "#A40000",
  "complexity-bar-gradient.1.background": "#FFA724",
  "complexity-bar-gradient.2.background": "#0EAA00",
  "hint-success-color": "hsla(68,100%,35%,1)",
  "hint-warning-color": "hsla(18,80%,44%,1)",
  "hint-error-color": "hsla(1,71%,52%,1)",
  "drag-background": "hsla(194,14%,48%,1)",
  "drag-number-background": "hsla(1,71%,52%,1)",
  "drag-text-color": "hsla(46,42%,88%,1)",
  "announcement-background": "hsla(18,80%,74%,1)",
  "announcement-text-color": "hsla(194,14%,5%,1)",
  "chips-text-color": "hsla(46,42%,88%,1)",
  "chips-beta-background": "hsla(18,80%,44%,1)",
  "chips-new-background": "hsla(45,100%,45%,1)",
  "autocomplete-background": "hsla(194,14%,5%,1)",
  "autocomplete-hover-background": "hsla(194,14%,23%,1)",
  "autocomplete-selected-background": "hsla(194,14%,30%,1)",
  "autocomplete-border": "hsla(194,14%,5%,1)",
  "progress-bar-default-background": "hsla(194,14%,35%,1)",
  "progress-bar-background": "hsla(1,71%,52%,1)",
  "workspace-left-background": "hsla(194,14%,30%,1)",
  "workspace-middle-background": "hsla(194,14%,30%,1)",
  "workspace-title-border": "hsla(194,14%,10%,1)",
  "workspace-left-menu-hover-background": "hsla(194,14%,33%,1)",
  "workspace-left-menu-focus-border": "hsla(45,100%,45%,1)",
  "workspace-left-menu-focus-background": "hsla(45,100%,45%,1)",
  "workspace-left-menu-focus-text-color": "hsla(46,42%,88%,1)",
  "dropdown-background": "hsla(194,14%,30%,1)",
  "dropdown-profile-background": "hsla(194,14%,19%,1)",
  "dropdown-focus-background": "hsla(45,100%,45%,1)",
  "dropdown-focus-text-color": "hsla(46,42%,88%,1)",
  "dropdown-item-hover-background": "hsla(194,14%,33%,1)",
  "tableview-background": "hsla(194,14%,23%,1)",
  "tableview-even-background": "hsla(194,14%,19%,1)",
  "tableview-hover-background": "hsla(194,14%,10%,1)",
  "tableview-selected-background": "hsla(194,14%,33%,1)",
  "tableview-header-background": "hsla(194,14%,31%,1)",
  "tableview-shadow-color": "hsla(194,14%,42%,1)",
  "breadcrumb-background": "hsla(194,14%,30%,1)",
  "info-panel-background": "hsla(194,14%,30%,1)",
  "info-panel-border": "hsla(194,14%,5%,1)",
  "info-panel-header-icon-background": "hsla(194,14%,12%,1)",
  "info-panel-header-icon-color": "hsla(194,14%,49%,1)",
  "info-panel-header-subtitle-text-color": "hsla(194,14%,55%,1)",
  "info-panel-section-header-background": "hsla(194,14%,30%,1)",
  "info-panel-section-content-background": "hsla(194,14%,28%,1)",
  "info-panel-section-notice-background": "hsla(194,14%,58%,1)",
  "info-panel-section-border": "hsla(194,14%,23%,1)",
  "comment-background": "hsla(194,14%,21%,1)",
  "tag-text-color": "hsla(194,14%,5%,1)",
  "tag-border": "hsla(45,100%,55%,1)",
  "tag-background": "hsla(45,100%,40%,0.1)",
  "tag-hover-text-color": "hsla(45,100%,50%,1)",
  "tag-hover-border": "hsla(45,100%,50%,1)",
  "tag-hover-background": "hsla(194,14%,28%,1)",
  "tag-editor-focus-border": "hsla(45,100%,45%,1)",
  "notice-background": "hsla(194,14%,23%,1)",
  "table-background": "hsla(194,14%,23%,1)",
  "table-warning-background": "hsla(18,80%,74%,1)",
  "table-error-background": "hsla(1,71%,72%,1)",
  "table-border": "hsla(194,14%,23%,1)",
  "table-row-even-background": "hsla(194,14%,35%,1)",
  "tab-selected-background": "hsla(194,14%,23%,1)",
  "tab-unselected-background": "hsla(194,14%,10%,1)",
  "tab-border": "hsla(194,14%,10%,1)",
  "mfa-background": "hsla(194,14%,37%,1)",
  "mfa-border": "hsla(194,14%,37%,1)",
  "mfa-provider-border": "hsla(194,14%,5%,1)",
  "mfa-hint-trusted-device-color": "hsla(68,100%,35%,1)",
  "feedback-card-border": "hsla(194,14%,5%,1)",
  "account-recovery-card-background": "hsla(194,14%,30%,1)",
  "usercard-created-background": "hsla(68,100%,30%,1)",
  "usercard-updated-background": "hsla(18,80%,54%,1)",
  "usercard-removed-background": "hsla(1,71%,52%,1)",
  "message-error-text-color": "hsla(194,14%,5%,1)",
  "message-error-background": "hsla(1,71%,72%,1)",
  "message-success-text-color": "hsla(194,14%,5%,1)",
  "message-success-background": "hsla(68,100%,35%,1)",
  "message-notice-text-color": "hsla(194,14%,5%,1)",
  "message-notice-background": "hsla(194,14%,58%,1)",
  "message-warning-text-color": "hsla(194,14%,5%,1)",
  "message-warning-background": "hsla(18,80%,64%,1)",
  "message-link-border": "hsla(194,14%,5%,1)",
  "icon-color": "hsla(46,42%,88%,1)",
  "icon-background-color": "hsla(194,14%,31%,1)",
  "icon-primary-color": "hsla(194,14%,5%,1)",
  "icon-primary-background-color": "hsla(194,14%,31%,1)",
  "icon-warning-color": "hsla(46,42%,88%,1)",
  "icon-warning-background-color": "hsla(194,14%,31%,1)",
  "icon-favorite-color": "hsla(1,71%,52%,1)",
  "icon-unfavorite-color": "hsla(194,14%,44%,1)",
  "icon-exclamation-required-color": "hsla(18,80%,44%,1)",
  "icon-exclamation-default-color": "hsla(194,14%,44%,1)",
  "icon-exclamation-color": "hsla(46,42%,88%,1)",
  "icon-spinner-color": "hsla(46,42%,88%,1)",
  "icon-spinner-background": "hsla(46,42%,88%,1)",
  "icon-spinner-primary-color": "hsla(194,14%,5%,1)",
  "icon-spinner-primary-background": "hsla(46,42%,88%,1)",
  "icon-spinner-warning-color": "hsla(46,42%,88%,1)",
  "icon-spinner-warning-background": "hsla(46,42%,88%,1)",
  "icon-failed-color": "hsla(1,71%,52%,1)",
  "icon-success-color": "hsla(68,100%,35%,1)",
  "shadow-focus-color": "hsla(45,100%,50%,1)",
  "shadow-drag-color": "hsla(194,14%,48%,1)",
};
