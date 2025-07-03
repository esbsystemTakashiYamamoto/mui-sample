import { AlertProps, Backdrop, CircularProgress } from "@mui/material";

import { StdSnackBar } from "../atoms/StdSnackBar";

type Props = {
  /** Backdropを開く */
  isLoading?: boolean;
  /** SnackBarを閉じる */
  doClose?: (open: boolean) => void;
  /** SnackBarの状態 */
  open?: boolean;
  /** SnackBarのメッセージ */
  message?: string;
  /** SnackBarの色 */
  severity?: AlertProps["severity"];
};

/** 通知系 */
export const BackdropAndSnackBar = ({
  isLoading = false,
  open = false,
  message = "",
  severity = "success",
  doClose = () => {},
}: Props) => {
  return (
    <>
      {/* 通知系 */}
      <Backdrop open={isLoading} sx={{ zIndex: (p) => p.zIndex.drawer + 1, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <StdSnackBar
        open={open}
        doClose={() => doClose(false)}
        message={message}
        severity={severity}
      />
    </>
  );
};
