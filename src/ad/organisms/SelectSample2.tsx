import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  FormHelperText,
} from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SelectSample2 = () => {
  const [value, setValue] = useState("");
  const doChange = (value: string) => setValue(value);

  return (
    <>
      <FormControl sx={{ minWidth: 80 }} error={value === "20"}>
        <InputLabel id="select1">値を選ぶ</InputLabel>
        <Select
          labelId="select1" // どこに効いてくるのか分からないけど付けておいたほうがいいっぽい
          label="値を選ぶ" // InputLabelと同じ内容を書かないと表示が変になる
          value={value}
          onChange={(e) => doChange(e.target.value)}
          renderValue={(p) => ("20" === p ? `👊 - ${p}` : p)}
        >
          <MenuItem value={0} sx={{ color: (p) => p.palette.grey[500] }}>
            ぜろ
          </MenuItem>
          <MenuItem value="10">じゅう</MenuItem>
          <MenuItem value="20">にじゅう</MenuItem>
          <MenuItem value="30">さんじゅう</MenuItem>
          <MenuItem value="40">さんじゅうでこんな広い場合</MenuItem>
        </Select>
        <FormHelperText>「にじゅう」を選ぶとエラー表示になる</FormHelperText>
      </FormControl>
      <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
        選択した値: {value || "なし"}
      </Typography>
      <FilenamePanel fileName="SelectSample2.tsx" />
    </>
  );
};
