import { Box, Button, Typography } from "@mui/material";

import { StdSnackBar } from "../atoms/StdSnackBar";
import { useSnackbarValues } from "../../define/hooks/useStdSnackbarValues";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SnackbarSample3 = () => {
  // 👇 StdSnackBar用のカスタムフック
  const {
    state: state,
    changeState,
    message,
    changeMessage,
  } = useSnackbarValues(false, "未指定");

  const doClick = () => {
    changeMessage("クリックした");
    changeState(true);
  };

  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h4">説明</Typography>
        <Typography variant="body1">
          SnackBarとAlertを一つにした「StdSnackBar.tsx」を「atoms」に置いて
          <br />
          Snackbarの表示・非表示と表示メッセージを制御する「useSnackbarValue.ts」をカスタムフックとして「define」に定義
          <br />
          これらを組み合わせスナックバーを使う
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={() => doClick()}
        sx={{ textTransform: "none", mb: 1 }}
      >
        SnackBarを開く
      </Button>
      <FilenamePanel fileName="SnackbarSample3.tsx" />
      <StdSnackBar
        open={state}
        doClose={() => changeState(false)}
        message={message}
        severity="success"
      />
    </>
  );
};
