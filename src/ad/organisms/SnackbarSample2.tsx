import { useState, SyntheticEvent } from "react";
import { Button, Snackbar, Typography, Alert } from "@mui/material";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SnackbarSample2 = () => {
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
        setMsg("Alertの✕ボタンを押した");
        setOpen(false);
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // 表示する位置の指定
      >
        <Alert onClose={doClose} severity="success" variant="filled">
          ここにメッセージが表示されます
        </Alert>
      </Snackbar>
      <Typography variant="h6" color="initial" sx={{ mt: 2 }}>
        Snackbarを閉じる理由
        <br />・{msg}
      </Typography>
      <FilenamePanel fileName="SnackbarSample2.tsx" />
    </>
  );
};
