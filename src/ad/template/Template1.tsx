import { Stack } from "@mui/material";

type Props = {
  header?: JSX.Element;
  content?: JSX.Element;
};

/** 縦のレイアウト */
export const Template1 = ({ header = <></>, content = <></> }: Props) => {
  return (
    <>
      <Stack spacing={2}>
        {header}
        {content}
      </Stack>
    </>
  );
};
