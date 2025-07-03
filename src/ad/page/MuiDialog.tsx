import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { DialogSample1 } from "../organisms/DialogSample1";
import { DialogSample2 } from "../organisms/DialogSample2";
import { StdTab } from "../atoms/StdTab";

export const MuiDialog = () => {
  const message = ["いわゆるダイヤログ"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Dialog"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-dialog/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <DialogSample1 /> },
          { label: "StdDialog", content: <DialogSample2 /> },
        ]}
      />
    </>
  );
};
