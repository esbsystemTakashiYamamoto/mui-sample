import { BarChart } from "@mui/x-charts/BarChart";
import { green } from "@mui/material/colors";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const getLabel = (label: "tooltip" | "legend") => {
  if (label === "tooltip") return "ツールチップだよ";
  if (label === "legend") return "系列だよ";
  return "なんだこれ？？";
};

const getFormattedValue = (value: number | null) => {
  return `${(value || 0).toLocaleString()} mm`;
};

const data = Array.from({ length: 12 }).map((_, i) => {
  return {
    month: i + 1,
    shizuoka: faker.number.int({ min: 1000, max: 5000 }),
    okinawa: faker.number.int({ min: 1000, max: 5000 }),
    hokkaido: faker.number.int({ min: 1000, max: 5000 }),
    tokyo: faker.number.int({ min: 1000, max: 5000 }),
  };
});

/** 棒グラフの基本 */
export const ChartsSample1 = () => {
  return (
    <>
      <BarChart
        xAxis={[{ scaleType: "band", data: ["Group A", "Group B", "Group C"] }]}
        series={[
          { data: [4000, 300, 5000], label: "Series 1", type: "bar" },
          { data: [50, 6000, 3000], label: "Series 2", type: "bar" },
          { data: [2000, 5000, 600], label: (p) => getLabel(p) }, // どゆこと？？
        ]}
        width={450}
        height={250}
      />

      <BarChart
        dataset={data} // データ
        xAxis={[
          {
            colorMap: {
              // バーの色の付け方 piecewise
              type: "piecewise",
              thresholds: [4, 8, 10], // 指定した値を超えたら色を変える
              colors: [green[900], green[200], green[500]], // 色を指定する

              // バーの色の付け方 continuous
              // type: "continuous",
              // min: 1, // 横軸の最小値
              // max: 12, // 横軸の最大値
              // color: [green[900], green[300]], // １番目の色から、２番目の色に徐々に変化する

              // バーの色の付け方 ordinal
              // type: "ordinal",
              // colors: [green[900], green[100], green[500]], // この配色で繰り返す
            },
            scaleType: "band", // 棒グラフの場合はこれになる
            dataKey: "month", // x軸(横軸)に割り当てるキー
            label: "月", // x軸(横軸)のラベル
            // barGapRatio: 0.2, // NOTE: バーのの間隔 エラーになる・・・
            // categoryGapRatio: 0.1, // NOTE: バーの太さ エラーになる・・・
            valueFormatter: (month, ctx) => {
              // console.log(ctx); // 表示されている場所
              // console.log(month); // x軸の値
              return `${month}月`; // x軸のラベルを修正出来る
            },
          },
        ]}
        series={[
          {
            dataKey: "shizuoka", // y軸(縦軸)に割り当てるキー
            label: "静岡", // y軸(縦軸)のラベル
            valueFormatter: getFormattedValue, // y軸の値
            stack: "stack1", // 同じ名前で積み上げグラフになる
          },
          {
            dataKey: "okinawa",
            label: "沖縄",
            valueFormatter: getFormattedValue,
            stack: "stack1", // 同じ名前で積み上げグラフになる
          },
          {
            dataKey: "hokkaido",
            label: "北海道",
            valueFormatter: getFormattedValue,
          },
          { dataKey: "tokyo", label: "東京", valueFormatter: getFormattedValue },
        ]}
        grid={{ horizontal: true, vertical: true }} // グリッドを表示
        barLabel={(item, ctx) => {
          // console.log(item); // バーの値の情報
          // console.log(ctx); // バーのレンダリグの情報 高さとか、幅とか
          return item?.value?.toLocaleString();
        }}
        slotProps={{
          legend: {
            labelStyle: {
              fill: green[500],
            },
            // hidden: true,
          },
        }}
        width={500}
        height={300}
      />
      <FilenamePanel fileName="ChartsSample1.tsx" />
    </>
  );
};
