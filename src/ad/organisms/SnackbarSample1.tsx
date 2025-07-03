import { useState, SyntheticEvent } from "react";
import { Button, Snackbar, Typography } from "@mui/material";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SnackbarSample1 = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const doOpen = () => setOpen(true);

  // Snackbarを閉じる条件
  const doClose = (_: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    switch (reason) {
      case "timeout":
        setMsg("タイムアウト");
        setOpen(false);

        break;
      case "clickaway":
        setMsg("他の領域をクリックした");
        setOpen(false);

        break;
      case "escapeKeyDown":
        setMsg("エスケープキーを押下した");
        setOpen(false);
        break;
      default:
        console.log("それ以外？？");
        break;
    }
  };
  return (
    <>
      <Button variant="contained" onClick={doOpen} sx={{ textTransform: "none" }}>
        SnackBarを開く
      </Button>
      <Snackbar
        open={open}
        onClose={doClose}
        autoHideDuration={3000} // 表示時間(ms)
        message="３秒後に自動的に閉じる" // 表示するメッセージ
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // 表示する位置の指定
      />
      <Typography variant="h6" color="initial" sx={{ mt: 2 }}>
        Snackbarを閉じる理由
        <br />・{msg}
      </Typography>
      <FilenamePanel fileName="SnackbarSample1.tsx" />
    </>
  );
};
