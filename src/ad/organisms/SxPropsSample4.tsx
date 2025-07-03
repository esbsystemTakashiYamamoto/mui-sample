import { Typography, Stack } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SxPropsSample4 = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Typography
          variant="h5"
          sx={{
            color: (p) => p.palette.primary.contrastText,
            bgcolor: (p) => p.palette.primary.light,
            textAlign: "center",
            p: 1,
            transition: "all 0.5s ease",
            "&:hover": {
              bgcolor: (p) => p.palette.primary.dark,
              borderRadius: 5,
              transform: "scale(1.3)",
              letterSpacing: 3,
            },
          }}
        >
          hoverでアニメーション
        </Typography>
      </Stack>
      <FilenamePanel fileName="SxPropsSample4.tsx" />
    </>
  );
};
