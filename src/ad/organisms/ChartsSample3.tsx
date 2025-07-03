import { LineChart } from "@mui/x-charts/LineChart";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = Array.from({ length: 20 }).map((_, i) => {
  return {
    year: i + 1990,
    value: faker.number.int({ min: 0, max: 1000 }),
  };
});

const data1 = Array.from({ length: 20 }).map((_, i) => {
  return {
    year: i + 1990,
    value1: faker.number.int({ min: 0, max: 1000 }),
    value2: faker.number.int({ min: 0, max: 1000 }),
  };
});

/** 線グラフの基本 */
export const ChartsSample3 = () => {
  return (
    <>
      <LineChart
        dataset={data} // データ
        xAxis={[
          {
            scaleType: "band",
            dataKey: "year",
          },
        ]}
        series={[{ dataKey: "value", label: "系列名" }]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        grid={{ vertical: true, horizontal: true }}
        width={450}
        height={300}
      />
      <LineChart
        dataset={data1} // データ
        xAxis={[
          {
            scaleType: "band",
            dataKey: "year",
          },
        ]}
        series={[
          {
            dataKey: "value1", //
            label: "系列名1",
            showMark: false,
            area: true, // 領域を塗りつぶし
            stack: "total", // 積上グラフも出来る
          },
          {
            dataKey: "value2", //
            label: "系列名2",
            showMark: false, // プロットの点を非表示
            // area: true, // 領域を塗りつぶし
            stack: "total", // 積上グラフも出来る
            curve: "linear", // 線の形式
          },
        ]}
        slotProps={{
          legend: {
            // hidden: true,
          },
        }}
        grid={{ vertical: true, horizontal: true }}
        width={450}
        height={300}
      />
      <FilenamePanel fileName="ChartsSample3.tsx" />
    </>
  );
};
