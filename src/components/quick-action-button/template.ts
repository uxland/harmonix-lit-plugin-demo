import { html } from "lit";
import { QuickActionButton } from "./quick-action-button";


export const template = (props: QuickActionButton) => {
  return html`
    <dss-action-menu-item @click=${props.callbackFn} label=${props.label}></dss-action-menu-item>
  `;
};
