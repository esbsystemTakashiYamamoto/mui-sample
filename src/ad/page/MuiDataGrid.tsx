import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { DataGridSample1 } from "../organisms/DataGridSample1";
import { DataGridSample2 } from "../organisms/DataGridSample2";
import { DataGridSample3 } from "../organisms/DataGridSample3";
import { DataGridSample4 } from "../organisms/DataGridSample4";
import { DataGridSample5 } from "../organisms/DataGridSample5";
import { StdTab } from "../atoms/StdTab";

export const MuiDataGrid = () => {
  const message = ["DataGridコンポーネント", "とっても賢いけど機能がいっぱい・・・・"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="DataGrid"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/x/react-data-grid/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          {
            label: "基本",
            content: <DataGridSample1 />,
          },
          {
            label: "複数選択",
            content: <DataGridSample2 />,
          },
          {
            label: "列定義のいろいろ",
            content: <DataGridSample3 />,
          },
          {
            label: "行定義のいろいろ",
            content: <DataGridSample4 />,
          },
          {
            label: "スタイリングの例",
            content: <DataGridSample5 />,
          },
        ]}
      />
    </>
  );
};
