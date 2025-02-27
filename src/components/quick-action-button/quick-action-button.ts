import { LitElement, html } from "lit";
import { template } from "./template";
import { customElement, property } from "lit/decorators.js";

@customElement("quick-action-button")
export class QuickActionButton extends LitElement {
  constructor(label: string, callbackFn: () => void) {
    super();
    this.label = label;
    this.callbackFn = callbackFn;
  }

  render() {
    return html`${template(this)}`;
  }

  @property({ type: String }) label = "";
  @property({ attribute: false }) callbackFn = () => {};
}
