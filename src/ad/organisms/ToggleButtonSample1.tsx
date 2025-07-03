import { useState } from "react";
import { ToggleButtonGroup, ToggleButton, Stack, Typography } from "@mui/material";
import { LooksOne, LooksTwo, Looks3 } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const ToggleButtonSample1 = () => {
  const [value, setValue] = useState<string | null>(null);
  const doChange = (value: string | null) => {
    setValue(value);
  };
  return (
    <>
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
          {value || "選択なし"}
        </Typography>
      </Stack>
      <FilenamePanel fileName="ToggleButtonSample1.tsx" />
    </>
  );
};
