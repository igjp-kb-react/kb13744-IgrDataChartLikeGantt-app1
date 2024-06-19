import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/app";

import {
  IgrDataChartCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartStackedModule,
  IgrStackedFragmentSeriesModule,
  IgrDataChartInteractivityModule,
  IgrDataToolTipLayerModule,
} from 'igniteui-react-charts';

const igrModules: any[] = [
  IgrDataChartCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartStackedModule,
  IgrStackedFragmentSeriesModule,
  IgrDataChartInteractivityModule,
  IgrDataToolTipLayerModule
];
igrModules.forEach((module) => module.register());


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
