import { useState } from "react";
import { AlertProps } from "@mui/material";

type Props = {
  /** スナックバー開閉状態 */
  state: boolean;
  /** スナックバー開閉状態更新 */
  changeState: (state: boolean) => void;
  /** スナックバーメッセージ */
  message: string;
  /** スナックバーメッセージ更新 */
  changeMessage: (state: string) => void;
  /** 表示タイプ */
  severity: AlertProps["severity"];
  /** 表示タプ更新 */
  setSeverity: (severity: AlertProps["severity"]) => void;
  /** スナックバー内容更新 */
  changeSnackbar: (state: boolean, message: string, severity: AlertProps["severity"]) => void;
};

/**
 * StdSnackbar用のカスタムフック
 * @param initialOpenValue 開閉状態初期値
 * @param initialMessageValue 表示メッセージ初期値
 * @param initialSeverityValue 表示タイプ初期値
 * @returns
 */
export const useSnackbarValues = (
  initialOpenValue: boolean = false,
  initialMessageValue: string = "未指定",
  initialSeverityValue: AlertProps["severity"] = "success"
): Props => {
  const [open, setOpen] = useState(initialOpenValue);
  const [message, setMessage] = useState(initialMessageValue);
  const [severity, setSeverity] = useState<AlertProps["severity"]>(initialSeverityValue);

  const setChangeState = (state: boolean) => setOpen(state);
  const setChangeMessage = (message: string) => setMessage(message);
  const setChangeSeverity = (severity: AlertProps["severity"]) => setSeverity(severity);

  const setChangeSnackbar = (
    state: boolean,
    message: string,
    severity: AlertProps["severity"]
  ) => {
    setChangeState(state);
    setChangeMessage(message);
    setChangeSeverity(severity);
  };

  return {
    state: open,
    changeState: setChangeState,
    message: message,
    changeMessage: setChangeMessage,
    severity: severity,
    setSeverity: setChangeSeverity,
    changeSnackbar: setChangeSnackbar,
  };
};
