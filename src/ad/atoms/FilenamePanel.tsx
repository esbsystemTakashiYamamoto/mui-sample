import { Typography } from "@mui/material";

export const FilenamePanel = ({ fileName = "未指定" }: { fileName: string }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        ml: 1,
        color: (p) => p.palette.grey[600],
        fontFamily: "Sawarabi Gothic",
      }}
    >
      {fileName}
    </Typography>
  );
};
