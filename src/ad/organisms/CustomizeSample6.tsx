import { useState, CSSProperties } from "react";
import { Box, Typography, FormControlLabel, Switch } from "@mui/material";
import Slider, { SliderProps } from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";
import { FilenamePanel } from "../atoms/FilenamePanel";

const CustomSlider = styled(Slider)({
  width: 300,
  color: "var(--color)",
  "& .MuiSlider-thumb": {
    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: "0px 0px 0px 8px var(--box-shadow)",
    },
    [`&.Mui-active`]: {
      boxShadow: "0px 0px 0px 14px var(--box-shadow)",
    },
  },
});

const successVars = {
  "--color": "#4caf50",
  "--box-shadow": "rgb(76, 175, 80, .16)",
} as React.CSSProperties;

const defaultVars = {
  "--color": "#1976d2",
  "--box-shadow": "rgb(25, 118, 210, .16)",
} as React.CSSProperties;
export const CustomizeSample6 = () => {
  const [checked, setChecked] = useState(false);
  const [vars, setVars] = useState<CSSProperties>(defaultVars);

  const doChange = (checked: boolean) => {
    setChecked(checked);
    setVars(checked ? successVars : defaultVars);
  };

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
          スタイルを定義してすり替えている
          <br />
          「--」はCSSのカスタムプロパティで、定義した値（--color）を変数として使っている
        </Typography>
      </Box>

      <Box>
        <FormControlLabel
          control={<Switch checked={checked} onChange={() => doChange(!checked)} />}
          label="スタイルの上書き"
        />
        <CustomSlider style={vars} defaultValue={30} />
      </Box>
      <FilenamePanel fileName="CustomizeSample6.tsx" />
    </>
  );
};
