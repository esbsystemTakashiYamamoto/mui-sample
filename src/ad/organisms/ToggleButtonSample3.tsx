import { useState } from "react";
import { ToggleButtonGroup, ToggleButton, Stack, Typography } from "@mui/material";
import { LooksOne, LooksTwo, Looks3 } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = [
  { id: 1, value: "1", label: "ラベル１" },
  { id: 2, value: "2", label: "ラベル２" },
  { id: 3, value: "3", label: "ラベル３" },
];

export const ToggleButtonSample3 = () => {
  const [value, setValue] = useState<string[] | null>(null);
  const doChange = (value: string[] | null) => {
    console.log(value);
    setValue(value);
  };
  return (
    <>
      <Typography variant="body1" color="initial">
        string[]でvalueを管理すれば良い ⭕
      </Typography>
      <Stack direction="row" spacing={5} alignItems="center" sx={{ mt: 5 }}>
        <ToggleButtonGroup
          value={value}
          color="secondary"
          // exclusive // 👈 これを消すこと！！
          onChange={(_, value) => doChange(value)}
        >
          <ToggleButton value="1">
            <LooksOne />
          </ToggleButton>
          <ToggleButton value="2">
            <LooksTwo />
          </ToggleButton>
          <ToggleButton value="3">
            <Looks3 />
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="h5" color="initial">
          {value?.map((n) => data.find((d) => d.value === n)?.label).join(", ") ?? "選択なし"}
        </Typography>
      </Stack>
      <FilenamePanel fileName="ToggleButtonSample3.tsx" />
    </>
  );
};
