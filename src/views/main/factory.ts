import type { PrimariaApi } from "@uxland/primary-shell";
import { MainView } from "./main-view";

export const mainFactory = (props: { api: PrimariaApi }) => {
  const element = new MainView();
  element.api = props.api;
  return Promise.resolve(element);
};
