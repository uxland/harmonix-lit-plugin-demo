import type { IActivityHistoryItem } from "@uxland/primary-shell";
import { ActivityHistoryItem } from "./activity-history-item";

export const activityHistoryItemFactory = (props: { item: IActivityHistoryItem }) => {
  const element = new ActivityHistoryItem();
  element.item = props.item;
  return Promise.resolve(element);
};
