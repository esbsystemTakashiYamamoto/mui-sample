import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { GridTemplate1 } from "../template/GridTemplate1";
import { SelectSample1 } from "../organisms/SelectSample1";
import { SelectSample2 } from "../organisms/SelectSample2";
import { SelectSample3 } from "../organisms/SelectSample3";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本1", content: <SelectSample1 /> },
  { label: "基本2", content: <SelectSample2 /> },
];

export const MuiSelect = () => {
  const message = ["選択のコンボボックス"];
  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Select"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-select/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <GridTemplate1 components={basic1} /> },
          { label: "複数選択", content: <SelectSample3 /> },
        ]}
      />
    </>
  );
};
