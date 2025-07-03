import { Box, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";

type Props = {
  /** ラベル */
  label?: string;
  /** チェック状態 */
  value?: boolean;
  /** チェック状態更新 */
  setValue?: (value: boolean) => void;
};

export const StdSwitch = ({ label = "未指定", value = false, setValue = () => {} }: Props) => {
  return (
    <Box>
      <FormGroup sx={{ mt: 0, ml: 0 }}>
        <FormControlLabel
          control={<Switch checked={value} onChange={(e) => setValue(e.target.checked)} />}
          label={
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: (p) => p.palette.grey[600],
              }}
            >
              {label}
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );
};
