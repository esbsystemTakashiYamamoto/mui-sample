import { LineChart } from "@mui/x-charts/LineChart";

import { faker } from "@faker-js/faker/locale/ja";
import { green, red } from "@mui/material/colors";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = Array.from({ length: 20 }).map((_, i) => {
  return {
    year: i + 1990,
    value: faker.number.int({ min: 0, max: 1000 }),
  };
});

/** 線グラフでこんな事が出来る */
export const ChartsSample4 = () => {
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
        yAxis={[
          {
            colorMap: {
              type: "piecewise",
              thresholds: [200, 800, 1000],
              colors: [green[100], green[700], red[900]],
            },
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
      <FilenamePanel fileName="ChartsSample4.tsx" />
    </>
  );
};
