import {
  IgrDataChart,
  IgrCategoryYAxis,
  IgrNumericXAxis,
  IgrStackedBarSeries,
  IgrStackedFragmentSeries,
  IgrDataToolTipLayer,
} from 'igniteui-react-charts';

// サンプルデータです
// startDaysが開始日、durationが期間です
const sampleGanttData = [
  { taskName: "Task 1", startDays: 0, duration: 4 },
  { taskName: "Task 2", startDays: 4, duration: 3 },
  { taskName: "Task 3", startDays: 7, duration: 7 },
  { taskName: "Task 4", startDays: 14, duration: 3 },
];

// ツールチップに表示するフラグメントを指定します
const includedSeries = ["duration"];

export const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrDataChart
        height="300px" width="500px">
        <IgrCategoryYAxis
          name="yGanttAxis"
          dataSource={sampleGanttData}
          label="taskName"
          isInverted="true"
          gap="0.75">
        </IgrCategoryYAxis>
        <IgrNumericXAxis
          name="xGanttAxis"
          minimumValue="0"
          title="日後">
        </IgrNumericXAxis>
        <IgrStackedBarSeries
          name="StackedBarSeries"
          dataSource={sampleGanttData}
          xAxisName="xGanttAxis"
          yAxisName="yGanttAxis"
          showDefaultTooltip="false">

          {/*
          開始日までのフラグメントは透明色で見えないようにしておくことで、
          期間のフラグメントのみが描画されているように見せています
          */}
          <IgrStackedFragmentSeries
            name="startDays"
            valueMemberPath="startDays"
            title=""
            brush='transparent'
            outline='transparent'>
          </IgrStackedFragmentSeries>

          {/*
          期間のフラグメントを描画します
          */}
          <IgrStackedFragmentSeries
            name="duration"
            valueMemberPath="duration"
            title="duration">
          </IgrStackedFragmentSeries>
        </IgrStackedBarSeries>

        {/*
        DataToolTipLayerで期間のみツールチップに表示するようにします
        */}
        <IgrDataToolTipLayer
          name="dataToolTopLayer"
          includedSeries={includedSeries}>
        </IgrDataToolTipLayer>
      </IgrDataChart>
    </div>
  );
};
