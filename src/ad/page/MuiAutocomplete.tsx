import { Template1 } from "../template/Template1";
import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { AutocompleteSample1 } from "../organisms/AutocompleteSample1";
import { AutocompleteSample2 } from "../organisms/AutocompleteSample2";
import { AutocompleteSample3 } from "../organisms/AutocompleteSample3";
import { AutocompleteSample4 } from "../organisms/AutocompleteSample4";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本1", content: <AutocompleteSample1 /> },
  { label: "グループ化", content: <AutocompleteSample2 /> },
  { label: "その他", content: <AutocompleteSample3 /> },
];

export const MuiAutocomplete = () => {
  const message = [
    "便利なコンボボックス風の入力コンポーネント グループ化とかいろいろ出来る👍",
    "データ数はせいぜい5,000件までで、それ以上は仮想化する",
  ];
  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Autocomplete"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-autocomplete/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} /> },
          { label: "仮想化", content: <AutocompleteSample4 /> },
        ]}
      />
    </>
  );
};
