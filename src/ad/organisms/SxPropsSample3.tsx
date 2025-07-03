import { Typography, Stack } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SxPropsSample3 = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          sx={{
            color: (p) => p.palette.primary.dark,
            fontFamily: "Sawarabi Mincho",
            bgcolor: (p) => p.palette.grey[100],
            p: 2,
            borderRadius: 10,
            textAlign: "center",
            // ここからアニメーションの設定
            animation: "keyframe 2s linear infinite ",
            "@keyframes keyframe": {
              "0%": {
                transform: "rotate(0deg)",
                color: "red",
              },
              "30%": {
                transform: "rotate(180deg)",
                scale: 2,
                color: (p) => p.palette.grey[50],
                bgcolor: (p) => p.palette.primary.dark,
              },
              "100%": {
                transform: "rotate(360deg)",
                scale: 0.5,
              },
            },
          }}
        >
          keyframeアニメーション
        </Typography>
      </Stack>
      <FilenamePanel fileName="SxPropsSample3.tsx" />
    </>
  );
};
