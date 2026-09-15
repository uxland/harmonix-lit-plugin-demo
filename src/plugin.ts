import { PrimariaApi, PrimariaNavItem } from "@uxland/primary-shell";
import { mainFactory } from "./views/main/factory";
import { executeInjectHistoryItemsTask } from "./activity-history-plugin-integration/activity-history-actions";

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  executeInjectHistoryItemsTask(api);

  api.regionManager.registerMainView({
    id: "plugin-main-view",
    factory: () => mainFactory({ api }),
  });
  const navigationMenu = api.regionManager.regions.shell.navigationMenu
  api.regionManager.registerView(navigationMenu,{
    id: "plugin-sidebar",
    factory: () => {
      const menuItem = new PrimariaNavItem({
        icon: "add_box",
        label: "Lit plugin",
        callbackFn: () => {
          api.regionManager.activateMainView("plugin-main-view")
        },
      });
      return Promise.resolve(menuItem);
    },
  });
  return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  const main = api.regionManager.regions.shell.main;
  api.regionManager.removeView(main, "plugin-main-view");
  const navigationMenu = api.regionManager.regions.shell.navigationMenu;
  api.regionManager.removeView(navigationMenu, "plugin-sidebar");
  return Promise.resolve();
}
