import { useState } from "react";
import { Slider, Stack } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SliderSample4 = () => {
  const [value, setValue] = useState([30, 60]);

  const doChange = (value: number | number[]) => {
    if (!Array.isArray(value)) return;
    setValue(value);
  };
  return (
    <>
      <Stack direction="column" spacing={5} sx={{ mt: 5 }}>
        <Slider
          // value={value}
          track="inverted"
          // onChange={(_, value) => doChange(value)}
          valueLabelDisplay="on" // 値ラベルの表示モード
          valueLabelFormat={(value) => `${value}%`} // 値ラベルの表示文字をカスタム
          shiftStep={30} // 「Shift」キーを押しながらの時のステップ量
          min={0} // 最小値
          max={120} // 最大値
        />
        <Slider
          value={value}
          track="inverted"
          onChange={(_, value) => doChange(value)}
          valueLabelDisplay="on" // 値ラベルの表示モード
          valueLabelFormat={(value) => `${value}%`} // 値ラベルの表示文字をカスタム
          shiftStep={30} // 「Shift」キーを押しながらの時のステップ量
          min={0} // 最小値
          max={120} // 最大値
        />
      </Stack>
      <FilenamePanel fileName="SliderSample4.tsx" />
    </>
  );
};
