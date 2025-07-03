import { useState, MouseEvent } from "react";
import { Button, Popover, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const PopoverSample1 = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const doClick = (ev: MouseEvent<HTMLButtonElement>) => {
    // 表示させたい要素のElementが指定されるとPopoverが表示される
    setOpen(ev.currentTarget);
  };

  // 要素のElementをnullにするとPopoverは閉じる
  const doClose = () => setOpen(null);

  // 「Popoverを表示させたい要素」と
  // Popoverを表示するタイミングは別で制御する仕様らしい
  // が、
  // 「Popoverを表示させたい要素」を消すとPopoverは閉じる・・・
  // Popoverを開くときだけ・・・制御が別らしい

  return (
    <>
      <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
        表示させる要素をElementとして取得する
        <br />
        表示させたいタイミングはBooleanで適宜に指定できる
      </Typography>
      <Button variant="contained" color="primary" onClick={doClick} sx={{ width: 100 }}>
        表示
      </Button>
      <FilenamePanel fileName="PopoverSample1.tsx" />
      <Popover
        open={Boolean(open)}
        onClose={doClose}
        anchorEl={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Typography sx={{ p: 2 }}>ここに伝えたい内容</Typography>
      </Popover>
    </>
  );
};
