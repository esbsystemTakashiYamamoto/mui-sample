import { Paper, Typography, Grid2 } from "@mui/material";

type Props = {
  height?: number | string;
  size?: number;
  components: {
    label: string;
    content: JSX.Element;
  }[];
};

export const GridTemplate1 = ({
  components = [{ label: "未指定", content: <>未指定</> }],
  size = 4,
  height = "220px",
}: Props) => {
  return (
    <>
      <Grid2 container spacing={2}>
        {components.map((n, i) => (
          <Grid2 key={i} size={size}>
            <Paper sx={{ p: 3, height }} elevation={5}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {n.label}
              </Typography>
              {n.content}
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
