import { Typography, Stack } from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const SxPropsSample2 = () => {
  return (
    <>
      <Stack spacing={5} sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          sx={{
            color: (p) => p.palette.primary.dark,
            fontFamily: "Sawarabi Mincho",
            bgcolor: (p) => p.palette.grey[100],
            p: 2,
            borderRadius: 10,
            textAlign: "center",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            "&:hover": {
              bgcolor: (p) => p.palette.primary.light,
              boxShadow: 0,
              borderRadius: 5,
              color: "white",
            },
          }}
        >
          CSSのhoverをsxでやる方法
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            transform: "scale(1.2) rotate(10deg)",
          }}
        >
          transform（変形）
        </Typography>
      </Stack>
      <FilenamePanel fileName="SxPropsSample2.tsx" />
    </>
  );
};
