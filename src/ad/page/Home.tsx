import muiLogo from "../../assets/mui.png";
import { Stack, Typography } from "@mui/material";
import { Image } from "mui-image";
import { FilenamePanel } from "../../ad/atoms/FilenamePanel";

export const Home = () => {
  return (
    <>
      <Stack direction={"column"} alignItems={"center"}>
        {/* muiの関連プロジェクトのコンポーネント */}
        <Image src={muiLogo} width={"400px"} />

        {/* メッセージ */}
        <Typography
          variant="h5"
          sx={{
            color: (p) => p.palette.grey[600],
            fontFamily: "Sawarabi Gothic",
            lineHeight: 2,
          }}
        >
          muiのサンプル
          <br />
          よく使いそうな機能をまとめておく
        </Typography>
        <FilenamePanel fileName="Home.tsx" />
      </Stack>
    </>
  );
};
