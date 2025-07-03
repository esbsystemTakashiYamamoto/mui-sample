import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  FormHelperText,
  Chip,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

// ダミーデータ
const options = Array.from({ length: 10 }).map((_, i) => {
  return {
    value: i + 1,
    label: faker.person.fullName(),
  };
});

export const SelectSample3 = () => {
  const [value, setValue] = useState<string[]>([]);
  const doChange = (ev: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = ev;
    const v = Array.isArray(value) ? value : [value];
    setValue(v);
  };

  const message = [
    "valueで管理できる値はstringかstring[]だけっぽい",
    "idをvalueに貯めて、配列にある要素だけをoptionsから引っ張り出す的な使い方",
  ];
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        複数選択の例
      </Typography>
      {message.map((m, i) => (
        <Typography key={i} variant="body1" sx={{ mb: 2 }}>
          {m}
        </Typography>
      ))}
      <FormControl sx={{ maxWidth: 700, mt: 2 }} error={5 <= value.length}>
        <InputLabel id="select1">複数選択の例</InputLabel>
        <Select
          labelId="select1"
          label="複数選択の例"
          value={value}
          multiple // 複数選択モードにする
          onChange={doChange}
          // 👇 確定した内容をコンポーネント内に描画する処理
          renderValue={(p) => (
            <>
              {p.map((n, i) => (
                <Chip
                  key={i}
                  color="primary"
                  variant="outlined"
                  label={options[Number(n) - 1].label}
                  sx={{ mr: 1 }}
                />
              ))}
            </>
          )}
          // 👇 ドロップダウンの設定
          MenuProps={{
            PaperProps: {
              sx: {
                mt: 1,
                maxHeight: 300,
                bgcolor: (p) => p.palette.primary.dark,
                color: (p) => p.palette.primary.contrastText,
              },
            },
          }}
        >
          // 👇 ドロップダウン内に描画する処理
          {options.map((n) => (
            <MenuItem
              key={n.value}
              value={n.value}
              sx={{
                "&:hover": {
                  bgcolor: (p) => p.palette.primary.light,
                },
              }}
            >
              {n.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>５個位上選ぶとエラー表示になる</FormHelperText>
      </FormControl>
      <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
        選択した値: {value.map((n) => options[Number(n) - 1].label).join(", ")}
      </Typography>
      <FilenamePanel fileName="SelectSample3.tsx" />
    </>
  );
};
