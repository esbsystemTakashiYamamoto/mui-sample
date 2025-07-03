import { useState } from "react";
import { Autocomplete, TextField, Typography } from "@mui/material";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

// ダミーデータ
const options = Array.from({ length: 1000 }).map((_, i) => {
  // この構造に意味がある
  return {
    id: i, // idを明示的に振ること
    label: faker.person.fullName(), // 表示するキー名はlabelにする
  };
});

export const AutocompleteSample3 = () => {
  const [value, setValue] = useState<(typeof options)[number] | null>(null);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        noOptionsText="選択肢がありません"
        // 👇 Autocompleteで重複すラベルはエラーになる時の対処法の例
        getOptionLabel={(p) => `${p.id}: ${p.label}`}
        getOptionDisabled={(p) => 0 === p.id % 12 || p.id < 10}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="氏名"
            error={20 < (value?.id ?? 0) && (value?.id ?? 0) < 100}
            helperText={`${options.length.toLocaleString()}件のデータ`}
          />
        )}
      />
      <Typography variant="body1" color="initial" sx={{ mt: 2 }}>
        項目を無効にしたり
      </Typography>
      <Typography variant="body1" color="initial" sx={{ mt: 2 }}>
        エラー表示にしたり(20～100)
      </Typography>
      <FilenamePanel fileName="AutocompleteSample3.tsx" />
    </>
  );
};
