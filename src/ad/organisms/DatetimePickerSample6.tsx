import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { jaJP } from "@mui/x-date-pickers/locales";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { addDays } from "date-fns";
import { Divider, Stack, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

const MIN_DATE = addDays(new Date(), -10);
const MAX_DATE = addDays(new Date(), 10);

const validYear = (date: Date) => {
  // 今年以外はエラーにして入力できない
  return !(new Date().getFullYear() === date.getFullYear());
};

const validMonth = (date: Date) => {
  // 今月以外はエラーにして入力できない
  return !(new Date().getMonth() === date.getMonth());
};

const validDay = (date: Date) => {
  // 週末（土、日）以外はエラーにして入力できない
  const d = date.getDay();
  return !(d === 0 || d === 6);
};

/** 日付のみのコンポーネントのバリデーション */
export const DatetimePickerSample6 = () => {
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
            minDate={MIN_DATE}
            slotProps={{
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    10日前以前は入力出来ない <br />
                    <span style={{ fontWeight: "bold" }}>最小値: 1900-01-01</span>
                  </Typography>
                ),
              },
            }}
          />
          <Divider />

          <DatePicker
            label="DatePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            maxDate={MAX_DATE}
            slotProps={{
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    10日後以降は入力出来ない <br />
                    <span style={{ fontWeight: "bold" }}>最大値: 2099-12-31</span>
                  </Typography>
                ),
              },
            }}
          />
          <Divider />

          <DatePicker
            label="DatePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            shouldDisableYear={validYear}
            shouldDisableMonth={validMonth}
            shouldDisableDate={validDay}
            slotProps={{
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    今年の今月の週末（土・日）しか入力出来ない
                  </Typography>
                ),
              },
            }}
          />
          <Divider />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample6.tsx" />
    </>
  );
};
