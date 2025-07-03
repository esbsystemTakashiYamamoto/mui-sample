import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { Template1 } from "../template/Template1";
import { ListSample1 } from "../organisms/ListSample1";
import { ListSample2 } from "../organisms/ListSample2";
import { StdTab } from "../atoms/StdTab";

const basic1 = [{ label: "基本1", content: <ListSample1 /> }];

export const MuiList = () => {
  const message = [
    "リスト形式の選択コンポーネント",
    "Drawerと組み合わせてメニューで使ったりする",
  ];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="List"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-list/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} height={500} /> },
          { label: "仮想化", content: <ListSample2 /> },
        ]}
      />
    </>
  );
};
