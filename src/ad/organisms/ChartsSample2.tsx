import { Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { PiecewiseColorLegend, ContinuousColorLegend } from "@mui/x-charts/ChartsLegend/";
import { green, blue, red } from "@mui/material/colors";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = Array.from({ length: 20 }).map((_, i) => {
  return {
    year: i + 1990,
    value: faker.number.int({ min: -1000, max: 1000 }),
  };
});

/** 棒グラフでこんなことが出来る */
export const ChartsSample2 = () => {
  return (
    <>
      <Typography variant="body1" gutterBottom>
        x軸の「colorMap」が「piecewise」の場合の凡例
      </Typography>
      <BarChart
        dataset={data} // データ
        xAxis={[
          {
            scaleType: "band",
            dataKey: "year",
            // 1️⃣ colorMapを「"piecewise"」に設定して・・・
            colorMap: {
              type: "piecewise",
              thresholds: [1995, 2000, 2005],
              colors: [green[100], green[500], green[900]],
            },
          },
        ]}
        series={[{ dataKey: "value", label: "系列名" }]}
        slotProps={{ legend: { hidden: true } }}
        width={450}
        height={300}
        grid={{ vertical: true, horizontal: true }}
      >
        {/* 2️⃣この凡例コンポーネントを使う */}
        <PiecewiseColorLegend
          axisDirection="x"
          position={{ vertical: "top", horizontal: "right" }}
          direction="row"
        />
      </BarChart>

      <Typography variant="body1" gutterBottom>
        x軸の「colorMap」が「continuous」の場合の凡例
      </Typography>
      <BarChart
        dataset={data} // データ
        xAxis={[
          {
            scaleType: "band",
            dataKey: "year",
            // 1️⃣ colorMapを「"continuous"」に設定して・・・
            colorMap: {
              type: "continuous",
              min: 1990,
              max: 2010,
              // color: [blue[100], red[900]],
              color: (t) => {
                // こんなことも出来るみたい
                if (0 <= t && t < 0.2) return blue[900];
                if (0.2 <= t && t < 0.4) return blue[400];
                if (0.4 <= t && t < 0.6) return green[200];
                if (0.6 <= t && t < 0.8) return green[600];
                if (0.8 <= t && t <= 1) return red[800];
                return red[900];
              },
            },
          },
        ]}
        series={[{ dataKey: "value", label: "系列名" }]}
        slotProps={{ legend: { hidden: true } }}
        width={450}
        height={300}
        grid={{ vertical: true, horizontal: true }}
      >
        <ContinuousColorLegend
          axisDirection="x"
          position={{ vertical: "top", horizontal: "middle" }}
          direction="row"
          length="50%"
          thickness={5}
          align="middle"
        />
      </BarChart>
      <FilenamePanel fileName="ChartsSample2.tsx" />
    </>
  );
};
