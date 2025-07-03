import { Stack, Typography, Button, Box, Divider } from "@mui/material";
import { Launch } from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

type Props = {
  label?: string;
  message?: string[];
  buttonProps?: {
    buttonLabel?: string;
    url?: string;
  };
};

/** ページのヘッダー */
export const PageHeader = ({
  label = "未指定",
  message = ["未指定"],
  buttonProps = {
    buttonLabel: "未指定",
    url: "",
  },
}: Props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* タイトルラベルとメッセージ */}
        <Stack direction="row" spacing={5} alignItems="end" sx={{ mt: 2, flexGrow: 1 }}>
          {/* タイトルラベル */}
          <Typography
            variant="h3"
            sx={{ fontFamily: "Sawarabi Mincho", color: (p) => p.palette.primary.dark }}
          >
            <FilenamePanel fileName="PageHeader.tsx" />
            {label}
          </Typography>

          {/* メッセージ */}
          <Typography
            variant="body1"
            sx={{ fontFamily: "Sawarabi Gothic", color: (p) => p.palette.grey[600] }}
          >
            {message.map((m, i) => {
              return (
                <span key={i}>
                  {m}
                  <br />
                </span>
              );
            })}
          </Typography>
        </Stack>

        {/* リンクのボタン */}
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Launch />}
            onClick={() => window.open(buttonProps.url)}
            disabled={!buttonProps.url}
          >
            {buttonProps.buttonLabel}
          </Button>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
