import { StdTab } from "../atoms/StdTab";
import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { ChartsSample1 } from "../organisms/ChartsSample1";
import { ChartsSample2 } from "../organisms/ChartsSample2";
import { ChartsSample3 } from "../organisms/ChartsSample3";
import { ChartsSample4 } from "../organisms/ChartsSample4";
import { ChartsSample5 } from "../organisms/ChartsSample5";
import { ChartsSample6 } from "../organisms/ChartsSample6";
import { ChartsSample7 } from "../organisms/ChartsSample7";
import { ChartsSample8 } from "../organisms/ChartsSample8";

const barChart = [
  { label: "基本", content: <ChartsSample1 /> },
  { label: "こんなことも", content: <ChartsSample2 /> },
];

const lineChart = [
  { label: "基本", content: <ChartsSample3 /> },
  { label: "こんなことも", content: <ChartsSample4 /> },
];

const pieChart = [
  { label: "基本", content: <ChartsSample5 /> },
  { label: "こんなことも", content: <ChartsSample6 /> },
];

const otherChart = [
  { label: "簡単な線グラフ", content: <ChartsSample7 /> },
  { label: "ゲージ", content: <ChartsSample8 /> },
];

export const MuiCharts = () => {
  const message = ["チャートのコンポーネント"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Charts"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/x/react-charts/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          {
            label: "棒グラフ",
            content: <GridTemplate1 size={6} components={barChart} height={680} />,
          },
          {
            label: "線グラフ",
            content: <GridTemplate1 size={6} components={lineChart} height={600} />,
          },
          {
            label: "円グラフ",
            content: <GridTemplate1 size={6} components={pieChart} height={600} />,
          },
          {
            label: "その他",
            content: <GridTemplate1 size={6} components={otherChart} height={600} />,
          },
        ]}
      />
    </>
  );
};
