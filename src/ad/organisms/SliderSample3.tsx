import { useState } from "react";
import { Slider, Stack, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SliderSample3 = () => {
  const [value, setValue] = useState([30, 60]);

  const doChange = (value: number | number[]) => {
    if (!Array.isArray(value)) return;
    setValue(value);
  };
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 5 }}>
        <Slider
          value={value}
          onChange={(_, value) => doChange(value)}
          valueLabelDisplay="on" // 値ラベルの表示モード
          valueLabelFormat={(value) => `${value}%`} // 値ラベルの表示文字をカスタム
          shiftStep={30} // 「Shift」キーを押しながらの時のステップ量
          min={0} // 最小値
          max={120} // 最大値
        />
        <Typography variant="subtitle1" align="right" sx={{ width: 100 }}>
          {value.join("-")}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 5 }}>
        <Slider
          // value={value}
          // onChange={(_, value) => doChange(value)}
          defaultValue={[30, 60, 90]}
          valueLabelDisplay="on" // 値ラベルの表示モード
          valueLabelFormat={(value) => `${value}%`} // 値ラベルの表示文字をカスタム
          shiftStep={30} // 「Shift」キーを押しながらの時のステップ量
          min={0} // 最小値
          max={120} // 最大値
        />
        <Typography variant="subtitle1" align="right" sx={{ width: 100 }}></Typography>
      </Stack>
      <FilenamePanel fileName="SliderSample3.tsx" />
    </>
  );
};
