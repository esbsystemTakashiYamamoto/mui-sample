import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  TextField,
  Box,
} from "@mui/material";

import { Check, Close } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const DialogSample1 = () => {
  const [open, setOpen] = useState(false);
  const doOpen = () => setOpen(true);
  const doClose = () => setOpen(false);
  return (
    <>
      <Button variant="contained" onClick={doOpen} sx={{ mb: 2 }}>
        ダイヤログを開く
      </Button>
      <FilenamePanel fileName="DialogSample1.tsx" />

      <Dialog
        open={open}
        onClose={doClose} // 💡 これを抜くと「doClose」以外で閉じなくなる
      >
        <DialogTitle
          typography={"h4"}
          fontFamily={"Sawarabi Mincho"}
          color="white"
          fontWeight="bold"
          sx={{ bgcolor: (p) => p.palette.primary.light, borderRadius: 5, m: 2 }}
        >
          ダイヤログのタイトル
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText
            typography={"body1"}
            sx={{ color: (p) => p.palette.grey[600], mb: 2 }}
          >
            ダイヤログの文字はここに書く
          </DialogContentText>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <TextField />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            variant="contained"
            onClick={doClose}
            startIcon={<Check />}
            sx={{ width: 120 }}
          >
            OK
          </Button>
          <Button
            variant="contained"
            onClick={doClose}
            startIcon={<Close />}
            sx={{ width: 120 }}
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
