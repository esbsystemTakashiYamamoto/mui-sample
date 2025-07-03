import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { SnackbarSample1 } from "../organisms/SnackbarSample1";
import { SnackbarSample2 } from "../organisms/SnackbarSample2";
import { SnackbarSample3 } from "../organisms/SnackbarSample3";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本", content: <SnackbarSample1 /> },
  { label: "Alertでそれっぽく", content: <SnackbarSample2 /> },
];

export const MuiSnackbar = () => {
  const message = ["通知に使えるコンポーネント"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Snackbar"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-snackbar/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} /> },
          { label: "StdSnackBar", content: <SnackbarSample3 /> },
        ]}
      />
    </>
  );
};
