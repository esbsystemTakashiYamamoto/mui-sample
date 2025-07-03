import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const TextFieldSample1 = () => {
  const [value, setValue] = useState("");

  const doChange = (value: string) => setValue(value);

  return (
    <>
      <TextField
        label="ラベル"
        value={value}
        placeholder="ここに文字を入力して下さい"
        error={3 === value.length}
        helperText={3 === value.length ? "3文字以外で入力" : "3文字以外はダメです"}
        fullWidth // 👈コンポーネントいっぱいに伸ばしたい時はこうする
        onChange={(ev) => doChange(ev.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="ラベル"
        placeholder="ここに文字を入力して下さい"
        slotProps={{
          inputLabel: {
            shrink: true, // ラベルが入力値とかと重なったら上にずらしておく
          },
        }}
        value={value}
        onChange={(ev) => doChange(ev.target.value)}
        helperText=" " // ヘルパーテキスト分上下にズレた場合は空白を入れて整える
        sx={{ mb: 2 }}
        variant="standard"
      />
      <TextField
        label="ラベル"
        value={value}
        onChange={(ev) => doChange(ev.target.value)}
        sx={{ mb: 2 }}
        variant="filled"
      />

      <Typography
        noWrap
        variant="h6"
        sx={{ color: (p) => p.palette.grey[600] }}
      >{`入力値: ${value}`}</Typography>
      <FilenamePanel fileName="TextFieldSample1.tsx" />
    </>
  );
};
