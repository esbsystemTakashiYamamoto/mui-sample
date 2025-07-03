import { Slider, Box, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const CustomizeSample1 = () => {
  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h5" fontWeight="bold">
          説明
        </Typography>
        <Typography variant="body1">
          <a href="https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop">
            ここに載ってる方法
          </a>
          <br />
          再利用しないとか、その場限りのカスタマイズ方法
          <br />
          普通にSxPropsで指定する
        </Typography>
      </Box>

      <Slider
        sx={{
          mb: 2,
          width: 300,
          color: (p) => p.palette.success.main,
          bgcolor: "grey.300",
          borderRadius: 0,
        }}
      />
      <FilenamePanel fileName="CustomizeSample1.tsx" />
    </>
  );
};
