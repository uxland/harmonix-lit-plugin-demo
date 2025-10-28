import { html } from "lit";
import { ClinicalMonitoring } from "./clinical-monitoring";

export const template = (props: ClinicalMonitoring) => html`
    <div class="wrapper">
      <div class="content">
        <div id="header-widgets-region"></div>
        <div id="content-widgets-region"></div>
      </div>
      <div id="widgets-sidebar-region"></div>
    </div>
`;
