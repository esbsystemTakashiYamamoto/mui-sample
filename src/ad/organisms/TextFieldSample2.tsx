import { useState } from "react";
import { TextField, Typography, Box, InputAdornment, IconButton } from "@mui/material";
import { AccountCircle, Download } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const TextFieldSample2 = () => {
  const [value, setValue] = useState("");

  const doChange = (value: string) => setValue(value);

  return (
    <>
      <Box>
        <TextField
          label="ラベル"
          value={value}
          onChange={(ev) => doChange(ev.target.value)}
          fullWidth
          helperText="テキストフィールド内にアイコンを付けられる👍"
          sx={{ mb: 2 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <Box>
        <TextField
          label="ラベル"
          value={value}
          onChange={(ev) => doChange(ev.target.value)}
          fullWidth
          helperText="文字で付けることも出来る"
          sx={{ mb: 2 }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">重量</InputAdornment>,
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        />
      </Box>
      <Box>
        <TextField
          label="ラベル"
          value={value}
          onChange={(ev) => doChange(ev.target.value)}
          helperText="ボタンも付けられる"
          sx={{ mb: 2 }}
          fullWidth
          slotProps={{
            inputLabel: {},
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setValue("")}>
                    <Download color="secondary" />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Typography
        noWrap
        variant="h6"
        sx={{ color: (p) => p.palette.grey[600] }}
      >{`入力値: ${value}`}</Typography>
      <FilenamePanel fileName="TextFieldSample2.tsx" />
    </>
  );
};
