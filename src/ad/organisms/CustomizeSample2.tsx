import { Slider, Box, Typography } from "@mui/material";
import img1 from "../../assets/customizeDocument1.png";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const CustomizeSample2 = () => {
  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h5" fontWeight="bold">
          説明
        </Typography>
        <Typography variant="body1">
          <a href="https://mui.com/material-ui/customization/how-to-customize/#overriding-nested-component-styles">
            ここに載ってる方法
          </a>
          <br />
          コンポーネントの特定の部分をカスタマイズする方法
          <br />
          ブラウザの開発ツールで👇を探して指定する
          <br />
          「&」の意味は自分自身を表しているらしい
        </Typography>
        <img src={img1} width={"300px"} />
      </Box>

      <Slider
        sx={{
          mb: 2,
          width: 300,
          "& .MuiSlider-thumb": {
            color: (p) => p.palette.warning.light,
            borderRadius: 1,
          },
          "& .MuiSlider-track": {
            color: (p) => p.palette.error.dark,
          },
          "& .MuiSlider-rail": {
            color: (p) => p.palette.success.dark,
          },
        }}
      />
      <FilenamePanel fileName="CustomizeSample2.tsx" />
    </>
  );
};

// 「&」について
// CSSのネスト表現を模倣したもので、現在の要素自分自身を表す。
// 現在の要素には、ハッシュ値が含まれるから、これを指定するときによく使うらしい
