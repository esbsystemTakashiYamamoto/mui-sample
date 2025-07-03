import { Snackbar, SnackbarProps, Alert, AlertProps } from "@mui/material";

/** 標準スナックバーProps */
type Props = {
  /** スナックバーの開閉状態 */
  open?: boolean;
  /** スナックバーを閉じる関数 */
  doClose?: () => void;
  /** 表示メッセージ */
  message?: string;
  /** 表示色 */
  severity?: AlertProps["severity"];
  /** 表示スタイル */
  variant?: AlertProps["variant"];
  /** 自動で閉じるまでの時間(ms) */
  autoHideDuration?: number;
  /** スナックバーの詳細を指定 */
  snackbarProps?: SnackbarProps;
  /** アラートの詳細を指定 */
  alertProps?: AlertProps;
};

/** 標準スナックバー */
export const StdSnackBar = ({
  open = false,
  doClose = () => {},
  message = "未指定",
  severity = "success",
  variant = "filled",
  autoHideDuration = 3000, // 閉じるまでは3秒
  snackbarProps = {
    anchorOrigin: { vertical: "bottom", horizontal: "right" }, // 標準: 右下に表示
  },
  alertProps = {},
}: Props) => {
  return (
    <>
      <Snackbar
        {...snackbarProps}
        open={open}
        onClose={doClose}
        autoHideDuration={autoHideDuration}
      >
        <Alert {...alertProps} onClose={doClose} severity={severity} variant={variant}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
