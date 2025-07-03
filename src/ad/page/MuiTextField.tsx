import { Template1 } from "../template/Template1";
import { PageHeader } from "../molecules/PageHeader";
import { GridTemplate1 } from "../template/GridTemplate1";
import { TextFieldSample1 } from "../organisms/TextFieldSample1";
import { TextFieldSample2 } from "../organisms/TextFieldSample2";
import { StdTab } from "../atoms/StdTab";

const basic1 = [
  { label: "基本1", content: <TextFieldSample1 /> },
  { label: "基本2", content: <TextFieldSample2 /> },
];

export const MuiTextField = () => {
  const message = [
    "文字入力のテキストボックス そのまま使ってきれいにかっこよくなる👍",
    "他のコンポーネントで合せ技で使ったりする",
    "react-hook-formとかで使ったりする",
  ];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="TextField"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/react-text-field/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本1", content: <GridTemplate1 height="400px" components={basic1} /> },
        ]}
      />
    </>
  );
};
