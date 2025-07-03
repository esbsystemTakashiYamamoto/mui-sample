import { forwardRef } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

// ダミーデータ
const rows = Array.from({ length: 10000 }).map((_, i) => {
  return {
    id: i,
    name: faker.person.fullName(),
    age: faker.number.int({ min: 1, max: 100 }),
    gender: faker.number.int({ min: 0, max: 1 }) ? "男性" : "女性",
    jobType: faker.person.jobType(),
    job: faker.person.jobTitle(),
  };
});

/**
 * ヘッダー行の設定がポイント
 * ちゃんと型を付けないといろいろおかしくなる
 */

// ヘッダーの型
type Column = {
  width: string;
  label: string;
  align: "left" | "right" | "center";
  dataKey: keyof (typeof rows)[number]; // 👈 ここがポイント
};
// ヘッダーの定義
const columns: Column[] = [
  { width: "10px", label: "id", align: "center", dataKey: "id" },
  { width: "10px", label: "氏名", align: "left", dataKey: "name" },
  { width: "5px", label: "年齢", align: "right", dataKey: "age" },
  { width: "5px", label: "性別", align: "center", dataKey: "gender" },
  { width: "10px", label: "職種", align: "left", dataKey: "jobType" },
  { width: "50px", label: "職業", align: "left", dataKey: "job" },
];

/** テーブル全体の設定 */
const VirtuosoTableComponents: TableComponents<(typeof rows)[number]> = {
  Scroller: forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  // 一番外側のテーブルの設定っぽい
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: "separate", tableLayout: "fixed" }} />
  ),
  // ヘッダー行の設定
  TableHead: forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  // テーブルのデータ領域の設定
  TableBody: forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} sx={{ bgcolor: (p) => p.palette.grey[50] }} />
  )),
  // データ行の設定
  TableRow: (props) => (
    <TableRow
      {...props}
      sx={{
        "&:nth-of-type(odd)": { bgcolor: (p) => p.palette.grey[100] }, // 奇数行の背景色
        "&:nth-of-type(even)": { bgcolor: (p) => p.palette.grey[300] }, // 偶数行の背景色
        "&:hover": { bgcolor: (p) => p.palette.primary.light }, // この順番で書けばhoverが効く
      }}
    /> // hoverで色を付けたり出来る
  ),
};

/** ヘッダー行の設定 */
const fixedHeaderContent = () => {
  return (
    <TableRow>
      {columns.map((n) => (
        <TableCell
          key={n.dataKey}
          variant="head"
          align={n.align}
          sx={{
            fontWeight: "bold",
            bgcolor: (p) => p.palette.primary.light, // ヘッダー行の背景色
            color: (p) => p.palette.primary.contrastText, // ヘッダー行の文字色
            fontFamily: "Sawarabi Mincho", // ヘッダー行のフォント
            fontSize: "1.3rem", // ヘッダー行のフォントサイズ
            width: n.width,
          }}
        >
          {n.label}
        </TableCell>
      ))}
    </TableRow>
  );
};

/** 行の設定 */
const rowContent = (_: number, row: (typeof rows)[number]) => {
  return (
    <>
      {columns.map((n, i) => (
        <TableCell
          key={i}
          width={n.width}
          align={n.align}
          sx={{ fontFamily: "Sawarabi Gothic" }}
        >
          {/* 👇 ヘッダーの定義はここに効いてくる */}
          {row[n.dataKey]}
        </TableCell>
      ))}
    </>
  );
};

/** 本体 */
export const TableSample2 = () => {
  return (
    <>
      <FilenamePanel fileName="TableSample2.tsx" />
      <Paper sx={{ height: 600, width: "100%" }} elevation={5}>
        <TableVirtuoso
          data={rows} // 表示するデータ
          components={VirtuosoTableComponents} // テーブル全体の設定
          fixedHeaderContent={fixedHeaderContent} // ヘッダー行の設定
          itemContent={rowContent} // 行の設定
        />
      </Paper>
      <Typography
        variant="h6"
        sx={{
          mt: 1,
          textAlign: "right",
          color: (p) => p.palette.secondary.light,
          fontFamily: "Sawarabi Gothic",
        }}
      >
        データ件数：{rows.length.toLocaleString()}件
      </Typography>
    </>
  );
};
