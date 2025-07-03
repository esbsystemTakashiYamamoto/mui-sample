import { useState } from "react";
import { Box, Typography, Button, Switch } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const CustomizeSample3 = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h5" fontWeight="bold">
          説明
        </Typography>
        <Typography variant="body1">
          <a href="https://mui.com/material-ui/customization/how-to-customize/#overriding-styles-with-class-names">
            ここに載ってる方法
          </a>
          <br />
          コンポーネントの特定の部分をカスタマイズする方法その２
          <br />
          コンポーネントの状態は「グローバルクラス」で分かるらしい
          <br />
          上手く使えばコードが減らせる・・・かも
        </Typography>
      </Box>

      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        sx={{
          // チェックした時のスタイル
          "& .Mui-checked": {
            "&+ .MuiSwitch-track": {
              bgcolor: (p) => p.palette.error.light,
              opacity: 0.7,
            },
            color: (p) => p.palette.error.dark,
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={checked}
        sx={{
          "&: hover": {
            // ホバーした時のスタイル
            bgcolor: (p) => p.palette.grey[300],
          },
          "&: disabled": {
            // 無効の時のスタイルを指定している
            bgcolor: (p) => p.palette.error.dark,
            color: (p) => p.palette.grey[500],
          },
        }}
      >
        ボタン
      </Button>
      <FilenamePanel fileName="CustomizeSample3.tsx" />
    </>
  );
};

// 「&」について
// CSSのネスト表現を模倣したもので、現在の要素自分自身を表す。
// 現在の要素には、ハッシュ値が含まれるから、これを指定するときによく使うらしい
