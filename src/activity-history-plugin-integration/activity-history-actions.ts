import type { IActivityHistoryItem, PrimariaApi } from "@uxland/primary-shell";
import { activityHistoryItemFactory } from "./activity-history-item/factory";
import { mockActivityHistoryItem } from "./activity-history-item/mocks";

export const asyncTask = (item: IActivityHistoryItem) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve([item]), 2000);
	});
};

export const executeInjectHistoryItemsTask = (api: PrimariaApi) => {
	const payload = {
		entityId: api.pluginInfo.pluginId,
		asyncDataProvider: () => asyncTask(mockActivityHistoryItem),
		componentFactory: (props: { item: IActivityHistoryItem }) =>
			activityHistoryItemFactory({ item: props.item }),
		errorMessage: "Error plugin demo",
		searchPredicate: (searchString: string, item: any) =>
			item.title.toLowerCase().includes(searchString.toLowerCase())
	};
	api.broker.send(
		api.broker.events.activityHistory.injectAsyncHistoryItemsRequest,
		payload,
	);
};

export const addItem = (api: PrimariaApi) => {
	const newItem = { ...mockActivityHistoryItem, id: Math.random().toString() };
	return api.broker.send(api.broker.events.activityHistory.addHistoryItemRequest, {
		entityId: api.pluginInfo.pluginId,
		item: newItem,
	});
};

export const updateItem = (api: PrimariaApi) => {
	const newItem = {
		...mockActivityHistoryItem,
		date: "2025-05-18T09:20:09.903Z",
	};
	return api.broker.send(api.broker.events.activityHistory.updateHistoryItemRequest, {
		entityId: api.pluginInfo.pluginId,
		item: newItem,
	});
};

export const deleteItem = (api: PrimariaApi) => {
	return api.broker.send(api.broker.events.activityHistory.removeHistoryItemRequest, {
		entityId: api.pluginInfo.pluginId,
		itemId: mockActivityHistoryItem.id,
	});
};
