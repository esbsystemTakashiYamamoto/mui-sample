import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SelectSample1 = () => {
  const [value, setValue] = useState("");
  const doChange = (value: string) => setValue(value);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select1">値を選ぶ</InputLabel>
        <Select
          labelId="select1" // どこに効いてくるのか分からないけど付けておいたほうがいいっぽい
          label="値を選ぶ" // InputLabelと同じ内容を書かないと表示が変になる
          value={value}
          onChange={(e) => doChange(e.target.value)}
        >
          <MenuItem value={10}>じゅう</MenuItem>
          <MenuItem value={20}>にじゅう</MenuItem>
          <MenuItem value={30}>さんじゅう</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
        選択した値: {value || "なし"}
      </Typography>
      <FilenamePanel fileName="SelectSample1.tsx" />
    </>
  );
};
