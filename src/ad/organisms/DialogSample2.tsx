import { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

import { TrendingDown, TrendingUp, LockOpen } from "@mui/icons-material";

import { StdDialog } from "../atoms/StdDialog";
import {
  useStdDialogValues,
  getDialogTitleStyle,
} from "../../define/hooks/useStdDialogValues";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const DialogSample2 = () => {
  const [open, setChangeState, message, setChangeMessage] = useStdDialogValues(
    false,
    "ダイヤログ文字列"
  );

  const [msg, setMsg] = useState("");

  const doProcess = () => {
    setMsg("実行する処理");
    setChangeState(false);
  };

  const doCancel = () => {
    setMsg("キャンセルする処理");
    setChangeState(false);
  };

  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h4">説明</Typography>
        <Typography variant="body1">
          Dialogをある程度構成した「StdDialog.tsx」を「atoms」に置いた
          <br />
          Dialogの表示や制御は「useStdDialogValues.ts」でやる
          <br />
          よく使うダイヤログの表示スタイルも「useStdDialogValues.ts」に入れておいた
          <br />
          フックとして「define」に定義
          <br />
          これらを使ってダイヤログを使う
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          setChangeMessage("値の操作を行います。");
          setChangeState(true);
        }}
      >
        ダイヤログを開く
      </Button>
      <Typography variant="h4" color="textDisabled" sx={{ mt: 2 }}>
        {msg}
      </Typography>
      <StdDialog
        open={open}
        onClose={() => setChangeState(false)}
        title={"変更の確認"}
        dialogMessage={message}
        mode="modal"
        dialogTitleProps={getDialogTitleStyle("warning")}
        dialogContent={getContent()}
        buttons={{
          okButton: { onClick: doProcess, icon: <LockOpen /> },
          cancelButton: { onClick: doCancel },
        }}
      />
      <FilenamePanel fileName="DialogSample2.tsx" />
    </>
  );
};

const getContent = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ bgcolor: (p) => p.palette.grey[300] }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>値</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>変更前</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>変更後</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>傾向</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>値1</TableCell>
            <TableCell>10</TableCell>
            <TableCell>12</TableCell>
            <TableCell>
              <TrendingUp color="success" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>値2</TableCell>
            <TableCell>500</TableCell>
            <TableCell>485</TableCell>
            <TableCell>
              <TrendingDown color="error" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>値3</TableCell>
            <TableCell>8</TableCell>
            <TableCell>15</TableCell>
            <TableCell>
              <TrendingUp color="success" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
