import { useState } from "react";
import { Box, Fade, Typography, Button } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const TransitionsSample2 = () => {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("更新前");

  const doClick = () => {
    setOpen(false); // Fadeで消して

    setTimeout(() => {
      // 1秒後にデータを更新して再表示
      setMessage(new Date().toLocaleString());
      setOpen(true);
    }, 1000);
  };

  return (
    <>
      <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
        データが変わったときのエフェクトとして使う
        <br />
        一回消して・データを更新して・再度表示する
        <br />
        と、いった感じ
      </Typography>

      <Button variant="contained" onClick={() => doClick()} disabled={!open}>
        値の更新
      </Button>

      <Box sx={{ display: "flex" }}>
        {/* Fadeのtimeoutとデータ更新のタイミングは合わせる */}
        <Fade in={open} timeout={{ enter: 1000, exit: 1000 }}>
          <Box>
            <Typography variant="h5" color="secondary" sx={{ mt: 2 }}>
              {message}
            </Typography>
          </Box>
        </Fade>
      </Box>
      <Typography variant="h6" color="initial" sx={{ mt: 2 }}>
        {message}
      </Typography>
      <FilenamePanel fileName="TransitionsSample2.tsx" />
    </>
  );
};
