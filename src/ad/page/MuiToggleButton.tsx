import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { ToggleButtonSample1 } from "../organisms/ToggleButtonSample1";
import { ToggleButtonSample2 } from "../organisms/ToggleButtonSample2";
import { ToggleButtonSample3 } from "../organisms/ToggleButtonSample3";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本1", content: <ToggleButtonSample1 /> },
  { label: "基本2", content: <ToggleButtonSample2 /> },
  { label: "複数選択", content: <ToggleButtonSample3 /> },
];

export const MuiToggleButton = () => {
  const message = [
    "トグルボタンのコンポーネント",
    "スイッチのように、複数のオプションを選択できる",
  ];
  return (
    <>
      <Template1
        header={
          <PageHeader
            label="ToggleButton"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-toggle-button/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} height={400} /> },
        ]}
      />
    </>
  );
};
