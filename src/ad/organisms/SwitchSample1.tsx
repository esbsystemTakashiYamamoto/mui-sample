import { useState } from "react";
import { FormGroup, FormControlLabel, Switch, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SwitchSample1 = () => {
  const [checked, setChecked] = useState(false);

  // こうも書けるけど・・・
  // const doChecked = (_: ChangeEvent<HTMLInputElement>, checked: boolean) =>
  //   setChecked(checked);

  // この方が関数として使いやすい
  const doChanged = (flg: boolean) => setChecked(flg);
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={(_, flg) => doChanged(flg)} />}
          label={
            <Typography
              variant="h6"
              sx={{ fontFamily: "Sawarabi Mincho", color: (p) => p.palette.primary.main }}
            >
              {checked ? "ON" : "OFF"}
            </Typography>
          }
        />
        <FormControlLabel control={<Switch defaultChecked />} required label="ラベル" />
        <FormControlLabel control={<Switch />} disabled label="ラベル" />
        <FormControlLabel
          control={<Switch defaultChecked color="warning" />}
          required
          label="ラベル"
        />
      </FormGroup>
      <FilenamePanel fileName="SwitchSample1.tsx" />
    </>
  );
};

// content.js:9 Uncaught TypeError: Cannot read properties of undefined (reading 'target')
