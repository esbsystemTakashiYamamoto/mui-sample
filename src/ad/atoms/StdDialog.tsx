import {
  DialogTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  DialogTitleProps,
  DialogContentTextProps,
  DialogProps,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

/** ボタン設定 */
type DialogButtonProps = {
  /** 表示する文字列*/
  label?: string;
  /** 実行する関数*/
  onClick?: () => void;
  /** ボタンに表示するアイコン*/
  icon?: JSX.Element;
  /** ボタンの有効無効*/
  disabled?: boolean;
};

/** 標準ダイヤログProps */
type Props = {
  /** ダイヤログ開閉状態 */
  open?: boolean;
  /** ダイヤログを閉じる関数 */
  onClose?: () => void;
  /** ダイヤログのタイトル */
  title?: string;
  /** ダイヤログの最大幅 */
  maxWidth?: DialogProps["maxWidth"];
  /** ダイヤログの文字列コンテツ */
  dialogMessage?: string;
  /** ダイヤログモード */
  mode?: "dialog" | "modal";
  /** 文字列以外のJSXコンポーネントを表示したいときに使用 */
  dialogContent?: JSX.Element;
  /** ダイヤログのタイトルを細かく設定したいときに使用 */
  dialogTitleProps?: DialogTitleProps;
  /** ダイヤログの文字列コンテツを細かく設定したいときに使用 */
  dialogContentTextProps?: DialogContentTextProps;
  /** ダイヤログのボタン設定 */
  buttons?: {
    okButton?: DialogButtonProps;
    cancelButton?: DialogButtonProps;
  };
};

/** 標準ダイヤログ */
export const StdDialog = ({
  open = false,
  maxWidth = "xs",
  onClose = () => {},
  title = "未指定",
  dialogMessage = "未指定",
  buttons,
  mode = "dialog",
  dialogContent = undefined,
  dialogTitleProps = {
    typography: "h4",
    sx: {
      fontWeight: "bold",
      borderRadius: 5,
      m: 2,
    },
  },
  dialogContentTextProps = {
    typography: "body1",
    sx: {
      mb: 2,
    },
  },
}: Props) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={mode === "dialog" ? onClose : undefined}
        maxWidth={maxWidth}
        fullWidth
      >
        <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText {...dialogContentTextProps}>{dialogMessage}</DialogContentText>
          {!dialogContent ? undefined : (
            <>
              <Divider />
              {dialogContent}
            </>
          )}
        </DialogContent>
        <Divider />
        <DialogActions sx={{ m: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={buttons?.okButton?.icon || <CheckCircle />}
            onClick={buttons?.okButton?.onClick || undefined}
            disabled={buttons?.okButton?.disabled || false}
            sx={{ width: 130 }}
          >
            {buttons?.okButton?.label || "はい"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={buttons?.cancelButton?.icon || <Cancel />}
            onClick={buttons?.cancelButton?.onClick || undefined}
            disabled={buttons?.cancelButton?.disabled || false}
            sx={{ width: 130 }}
          >
            {buttons?.cancelButton?.label || "いいえ"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
