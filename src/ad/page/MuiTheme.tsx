import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { ThemeSample1 } from "../organisms/ThemeSample1";
import { StdTab } from "../atoms/StdTab";

export const MuiTheme = () => {
  const message = ["テーマのコンポーネント"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Theme"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/customization/theming/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          {
            label: "基本",
            content: <ThemeSample1 />,
          },
        ]}
      />
    </>
  );
};
