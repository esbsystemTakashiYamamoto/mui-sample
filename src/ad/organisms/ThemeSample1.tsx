import { Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const ThemeSample1 = () => {
  const theme = useTheme();
  return (
    <>
      <Paper elevation={8} sx={{ mb: 2, p: 2 }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ m: 2, p: 2, bgcolor: (p) => p.palette.grey[300] }}
        >
          import {useTheme} from "@mui/material/styles"; // 読み込んで
          <br />
          ....
          <br />
          const theme = useTheme(); // フックを取得
          <br />
          ....
          <br />
          theme.palette.primary.dark // こんな感じで使う
        </Typography>
        <Typography variant="h6" color="initial">
          全体に効いているテーマの値を取得する事ができる
          <br />
          デザインやレイアウトの統一に便利 👍
          <br />
          SxPropsの中だけじゃなくてフックで取れるから、結構どこでも使える
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          bgcolor: theme.palette.primary.light,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.dark,
            textAlign: "center",
          }}
        >
          「theme.palette.primary.dark」で値が取れる
          <br />
          {theme.palette.primary.dark}
        </Typography>
      </Paper>
      <FilenamePanel fileName="ThemeSample1.tsx" />
    </>
  );
};
