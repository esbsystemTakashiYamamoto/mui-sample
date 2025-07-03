import { useState, useEffect } from "react";
import { Fade, Box } from "@mui/material";
import { FadeProps } from "@mui/material";

/** 標準更新フェードエフェクトProps */
export type StdFadeUpdateEffectProps = {
  /** 更新する内容 */
  content?: JSX.Element | string;
  /** タイムアウト時間(ms) */
  timeout?: FadeProps["timeout"];
};

/** 標準更新フェードエフェクト */
export const StdFadeUpdateEffect = ({
  content = "未指定",
  timeout = 1000,
}: StdFadeUpdateEffectProps) => {
  const [open, setOpen] = useState(true);
  const [mem, setMem] = useState<JSX.Element | string>();

  useEffect(() => {
    if (mem === content) return;

    setOpen(false);
    setTimeout(() => {
      setMem(content);
      setOpen(true);
    }, getTimeout(timeout));
  }, [content, mem, timeout]);

  return (
    <Fade in={open} timeout={timeout}>
      <Box>{mem}</Box>
    </Fade>
  );
};

/** タイムアウト時間を取得 */
const getTimeout = (timeout: FadeProps["timeout"]) => {
  if (typeof timeout === "number") return timeout;
  if (typeof timeout === "object" && "exit" in timeout) return timeout.exit;
  return 1000;
};
