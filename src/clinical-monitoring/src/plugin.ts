import { PrimariaApi } from "@uxland/primary-shell";
import { registerViews, unregisterViews } from "./handle-views";

export const initialize = async (api: PrimariaApi) => {
  registerViews(api);
  return Promise.resolve();
};

export const dispose = (api: PrimariaApi) => {
  unregisterViews(api);
  return Promise.resolve();
};
