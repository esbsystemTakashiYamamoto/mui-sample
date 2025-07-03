import { useState } from "react";
import { DatePicker, DateField, DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { jaJP } from "@mui/x-date-pickers/locales";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { Divider, Stack, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

/** 日付のみのコンポーネント */
export const DatetimePickerSample4 = () => {
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
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    カレンダーから選択する
                  </Typography>
                ),
              },
            }}
          />
          <Divider />
          <DateField
            label="DateFieldコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    年月日を入力する
                  </Typography>
                ),
              },
            }}
          />
          <Divider />

          <Typography variant="body2" color="textSecondary">
            これはDateCalendarコンポーネント
          </Typography>
          <DateCalendar value={value1} onChange={(newValue) => setValue1(newValue)} />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample4.tsx" />
    </>
  );
};
