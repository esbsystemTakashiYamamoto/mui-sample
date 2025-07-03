import { DialogTitleProps } from "@mui/material";
import { useState } from "react";

/**
 * StdDialog用のカスタムフック
 * @param initialOpenValue ダイヤログ開閉状態初期値
 * @param initialMessageValue ダイヤログメッセージ初期値
 * @returns
 */
export const useStdDialogValues = (
  initialOpenValue: boolean = false,
  initialMessageValue: string = "未指定"
): [
  open: boolean,
  changeState: (state: boolean) => void,
  message: string,
  changeMessage: (state: string) => void
] => {
  const [open, setOpen] = useState(initialOpenValue);
  const [message, setMessage] = useState(initialMessageValue);

  const setChangeState = (state: boolean) => setOpen(state);
  const setChangeMessage = (message: string) => setMessage(message);

  return [open, setChangeState, message, setChangeMessage];
};

/** ダイヤログのタイトルのスタイル */
export const getDialogTitleStyle = (
  color: "info" | "success" | "warning" | "error"
): DialogTitleProps => {
  return {
    typography: "h4",
    color: "white",
    sx: {
      fontWeight: "bold",
      fontFamily: "Sawarabi Gothic",
      borderRadius: 5,
      textAlign: "center",
      m: 2,
      boxShadow: 5,
      bgcolor: (p) => {
        if (color === "info") return p.palette.info.light;
        if (color === "success") return p.palette.success.light;
        if (color === "warning") return p.palette.warning.light;
        if (color === "error") return p.palette.error.main;
        return undefined;
      },
    },
  };
};
