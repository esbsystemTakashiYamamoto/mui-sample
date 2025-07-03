import { Download } from "@mui/icons-material";
import { IconButton, Tooltip, Grid2 } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const msg = "ダウンロードします";

export const TooltipSample1 = () => {
  return (
    <>
      <Grid2 container spacing={2} sx={{ p: 3 }}>
        <Grid2 size={3}>
          <Tooltip title={msg} placement="bottom">
            <IconButton>
              <Download />
            </IconButton>
          </Tooltip>
        </Grid2>
        <Grid2 size={3}>
          <Tooltip title={[msg, "位置を変える"]} placement="top">
            <IconButton>
              <Download />
            </IconButton>
          </Tooltip>
        </Grid2>
        <Grid2 size={3}>
          <Tooltip title={[msg, "矢印を表示"]} placement="bottom" arrow>
            <IconButton>
              <Download />
            </IconButton>
          </Tooltip>
        </Grid2>
        <Grid2 size={3}>
          <Tooltip title={[msg, "・・・上手く出来ない・・"]}>
            <IconButton>
              <Download />
            </IconButton>
          </Tooltip>
        </Grid2>
      </Grid2>
      <FilenamePanel fileName="TooltipSample1.tsx" />
    </>
  );
};
