import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { IActivityHistoryItem } from "@uxland/primary-shell";

@customElement("activity-history-item")
export class ActivityHistoryItem extends LitElement {
  @property({ attribute: false }) item!: IActivityHistoryItem;

  render() {
    const item = this.item;
    if (!item) return html``;
    return html`<div>
      ${item.date} | ${item.id} | ${item.professional?.name} |
      ${item.professional?.speciality?.description} | ${item.center?.description}
    </div>`;
  }

  static styles = css`
    :host {
      padding: 10px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "activity-history-item": ActivityHistoryItem;
  }
}
