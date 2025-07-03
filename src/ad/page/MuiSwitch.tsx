import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { SwitchSample1 } from "../organisms/SwitchSample1";
import { StdTab } from "../atoms/StdTab";
import { SwitchSample2 } from "../organisms/SwitchSample2";

const basic1 = [{ label: "基本1", content: <SwitchSample1 /> }];

export const MuiSwitch = () => {
  const message = ["スイッチのコンポーネント"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Switch"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-switch/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} /> },
          { label: "StdSwitch", content: <SwitchSample2 /> },
        ]}
      />
    </>
  );
};
