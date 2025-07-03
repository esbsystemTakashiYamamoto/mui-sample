import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { SxPropsSample1 } from "../organisms/SxPropsSample1";
import { SxPropsSample2 } from "../organisms/SxPropsSample2";
import { SxPropsSample3 } from "../organisms/SxPropsSample3";
import { SxPropsSample4 } from "../organisms/SxPropsSample4";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本", content: <SxPropsSample1 /> },
  { label: "こんなことも", content: <SxPropsSample2 /> },
  { label: "アニメーション", content: <SxPropsSample3 /> },
  { label: "アニメーション2", content: <SxPropsSample4 /> },
];

export const MuiSxProps = () => {
  const message = ["SxPropsの使い方", "mui全体的にこれで捌く"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="SxProps"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/system/getting-started/the-sx-prop/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} height={300} /> },
        ]}
      />
    </>
  );
};
