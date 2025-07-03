import { ReactNode, useState } from "react";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Box,
  Button,
  Stack,
  Typography,
  Backdrop,
} from "@mui/material";
import { FileCopyOutlined, Save, Print, Share, Edit } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const actions = [
  { icons: <FileCopyOutlined />, name: "Copy" },
  { icons: <Save />, name: "Save" },
  { icons: <Print />, name: "Print" },
  { icons: <Share />, name: "Share" },
];

export const SpeedDialSample2 = () => {
  const [open, setOpen] = useState(false);
  const doOpen = () => setOpen(true);
  const doClose = () => setOpen(false);

  return (
    <>
      <Sample open={open} doOpen={doOpen} doClose={doClose}>
        <Stack spacing={2}>
          <Button variant="contained" onClick={doOpen}>
            開く
          </Button>
          <Button variant="contained" onClick={doClose}>
            閉じる
          </Button>
        </Stack>
        <Typography variant="h4">文字です</Typography>
        <Typography variant="h4">文字です</Typography>
        <Typography variant="h4">文字です</Typography>
        <FilenamePanel fileName="SpeedDialSample2.tsx" />
      </Sample>
    </>
  );
};

type Props = {
  children?: ReactNode;
  open?: boolean;
  doOpen?: () => void;
  doClose?: () => void;
};

/**
 * 引数を渡して使い回すパターン
 * @param children JSXコンポーネント
 * @param open 開閉の状態
 * @param doOpen 開く時のコールバック
 * @param doClose 閉じる時のコールバック
 * @returns
 */
const Sample = ({ children, open = false, doOpen = () => {}, doClose = () => {} }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        flexGrow: 1,
        height: 500,
        bgcolor: (p) => p.palette.grey[200],
      }}
    >
      {children}
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial" // 必須らしい
        sx={{ position: "absolute", bottom: 16, right: 16 }} // 右下に固定
        icon={<SpeedDialIcon openIcon={<Edit />} />} // 展開状態のアイコンを変更
        direction="left" // メニューの展開方向
        FabProps={{ color: "primary" }} // アイコンの色を指定
        open={open} // 開閉をコントロール
        onClose={doClose} // 開閉をコントロール
        onOpen={doOpen} // 開閉をコントロール
      >
        {actions.map((n) => (
          <SpeedDialAction
            key={n.name}
            icon={n.icons}
            tooltipTitle={n.name}
            sx={{ bgcolor: (p) => p.palette.warning.light }}
            onClick={doClose} // 開閉をコントロール
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
