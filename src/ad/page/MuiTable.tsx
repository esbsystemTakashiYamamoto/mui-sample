import { Template1 } from "../template/Template1";
import { PageHeader } from "../molecules/PageHeader";
import { TableSample1 } from "../organisms/TableSample1";
import { TableSample2 } from "../organisms/TableSample2";
import { TableSample3 } from "../organisms/TableSample3";
import { TableSample4 } from "../organisms/TableSample4";
import { StdTab } from "../atoms/StdTab";

/**
 * material-uiのテーブルのサンプル
 * @returns
 */
export const MuiTable = () => {
  const message = [
    "material-uiのテーブルのサンプルで、簡単な情報ならDataGridより楽👍",
    "データ数はせいぜい1,000件までで、それ以上は仮想化する",
  ];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Table"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-table/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本1", content: <TableSample1 /> },
          { label: "仮想テーブルの基本", content: <TableSample2 /> },
          { label: "仮想テーブルの応用1", content: <TableSample3 /> },
          { label: "スタイリング", content: <TableSample4 /> },
        ]}
      />
    </>
  );
};
