import { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";
import { faker } from "@faker-js/faker/locale/ja";

// ダミーデータ
const data0 = Array.from({ length: 1000 }).map((_, i) => {
  // この構造に意味がある
  return {
    id: i, // idを明示的に振ること
    label: faker.person.fullName(), // 表示するキー名はlabelにする
  };
});

// グループ化ためのデータの準備
const options = data0
  .map((n) => {
    const { label } = n;
    return {
      ...n,
      firstLetter: label[0].toUpperCase(), // グループ化する項目を追加
    };
  })
  .sort((a, b) => a.firstLetter.localeCompare(b.firstLetter)); // ソートしておく事

export const AutocompleteSample2 = () => {
  const [value, setValue] = useState<(typeof options)[number] | null>(null);
  return (
    <>
      <Autocomplete
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        noOptionsText="選択肢がありません"
        groupBy={(option) => option.firstLetter}
        renderGroup={(params) => (
          <Box key={params.key}>
            <Typography
              variant="h5"
              sx={{
                color: (p) => p.palette.primary.main,
                fontFamily: "Sawarabi Mincho",
                bgcolor: (p) => p.palette.grey[200],
                fontWeight: "bold",
                // 👇グループ化したラベルのいい感じの表示設定
                position: "sticky",
                top: "-8px",
                padding: "4px 10px",
              }}
            >
              {params.group}
            </Typography>
            <Typography variant="body1" color="initial">
              {params.children}
            </Typography>
          </Box>
        )}
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
      <FilenamePanel fileName="AutocompleteSample2.tsx" />
    </>
  );
};
