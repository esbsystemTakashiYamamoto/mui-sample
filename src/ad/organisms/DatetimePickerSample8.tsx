import { useState } from "react";
import { DatePicker, StaticDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { jaJP } from "@mui/x-date-pickers/locales";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale";
import { Divider, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FilenamePanel } from "../atoms/FilenamePanel";

/** 日付のみのコンポーネントのバリデーション */
export const DatetimePickerSample8 = () => {
  const [value1, setValue1] = useState<Date | null>(new Date());
  const theme = useTheme();
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
            slotProps={{}}
          />
          <Divider />

          <StaticDatePicker
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            slotProps={{
              yearButton: {
                sx: {
                  bgcolor: theme.palette.grey[300],
                  "&:hover": {
                    bgcolor: theme.palette.grey[400],
                  },
                },
              },
              toolbar: {
                toolbarFormat: "yyyy年MM月dd日",
                sx: {
                  bgcolor: theme.palette.grey[200],
                  borderRadius: 5,
                  boxShadow: theme.shadows[1],
                },
              },
              actionBar: {
                actions: ["today", "accept", "clear", "cancel"],
              },
            }}
          />
        </Stack>
      </LocalizationProvider>
      <FilenamePanel fileName="DatetimePickerSample8.tsx" />
    </>
  );
};
