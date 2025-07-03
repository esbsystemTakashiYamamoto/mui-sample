import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { GridTemplate1 } from "../template/GridTemplate1";
import { TooltipSample1 } from "../organisms/TooltipSample1";
import { TooltipSample2 } from "../organisms/TooltipSample2";
import { TooltipSample3 } from "../organisms/TooltipSample3";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本", content: <TooltipSample1 /> },
  { label: "表示のタイミングを変える", content: <TooltipSample2 /> },
  { label: "表示内容のカスタム", content: <TooltipSample3 /> },
];

export const MuiTooltip = () => {
  const message = ["マウスオーバーで表示される簡単な説明", "機能の説明に使える"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Tooltip"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-tooltip/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} height={350} /> },
        ]}
      />
    </>
  );
};
