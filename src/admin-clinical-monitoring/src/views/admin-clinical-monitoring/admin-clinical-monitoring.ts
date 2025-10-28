import { PrimariaRegionHost } from "@uxland/primary-shell";
import { IRegion, region } from "@uxland/regions";
import { LitElement, css, html, unsafeCSS } from "lit";
import styles from "./styles.css?inline";
import { template } from "./template";

export class AdminClinicalMonitoring extends PrimariaRegionHost(LitElement) {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  firstUpdated() {
    this._observeMaximizedState();
  }

  private _observeMaximizedState() {
    const contentRegion = this.renderRoot.querySelector("#content-widgets-region");
    if (!contentRegion) return;

    const observer = new MutationObserver(() => {
      const activity = contentRegion.querySelector("activity-history-main");
      if (!activity) return;

      const isMaximized = activity.hasAttribute("maximized") || activity.maximized;
      this._toggleWidgetsVisibility(!isMaximized);
    });

    observer.observe(contentRegion, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["maximized"],
    });
  }

  private _toggleWidgetsVisibility(show: boolean) {
    const sidebar = this.renderRoot.querySelector("#widgets-sidebar-region");
    const header = this.renderRoot.querySelector("#header-widgets-region");

    if (sidebar) sidebar.style.display = show ? "" : "none";
    if (header) header.style.display = show ? "" : "none";
  }

  @region({ targetId: "widgets-sidebar-region", name: "clinical-monitoring-widgets-sidebar-region" })
  sidebarRegion: IRegion | undefined;

  @region({ targetId: "header-widgets-region", name: "clinical-monitoring-header-widgets-region" })
  headerRegion: IRegion | undefined;

  @region({ targetId: "content-widgets-region", name: "clinical-monitoring-content-widgets-region" })
  contentRegion: IRegion | undefined;
}
