import { useState } from "react";
import {
  TimePicker,
  MobileTimePicker,
  DesktopTimePicker,
  StaticTimePicker,
} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { Divider, Stack, Typography } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

/** 時間のみ扱う方法 */
export const DatetimePickerSample3 = () => {
  const [value1, setValue1] = useState<Date | null>(new Date());
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ja} // 日本語化
      >
        <Stack spacing={3}>
          <TimePicker
            label="TimePickerコンポーネント"
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

          <DesktopTimePicker
            label="DesktopTimePickerコンポーネント"
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

          <MobileTimePicker
            label="MobileTimePickerコンポーネント"
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

          <StaticTimePicker value={value1} onChange={(newValue) => setValue1(newValue)} />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample3.tsx" />
    </>
  );
};
