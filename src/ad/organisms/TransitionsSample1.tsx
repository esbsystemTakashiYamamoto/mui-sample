import { useState } from "react";
import { Box, Fade, Typography, Switch } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const TransitionsSample1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography variant="body1" color="initial">
        2つ以上の要素を指定する時はBoxで囲むこと ❗❗❗❗
      </Typography>
      <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
        👆 そうしないとエラーが起こる・・・{" "}
      </Typography>
      <Switch checked={open} onChange={(e) => setOpen(e.target.checked)} />
      <Box sx={{ display: "flex" }}>
        <Fade in={open} timeout={{ enter: 1000, exit: 500 }}>
          <Box>
            <Typography variant="h5" color="textDisabled" sx={{ mt: 2 }}>
              表示される
            </Typography>
            <Typography variant="h5" color="textDisabled" sx={{ mt: 2 }}>
              表示される
            </Typography>
          </Box>
        </Fade>
      </Box>
      <Typography variant="body1" color="initial" sx={{ mt: 2 }}>
        こんな感じになる
      </Typography>
      <FilenamePanel fileName="TransitionsSample1.tsx" />
    </>
  );
};
