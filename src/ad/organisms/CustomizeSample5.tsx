import { useState } from "react";
import { Box, Typography, FormControlLabel, Switch } from "@mui/material";
import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";
import { FilenamePanel } from "../atoms/FilenamePanel";

interface StyledSliderProps extends SliderProps {
  success?: boolean;
}

// @ts-expect-error: 取り敢えず
const StyledSlider = styled(Slider, {
  // @ts-expect-error: 取り敢えず
  state: (prop) => prop !== "success",
})<StyledSliderProps>(({ success, theme }) => ({
  width: 300,
  color: !success ? theme.palette.success.main : theme.palette.error.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
  // variants: [
  //   {
  //     props: ({ success }) => success,
  //     style: {
  //       color: theme.palette.success.main,
  //       "& .MuiSlider-thumb": {
  //         [`&:hover, &.Mui-focusVisible`]: {
  //           boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //         },
  //         [`&.Mui-active`]: {
  //           boxShadow: `0px 0px 0px 20px ${alpha(theme.palette.success.main, 0.2)}`,
  //         },
  //       },
  //     },
  //   },
  // ],
}));

export const CustomizeSample5 = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Box sx={{ mb: 2, color: (p) => p.palette.grey[700] }}>
        <Typography variant="h5" fontWeight="bold">
          説明
        </Typography>
        <Typography variant="body1">
          <a href="https://mui.com/material-ui/customization/how-to-customize/#dynamic-overrides">
            ここに載ってる方法
          </a>
          <br />
          よく分からない ❓❓❓❓
        </Typography>
      </Box>

      <Box>
        <FormControlLabel
          control={
            <Switch checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="スタイルの上書き"
        />
        <StyledSlider success={checked} defaultValue={30} />
      </Box>
      <FilenamePanel fileName="CustomizeSample5.tsx" />
    </>
  );
};
