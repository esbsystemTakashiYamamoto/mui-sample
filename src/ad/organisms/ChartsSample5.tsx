import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";
import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = Array.from({ length: 3 }).map((_, i) => {
  return {
    id: i + 1,
    value: faker.number.int({ min: 10, max: 50 }),
    label: `系列 ${i + 1}`,
  };
});

/** 円グラフの基本 */
export const ChartsSample5 = () => {
  return (
    <>
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 50, // 中の円の大きさ
            outerRadius: 120, // 外の円の大きさ
            paddingAngle: 2, // 弧の切れ目の幅
            cornerRadius: 5, // 弧の角の丸み
            // startAngle: 90, // 開始の角度
            // endAngle: -90, // 終了の角度
            // cx: 150, // 中心座標
            // cy: 150, // 中心座標

            arcLabel: (p) => `${p.value}mm`,
            // arcLabelMinAngle: 50, // ラベルが表示される最小角度？？
            // arcLabelRadius: "70%", // ラベルを表示する円周

            highlightScope: { fade: "global", highlight: "item" },
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
            fill: (p) => p.palette.grey[100], // 文字の色を変える
            fontSize: "1.2rem",
          },
        }}
        width={350}
        height={300}
      />
      <FilenamePanel fileName="ChartsSample5.tsx" />
    </>
  );
};
