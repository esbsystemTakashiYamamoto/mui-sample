import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import {
  Gauge,
  gaugeClasses,
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { FilenamePanel } from "../atoms/FilenamePanel";

const GaugePointer = () => {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  if (!valueAngle) return null;

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="green" />
      <path d={`M${cx} ${cy} L${target.x} ${target.y}`} stroke="green" strokeWidth={3} />
    </g>
  );
};

/** ゲージ */
export const ChartsSample8 = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <TextField
        label="値"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Stack direction={"row"}>
        <Gauge width={100} height={100} value={value} />
        <Gauge width={100} height={100} value={value} startAngle={-90} endAngle={90} />
        <Gauge width={100} height={100} value={value} valueMax={100} valueMin={0} />
        <Gauge width={100} height={100} value={value} innerRadius={20} outerRadius={40} />
      </Stack>

      <Stack direction={"row"}>
        <Gauge
          width={150}
          height={150}
          value={value}
          startAngle={-110}
          endAngle={110}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontWeight: "bold",
              fontSize: "1.5rem",
              "& text": {
                // NOTE: 値の色を変える方法
                fill: (p) => p.palette.grey[500],
              },
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: (p) => p.palette.secondary.main,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: (p) => p.palette.error.light,
            },
          }}
          text={({ value, valueMax }) => `${value}/${valueMax}`}
        />

        <GaugeContainer
          width={150}
          height={150}
          startAngle={-110}
          endAngle={110}
          value={value}
        >
          <GaugeReferenceArc style={{ fill: "red" }} />
          <GaugeValueArc style={{ fill: "yellow" }} />
          <GaugePointer />
        </GaugeContainer>
      </Stack>
      <FilenamePanel fileName="ChartsSample8.tsx" />
    </>
  );
};
