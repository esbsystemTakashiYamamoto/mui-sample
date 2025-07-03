import { useState, MouseEvent } from "react";
import { Box, Button, Popover, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const PopoverSample2 = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const doEnter = (ev: MouseEvent<HTMLButtonElement>) => {
    setOpen(ev.currentTarget);
  };

  const doLeave = () => setOpen(null);

  return (
    <>
      <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
        表示させる要素をElementとして取得する
        <br />
        表示させたいタイミングはBooleanで適宜に指定できる
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onMouseEnter={doEnter}
        onMouseLeave={doLeave}
      >
        マウスオーバーでPopoverを表示
      </Button>
      <FilenamePanel fileName="PopoverSample2.tsx" />
      <Popover
        open={Boolean(open)}
        onClose={doLeave}
        anchorEl={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        disableRestoreFocus // 💡 メニューを閉じるときにfocusを復元させない
        sx={{ pointerEvents: "none", mt: 1 }} // 💡 親要素のpointerEventsを無効にする
      >
        <Box sx={{ bgcolor: (p) => p.palette.grey[600], color: (p) => p.palette.grey[50] }}>
          <Typography sx={{ p: 2 }}>ここに伝えたい内容</Typography>
        </Box>
      </Popover>
    </>
  );
};
