import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { TransitionsSample1 } from "../organisms/TransitionsSample1";
import { TransitionsSample2 } from "../organisms/TransitionsSample2";
import { TransitionsSample3 } from "../organisms/TransitionsSample3";
import { StdTab } from "../atoms/StdTab";

export const MuiTransitions = () => {
  const message = ["アニメーションのコンポーネント"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Transitions"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/material-ui/transitions/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          { label: "基本", content: <TransitionsSample1 /> },
          { label: "よく使うやり方", content: <TransitionsSample2 /> },
          { label: "StdFadeUpdateEffect", content: <TransitionsSample3 /> },
        ]}
      />
    </>
  );
};
