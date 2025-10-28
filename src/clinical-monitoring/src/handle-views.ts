import { PrimariaApi, PrimariaNavItem } from "@uxland/primary-shell";
import { customElement } from "lit/decorators.js";
import { ClinicalMonitoring } from "./views/clinical-monitoring/clinical-monitoring";

export const registerViews = async (api: PrimariaApi) => {
  customElement("clinical-monitoring")(ClinicalMonitoring);
  api.regionManager.registerMainView({
    id: api.pluginInfo.pluginId,
    factory: () => {
      const mainItem = new ClinicalMonitoring();
      return Promise.resolve(mainItem as unknown as HTMLElement);
    },
    isDefault: true,
  });
  api.regionManager.registerView(api.regionManager.regions.shell.navigationMenu, {
    id: api.pluginInfo.pluginId,
    factory: () => {
      const menuItem = new PrimariaNavItem({
        icon: "account_box",
        label: "Seguiment clínic",
        callbackFn: () => {
          api.regionManager.activateMainView(api.pluginInfo.pluginId);
        },
      });
      return Promise.resolve(menuItem);
    },
    sortHint: "0020",
  });

  setTimeout(() => {
    activateClinicalMonitoringView(api);
  }, 300);
};

export const unregisterViews = (api: PrimariaApi) => {
  api.regionManager.removeView(api.regionManager.regions.shell.main, api.pluginInfo.pluginId);
  api.regionManager.removeView(api.regionManager.regions.shell.navigationMenu, api.pluginInfo.pluginId);
};

export const activateClinicalMonitoringView = (api: PrimariaApi) => {
  api.regionManager.activateMainView(api.pluginInfo.pluginId);
};
