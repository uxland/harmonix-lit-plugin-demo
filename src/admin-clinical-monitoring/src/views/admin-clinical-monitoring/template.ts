import { html } from "lit";
import { AdminClinicalMonitoring } from "./admin-clinical-monitoring";

export const template = (props: AdminClinicalMonitoring) => html`
    <div class="wrapper">
      <div class="content">
        <div id="header-widgets-region"></div>
        <div id="content-widgets-region"></div>
      </div>
      <div id="widgets-sidebar-region"></div>
    </div>
`;
