import { StdTab } from "../atoms/StdTab";
import { PageHeader } from "../molecules/PageHeader";
import { BackdropAndSnackbarSample1 } from "../organisms/BackdropAndSnackbarSample1";
import { Template1 } from "../template/Template1";

export const MuiBackdropAndSnackbar = () => {
  return (
    <>
      <Template1
        header={
          <PageHeader
            label="BackdropAndSnackbar"
            message={[
              "よく使う通知系をまとめたコンポーネント",
              "BackdropとSnackbarで構成されている",
            ]}
          />
        }
      />
      <StdTab
        tabWidth={200}
        tabPanels={[{ label: "基本", content: <BackdropAndSnackbarSample1 /> }]}
      />
    </>
  );
};
