import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { SpeedDialSample1 } from "../organisms/SpeedDialSample1";
import { SpeedDialSample2 } from "../organisms/SpeedDialSample2";
import { StdTab } from "../atoms/StdTab";

export const MuiSpeedDial = () => {
  const message = ["スピードダイヤルのコンポーネント"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="SpeedDial"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-speed-dial/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <SpeedDialSample1 /> },
          { label: "こんなこともできる", content: <SpeedDialSample2 /> },
        ]}
      />
    </>
  );
};
