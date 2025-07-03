import { useState } from "react";
import { ToggleButtonGroup, ToggleButton, Stack, Typography } from "@mui/material";
import { LooksOne, LooksTwo, Looks3 } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const data = [
  { id: 1, value: "1", label: "ラベル１" },
  { id: 2, value: "2", label: "ラベル２" },
  { id: 3, value: "3", label: "ラベル３" },
];

export const ToggleButtonSample2 = () => {
  const [value, setValue] = useState<string | null>(null);
  const doChange = (value: string | null) => {
    setValue(value);
  };
  return (
    <>
      <Typography variant="body1" color="initial">
        オブジェクトをvalueに入れて管理して・・・とか考えない❌
        <br />
        ここは素直にvalueはstringとして管理する
      </Typography>
      <Stack direction="row" spacing={5} alignItems="center" sx={{ mt: 5 }}>
        <ToggleButtonGroup
          value={value}
          color="secondary"
          exclusive // このオプションで一つだけ選ぶモードになる
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
          {value ? data.find((n) => n.value === value)?.label : "選択なし"}
        </Typography>
      </Stack>
      <FilenamePanel fileName="ToggleButtonSample2.tsx" />
    </>
  );
};
