import { useState } from "react";
import { Slider, SliderProps, Stack, Typography, TextField } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const marks: SliderProps["marks"] = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 30,
    label: "30%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 80,
    label: "80%",
  },
  {
    value: 100,
    label: "100%",
  },
  {
    value: 120,
    label: "120%",
  },
];

export const SliderSample2 = () => {
  const [value, setValue] = useState(30);

  const doChange = (value: number | number[]) => {
    setValue(Array.isArray(value) ? value[0] : value);
  };

  const doInput = (value: string) => {
    const num = Number(value);
    if (isNaN(num)) return;
    doChange(num);
  };
  return (
    <>
      <Stack direction="row" spacing={5} alignItems="center" sx={{ mt: 5,mb: 4 }}>
        <Slider
          value={value}
          onChange={(_, value) => doChange(value)}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => `${value}%`}
          marks={marks} // カスタムマークを表示
          shiftStep={30} // 「Shift」キーを押しながらの時のステップ量
          step={10} // 増減のステップ量
          min={0}
          max={120}
          sx={{ width: 200 }}
          color={0 <= value && value <= 120 ? "primary" : "error"}
        />
        <TextField
          sx={{ width: 80 }}
          value={value}
          error={!(0 <= value && value <= 120)}
          onChange={(ev) => doInput(ev.target.value)}
          variant="standard"
        />
      </Stack>
      <FilenamePanel fileName="SliderSample2.tsx" />
    </>
  );
};
