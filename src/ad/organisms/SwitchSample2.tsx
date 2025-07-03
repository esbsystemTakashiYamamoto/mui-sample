import { useState } from "react";

import { Typography } from "@mui/material";

import { StdSwitch } from "../atoms/StdSwitch";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SwitchSample2 = () => {
  const [checked, setChecked] = useState(false);

  const doChanged = (flg: boolean) => setChecked(flg);
  return (
    <>
      <Typography
        gutterBottom
        variant="body1"
        sx={{ mt: 2, color: (p) => p.palette.grey[700] }}
      >
        書くのがめんどくさいからStdにした
      </Typography>

      <StdSwitch label="スイッチ" value={checked} setValue={doChanged} />

      <FilenamePanel fileName="SwitchSample2.tsx" />
    </>
  );
};
