import { faker } from "@faker-js/faker/locale/ja";
import { Stack } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = Array.from({ length: 30 }).map((_) => {
  return faker.number.int({ min: 10, max: 50 });
});

/** 簡単な線グラフ */
export const ChartsSample7 = () => {
  return (
    <>
      <Stack>
        <SparkLineChart data={data} height={50} showTooltip />
        <SparkLineChart data={data} height={50} showTooltip colors={["red"]} />
        <SparkLineChart data={data} height={50} area />
        <SparkLineChart data={data} height={50} area curve="natural" />
        <SparkLineChart data={data} height={50} plotType="bar" />
      </Stack>
      <FilenamePanel fileName="ChartsSample7.tsx" />
    </>
  );
};
