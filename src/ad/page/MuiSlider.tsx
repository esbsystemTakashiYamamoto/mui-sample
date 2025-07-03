import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { GridTemplate1 } from "../template/GridTemplate1";
import { SliderSample1 } from "../organisms/SliderSample1";
import { SliderSample2 } from "../organisms/SliderSample2";
import { SliderSample3 } from "../organisms/SliderSample3";
import { SliderSample4 } from "../organisms/SliderSample4";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本1", content: <SliderSample1 /> },
  { label: "カスタマイズ", content: <SliderSample2 /> },
  { label: "範囲の指定", content: <SliderSample3 /> },
  { label: "有効範囲の反転", content: <SliderSample4 /> },
];
export const MuiSlider = () => {
  const message = [
    "スライダーのコンポーネント",
    "直感的に数値を入力したり、範囲を指定するのに便利",
  ];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Slider"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-slider/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本1", content: <GridTemplate1 components={basic1} height={300} /> },
        ]}
      />
    </>
  );
};
