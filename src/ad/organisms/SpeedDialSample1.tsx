import { ReactNode } from "react";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { FileCopyOutlined, Save, Print, Share } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const actions = [
  { icons: <FileCopyOutlined />, name: "Copy" },
  { icons: <Save />, name: "Save" },
  { icons: <Print />, name: "Print" },
  { icons: <Share />, name: "Share" },
];

export const SpeedDialSample1 = () => {
  return (
    <>
      <Sample>
        <Stack spacing={2}>
          <Button variant="contained">ボタンです</Button>
          <Button variant="contained">ボタンです</Button>
          <Button variant="contained">ボタンです</Button>
          <Button variant="contained">ボタンです</Button>
        </Stack>
        <Typography variant="h4">文字です</Typography>
        <Typography variant="h4">文字です</Typography>
        <Typography variant="h4">文字です</Typography>
        <FilenamePanel fileName="SpeedDialSample1.tsx" />
      </Sample>
    </>
  );
};

/**
 * SpeedDialを配置したBoxを含めて定義しておく
 * こうしなとSpeedDialの配置（右下）が面倒くさい
 * 画面の大きさを変えたり、サイズが変わったりしたときに使い回せない
 * @param param0
 * @returns
 */
const Sample = ({ children }: { children: ReactNode }) => {
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
      <SpeedDial
        ariaLabel="SpeedDial" // 必須らしい
        sx={{ position: "absolute", bottom: 16, right: 16 }} // 右下に固定
        icon={<SpeedDialIcon />} // スピードダイヤルのアイコン
        direction="left" // メニューの展開方向
        FabProps={{ color: "primary" }} // アイコンの色を指定
      >
        {actions.map((n) => (
          <SpeedDialAction key={n.name} icon={n.icons} tooltipTitle={n.name} />
        ))}
      </SpeedDial>
    </Box>
  );
};
