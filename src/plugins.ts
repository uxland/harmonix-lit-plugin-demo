import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const importer: () => Promise<Plugin> = () => import("./plugin") as any;
const clinicalMonitoringImporter: () => Promise<Plugin> = () => import("./clinical-monitoring/src/plugin") as any;


export const plugins: PluginDefinition[] = [
  { pluginId: "lit-plugin", importer: importer },
  { pluginId: "clinical-monitoring", importer: clinicalMonitoringImporter }
];