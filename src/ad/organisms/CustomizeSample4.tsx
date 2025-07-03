import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";
import { FilenamePanel } from "../atoms/FilenamePanel";

// コンポーネントのスタイルだけ切り出す方法がある
const CustomSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 20px ${alpha(theme.palette.success.main, 0.3)}`,
    },
  },
}));

export const CustomizeSample4 = () => {
  const [value, setValue] = useState(30);
  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h5" fontWeight="bold">
          説明
        </Typography>
        <Typography variant="body1">
          <a href="https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component">
            ここに載ってる方法
          </a>
          <br />
          コンポーネントのスたイリグを切り出す方法
          <br />
          同じことが出来る
          <br />
          JSXがスッキリする👍
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">styledを使わないパターン</Typography>
        {/* 普通にスタイル */}
        <Slider
          value={value}
          onChange={(_, value) => setValue(value as number)}
          defaultValue={30}
          valueLabelDisplay="auto"
          sx={{
            mt: 2,
            width: 300,
            color: (p) => p.palette.success.main,
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: (p) => `0px 0px 0px 8px ${alpha(p.palette.success.main, 0.16)}`,
              },
            },
            "& .Mui-active": {
              boxShadow: (p) => `0px 0px 0px 20px ${alpha(p.palette.success.main, 0.3)}`,
            },
          }}
        />
      </Box>

      <Box>
        <Typography variant="h6">styledを使ったパターン</Typography>
        {/* スタイルは別定義 */}
        <CustomSlider
          value={value}
          onChange={(_, value) => setValue(value as number)}
          defaultValue={30}
          valueLabelDisplay="auto"
          sx={{ mt: 2 }}
        />
      </Box>
      <FilenamePanel fileName="CustomizeSample4.tsx" />
    </>
  );
};
