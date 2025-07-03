import { StdTab } from "../atoms/StdTab";
import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { GridTemplate1 } from "../template/GridTemplate1";
import { CustomizeSample1 } from "../organisms/CustomizeSample1";
import { CustomizeSample2 } from "../organisms/CustomizeSample2";
import { CustomizeSample3 } from "../organisms/CustomizeSample3";
import { CustomizeSample4 } from "../organisms/CustomizeSample4";
import { CustomizeSample5 } from "../organisms/CustomizeSample5";
import { CustomizeSample6 } from "../organisms/CustomizeSample6";

const basic1 = [
  { label: "SxPropsで直書き", content: <CustomizeSample1 /> },
  { label: "スタイルの上書き", content: <CustomizeSample2 /> },
  { label: "スタイルの上書き2", content: <CustomizeSample3 /> },
];

const basic2 = [
  { label: "やり方1", content: <CustomizeSample4 /> },
  { label: "❓やり方2❓", content: <CustomizeSample5 /> },
  { label: "やり方3", content: <CustomizeSample6 /> },
];

export const MuiCustomize = () => {
  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Customize"
            message={["コンポーネントのカスタマイズ方法", "慣れないと訳分からない"]}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/customization/how-to-customize/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          {
            label: "一回使い切り",
            content: <GridTemplate1 components={basic1} height={500} />,
          },
          {
            label: "再利用のやり方",
            content: <GridTemplate1 components={basic2} height={450} />,
          },
        ]}
      />
    </>
  );
};
