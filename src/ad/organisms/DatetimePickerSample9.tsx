import { useState } from "react";
import { TimePicker, TimeField, TimeClock } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { jaJP } from "@mui/x-date-pickers/locales";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { Divider, Stack } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

/** 時間のみのコンポーネントのバリデーション */
export const DatetimePickerSample9 = () => {
  const [value1, setValue1] = useState<Date | null>();
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja} // 日本語化
        localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <Stack spacing={3}>
          <TimePicker
            label="TimePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              textField: {
                helperText: `${value1}`,
              },
            }}
          />
          <Divider />

          <TimeField
            label="TimeFieldコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              textField: {
                helperText: `時間の入力のみ出来る: ${value1}`,
              },
            }}
          />
          <Divider />

          <TimeClock value={value1} onChange={(newValue) => setValue1(newValue)} />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample9.tsx" />
    </>
  );
};
