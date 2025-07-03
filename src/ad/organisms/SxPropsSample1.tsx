import { Typography, Stack } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SxPropsSample1 = () => {
  return (
    <>
      <Stack spacing={2}>
        <Typography>
          muiのコンポーネントはsxプロパティを持っている
          <br />
          CSSでやるよりsxでやる・・・CSSハードル高すぎ
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ mt: 1 }}>
        <Typography
          variant="h5"
          sx={{
            color: (p) => p.palette.primary.dark,
            fontFamily: "Sawarabi Mincho",
            bgcolor: (p) => p.palette.grey[400],
            p: 2,
            borderRadius: 10,
            textAlign: "center",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
          }}
        >
          文字です
        </Typography>
      </Stack>
      <FilenamePanel fileName="SxPropsSample1.tsx" />
    </>
  );
};
