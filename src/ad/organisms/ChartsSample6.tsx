import { PieChart } from "@mui/x-charts/PieChart";
import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data1 = Array.from({ length: 3 }).map((_, i) => {
  return {
    id: i + 1,
    value: faker.number.int({ min: 10, max: 50 }),
    label: `系列 ${i + 1}`,
  };
});

const data2 = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i + 1,
    value: faker.number.int({ min: 100, max: 500 }),
    label: `系列 ${i + 1}`,
  };
});

const data3 = Array.from({ length: 5 }).map((_, i) => {
  return {
    id: i + 1,
    value: faker.number.int({ min: 10000, max: 500000 }),
    label: `系列 ${i + 1}`,
  };
});

/** 円グラフでこんなことが出来る */
export const ChartsSample6 = () => {
  return (
    <>
      <PieChart
        series={[
          { data: data1, innerRadius: 10, outerRadius: 40 },
          { data: data2, innerRadius: 50, outerRadius: 80 },
          { data: data3, innerRadius: 90, outerRadius: 120 },
        ]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        width={350}
        height={300}
      />
      <FilenamePanel fileName="ChartsSample6.tsx" />
    </>
  );
};
