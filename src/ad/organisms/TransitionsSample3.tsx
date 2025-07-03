import { useState, memo } from "react";
import { Typography, Button } from "@mui/material";

import { StdFadeUpdateEffect } from "../atoms/StdTransitions";
import { FilenamePanel } from "../atoms/FilenamePanel";

// @ts-expect-error: 取り敢えず
const Message = memo<{ message: JSX.Element | string }>((p) => {
  return (
    <Typography variant="body1" color="initial">
      {p.message}
    </Typography>
  );
});

export const TransitionsSample3 = () => {
  const [message, setMessage] = useState<JSX.Element | string>();

  const doClick = () => {
    // setMessage(<>文字列</>);
    // setMessage("aaaa");

    setMessage(
      <Typography variant="h5" color="primary">
        更新 : {new Date().toLocaleString()}
      </Typography>
    );
  };

  return (
    <>
      <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
        更新時のエフェクトを「StdFadeUpdateEffect」に切り出した
        <br />
        stringかJSX.Elementを入れる
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => doClick()}
        sx={{ mb: 2 }}
      >
        値の更新
      </Button>

      <StdFadeUpdateEffect content={message} timeout={1000} />
      <FilenamePanel fileName="TransitionsSample3.tsx" />
    </>
  );
};
