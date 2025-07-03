import { useState } from "react";
import {
  DatePicker,
  MobileDatePicker,
  DesktopDatePicker,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { Divider, Stack, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

/** 日付のみ扱う方法 */
export const DatetimePickerSample2 = () => {
  const [value1, setValue1] = useState<Date | null>(new Date());
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja} // 日本語化
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
                    実行するデバイスに応じてカレンダーアイコンの動作が変わる
                  </Typography>
                ),
              },
            }}
          />
          <Divider />

          <DesktopDatePicker
            label="DesktopDateTimePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    デスクトップでの表示に固定
                  </Typography>
                ),
              },
            }}
          />
          <Divider />

          <MobileDatePicker
            label="MobileDateTimePickerコンポーネント"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              textField: {
                helperText: (
                  <Typography variant="body2" color="textSecondary">
                    モバイルでの表示に固定
                  </Typography>
                ),
              },
            }}
          />
          <Divider />

          <StaticDatePicker
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            orientation="portrait" // 縦並び (横並びは landscape )
          />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample2.tsx" />
    </>
  );
};
