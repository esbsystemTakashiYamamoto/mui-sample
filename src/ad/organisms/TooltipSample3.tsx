import { Tooltip, Button, Typography, Box } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const msg = (
  <>
    <Typography
      variant="h5"
      sx={{ fontfamily: "Sawarabi Gothic", color: (p) => p.palette.warning.main }}
    >
      表示をカスタマイズ
    </Typography>
    こんなことが出来る
    <br />
    <Button variant="contained">ホバー</Button>
  </>
);

export const TooltipSample3 = () => {
  return (
    <>
      <Tooltip title={msg} placement="bottom">
        <Button variant="contained">内容をカスタム</Button>
      </Tooltip>
      <Box sx={{ mt: 2 }}>
        <FilenamePanel fileName="TooltipSample3.tsx" />
      </Box>
    </>
  );
};
