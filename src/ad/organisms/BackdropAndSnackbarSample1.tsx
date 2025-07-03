import { useState } from "react";

import { Button, Typography } from "@mui/material";

import { BackdropAndSnackBar } from "../molecules/BackdropAndSnackBar";
import { FilenamePanel } from "../atoms/FilenamePanel";

import { useSnackbarValues } from "../../define//hooks/useStdSnackbarValues";

export const BackdropAndSnackbarSample1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, changeState, message, changeSnackbar } = useSnackbarValues(
    false,
    "未指定",
    "success"
  );

  const doLoading = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      changeSnackbar(true, "2秒経過", "success");
    }, 2000);
  };

  return (
    <>
      <Typography
        gutterBottom
        variant="body1"
        sx={{ mt: 2, color: (p) => p.palette.grey[700] }}
      >
        BackdropとSnackBarの通知系のMuiコンポーネントはセットで使うことが多いから、最初からまとめておく
      </Typography>

      <Button variant="contained" color="primary" onClick={() => doLoading()} sx={{ mb: 1 }}>
        開く
      </Button>
      <BackdropAndSnackBar
        isLoading={isLoading}
        open={state}
        message={message}
        doClose={changeState}
      />
      <FilenamePanel fileName="BackdropAndSnackbarSample1.tsx" />
    </>
  );
};
