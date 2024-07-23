import { PrimariaApi, PrimariaMenuItem, shellRegions } from "@uxland/primary-shell";
import { MyElement } from "./my-element";

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  api.regionManager.registerMainView({
    id: "plugin-main-view",
    factory: () =>  Promise.resolve(new MyElement()) ,
  }, "Lit plugin");
  
  api.regionManager.registerQuickAction({
    id: "plugin-quick-action",
    factory: () => Promise.resolve(new PrimariaMenuItem("add_circle_outline", "Lit plugin", () => {
      api.regionManager.activateMainView("plugin-main-view")
    })),
  });
  return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  api.regionManager.removeView(shellRegions.main, "plugin-main-view");
  return Promise.resolve();
}