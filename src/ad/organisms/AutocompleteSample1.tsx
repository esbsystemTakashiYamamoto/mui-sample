import { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";
import { faker } from "@faker-js/faker/locale/ja";

// ダミーデータ
const options = Array.from({ length: 1000 }).map((_, i) => {
  // この構造に意味がある
  return {
    id: i, // idを明示的に振ること
    label: faker.person.fullName(), // 表示するキー名はlabelにする
  };
});

export const AutocompleteSample1 = () => {
  const [value, setValue] = useState<(typeof options)[number] | null>(null);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" color="primary">
          確定した(value)の値: {value?.label}
        </Typography>
        <Typography variant="h6" color="secondary">
          入力中(inputValue)の値: {inputValue}
        </Typography>
      </Box>
      <Autocomplete
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        noOptionsText="選択肢がありません"
        // 👇 Autocompleteで重複すラベルはエラーになる時の対処法の例
        getOptionLabel={(p) => `${p.id}: ${p.label}`}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="氏名"
            helperText={`${options.length.toLocaleString()}件のデータ`}
          />
        )}
      />
      <FilenamePanel fileName="AutocompleteSample1.tsx" />
    </>
  );
};
