import { useState } from "react";
import { Slider, Stack, Typography } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SliderSample1 = () => {
  const [value, setValue] = useState(30);

  const doChange = (value: number | number[]) => {
    setValue(Array.isArray(value) ? value[0] : value);
  };
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 5, mb: 4 }}>
        <VolumeDown color="secondary" />
        <Slider
          value={value}
          onChange={(_, value) => doChange(value)}
          valueLabelDisplay="auto" // 値ラベルの表示モード
          valueLabelFormat={(value) => `${value}%`} // 値ラベルの表示文字をカスタム
          marks // マークを表示
          shiftStep={30} // 「Shift」キーを押しながらの時のステップ量
          step={10} // 増減のステップ量
          min={0} // 最小値
          max={120} // 最大値
        />
        <VolumeUp color="secondary" />
        <Typography variant="subtitle1" align="right" sx={{ width: 50 }}>
          {value}
        </Typography>
      </Stack>
      <FilenamePanel fileName="SliderSample1.tsx" />
    </>
  );
};
