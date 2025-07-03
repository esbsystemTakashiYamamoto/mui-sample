import { useState } from "react";
import { Tooltip, Button, Stack, ClickAwayListener, Box } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const TooltipSample2 = () => {
  const [open, setOpen] = useState(false);

  const doClose = () => setOpen(false);
  const toggleClick = () => setOpen((p) => !p);

  return (
    <>
      <Stack spacing={2} width="200px" sx={{ mb: 2 }}>
        <Tooltip
          title="フォーカスでは表示されない"
          placement="right"
          disableFocusListener // フォーカスを無効にする設定
        >
          <Button variant="contained">ホバーかタッチ</Button>
        </Tooltip>
        <Tooltip
          title="マウスオーバーでは表示されない"
          placement="right"
          disableHoverListener // マウスオーバーを無効にする設定
        >
          <Button variant="contained">フォーカスかタッチ</Button>
        </Tooltip>
        <Tooltip
          title="マウスオーバーでのみ表示される"
          placement="right"
          disableFocusListener // フォーカスを無効にする設定
          disableTouchListener // マウスタッチを無効にする設定
        >
          <Button variant="contained">ホバーのみ</Button>
        </Tooltip>
        <ClickAwayListener onClickAway={doClose}>
          <Box>
            <Tooltip
              PopperProps={{ disablePortal: true }} // パッターパロードを無効にする設定
              onClose={doClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="クリックで開閉する"
            >
              <Button variant="contained" onClick={toggleClick} sx={{ width: "100%" }}>
                クリックで開閉
              </Button>
            </Tooltip>
          </Box>
        </ClickAwayListener>
      </Stack>
      <FilenamePanel fileName="TooltipSample2.tsx" />
    </>
  );
};
