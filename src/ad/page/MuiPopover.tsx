import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { PopoverSample1 } from "../organisms/PopoverSample1";
import { PopoverSample2 } from "../organisms/PopoverSample2";
import { PopoverSample3 } from "../organisms/PopoverSample3";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本1", content: <PopoverSample1 /> },

  { label: "マウスオーバー", content: <PopoverSample2 /> },
];

export const MuiPopover = () => {
  const message = [
    "パポップオーバブのコンポーネント",
    "マウスオーバーで機能を説明したり出来る",
  ];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Popover"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-popover/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} height={400} /> },
          { label: "応用", content: <PopoverSample3 /> },
        ]}
      />
    </>
  );
};
