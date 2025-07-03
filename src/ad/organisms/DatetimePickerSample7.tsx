import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { jaJP } from "@mui/x-date-pickers/locales";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { Divider, Stack } from "@mui/material";
import { PriorityHigh } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

/** 日付のみのコンポーネントのバリデーション */
export const DatetimePickerSample7 = () => {
  const [value1, setValue1] = useState<Date | null>(new Date());
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja} // 日本語化
        localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <Stack spacing={3}>
          <DatePicker
            label="DatePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              // ここにテキストフィールドを書けば良い
              textField: {
                variant: "filled",
                error: new Date() <= (value1 ?? new Date()), // こうするとカレンダーで無効な値を制御できない
                helperText: "ヘルパーテキスト",
              },
            }}
          />
          <Divider />

          <DatePicker
            label="DatePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slots={{
              openPickerIcon: PriorityHigh,
            }}
            slotProps={{
              // ここにテキストフィールドを書けば良い
              textField: {
                helperText: "カレンダーを開くアイコンを変更",
              },
              openPickerButton: {
                color: "primary",
              },
              inputAdornment: {
                position: "start",
              },
            }}
          />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample7.tsx" />
    </>
  );
};
