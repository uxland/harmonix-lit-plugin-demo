import { PrimariaApi, PrimariaNavItem, shellRegions } from "@uxland/primary-shell";
import { MyElement } from "./my-element";
import { QuickActionButton } from "./components/quick-action-button/quick-action-button";

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  api.regionManager.registerMainView({
    id: "plugin-main-view",
    factory: () =>  Promise.resolve(new MyElement()) ,
  },);
  
  api.regionManager.registerView(shellRegions.navigationMenu,{
    id: "plugin-sidebar",
    factory: () => {
      const menuItem = new PrimariaNavItem({
        icon: "add_box",
        label: "Plugin Sidebar",
        callbackFn: () => {
        },
      });
      return Promise.resolve(menuItem);
    },
  });
  api.regionManager.registerView(shellRegions.quickActions,{
    id: "plugin-quick-action",
    factory: () => Promise.resolve(new QuickActionButton("Lit plugin", () => {
      api.regionManager.activateMainView("plugin-main-view")
    })),
  });
  return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  api.regionManager.removeView(shellRegions.main, "plugin-main-view");
  api.regionManager.removeView(shellRegions.navigationMenu, "plugin-sidebar");
  api.regionManager.removeView(shellRegions.quickActions, "plugin-quick-action");
  return Promise.resolve();
}