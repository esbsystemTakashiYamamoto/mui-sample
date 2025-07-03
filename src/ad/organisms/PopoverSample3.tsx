import { useState, MouseEvent } from "react";
import { Box, Button, Paper, Popover, Stack, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const PopoverSample3 = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const doEnter = (ev: MouseEvent) => setOpen(ev.currentTarget as HTMLElement);
  const doLeave = () => setOpen(null);

  return (
    <>
      <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
        コンポーネントに切り分けてみた
        <br />
        いまいちいい方法か分からない・・・🤪
      </Typography>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Button
          variant="contained"
          color="primary"
          onMouseEnter={doEnter}
          onMouseLeave={doLeave}
        >
          ボタンの場合
        </Button>
        <Typography variant="h6" color="initial" onMouseEnter={doEnter} onMouseLeave={doLeave}>
          タイポグラフィーの場合
        </Typography>
        <Paper sx={{ p: 2 }} elevation={8} onMouseEnter={doEnter} onMouseLeave={doLeave}>
          何かしらのコンテンツ
        </Paper>
      </Stack>
      <FilenamePanel fileName="PopoverSample3.tsx" />

      <PopOver open={open} doClear={doLeave} message="ここに伝えたい内容" />
    </>
  );
};

type Props = {
  open: HTMLElement | null;
  doClear: () => void;
  message: string;
};

const PopOver = ({ open, doClear, message }: Props) => {
  return (
    <>
      <Popover
        open={Boolean(open)}
        onClose={doClear}
        anchorEl={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        disableRestoreFocus
        sx={{ pointerEvents: "none", mt: 1 }}
      >
        <Box sx={{ bgcolor: (p) => p.palette.grey[600], color: (p) => p.palette.grey[50] }}>
          <Typography sx={{ p: 2 }}>{message}</Typography>
        </Box>
      </Popover>
    </>
  );
};
