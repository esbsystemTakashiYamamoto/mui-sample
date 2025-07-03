import { forwardRef, useState } from "react";
import {
  Button,
  Paper,
  Stack,
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
const rows = Array.from({ length: 500 }).map((_, i) => {
  return {
    id: i,
    name: faker.person.fullName(),
    age: faker.number.int({ min: 1, max: 100 }),
    gender: faker.number.int({ min: 0, max: 1 }) ? "男性" : "女性",
    edit: "",
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
  { width: "10px", label: "編集", align: "center", dataKey: "edit" },
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
    <TableHead
      {...props}
      ref={ref}
      sx={{
        bgcolor: "background.paper", // これをやならないとヘッダー行がスクロールのときに透ける
      }}
    />
  )),
  // テーブルのデータ領域の設定
  TableBody: forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
  // データ行の設定
  TableRow: (props) => <TableRow {...props} />,
};

/** ヘッダー行の設定 */
const fixedHeaderContent = () => {
  return (
    <TableRow>
      {columns.map((n) => (
        <TableCell key={n.dataKey} variant="head">
          {n.label}
        </TableCell>
      ))}
    </TableRow>
  );
};

/** データ行の設定 */
const rowContent = (
  _: number,
  row: (typeof rows)[number],
  setRowId: (id: (typeof rows)[number]["id"]) => void
) => {
  return (
    <>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.age}</TableCell>
      <TableCell>{row.gender}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={() => setRowId(row.id)}>
            編集
          </Button>
          <Button variant="outlined" color="secondary">
            削除
          </Button>
        </Stack>
      </TableCell>
    </>
  );
};

/** 本体 */
export const TableSample3 = () => {
  const [editRow, setEditRow] = useState<(typeof rows)[number]["id"]>();

  const doEditRow = (id: (typeof rows)[number]["id"]) => {
    setEditRow(id);
  };

  /** 💡 行の設定 */
  // const rowContent = (_: number, row: (typeof rows)[number]) => {
  //   return (
  //     <>
  //       <TableCell>{row.id}</TableCell>
  //       <TableCell>{row.name}</TableCell>
  //       <TableCell>{row.age}</TableCell>
  //       <TableCell>{row.gender}</TableCell>
  //       <TableCell>
  //         <Stack direction="row" spacing={1}>
  //           <Button variant="outlined" onClick={() => doEditRow(row.id)}>
  //             編集
  //           </Button>
  //           <Button variant="outlined" color="secondary">
  //             削除
  //           </Button>
  //         </Stack>
  //       </TableCell>
  //     </>
  //   );
  // };

  return (
    <>
      <FilenamePanel fileName="TableSample3.tsx" />
      <Paper sx={{ height: 600, width: "100%" }} elevation={5}>
        <TableVirtuoso
          data={rows} // 表示するデータ
          components={VirtuosoTableComponents} // テーブル全体の設定
          fixedHeaderContent={fixedHeaderContent} // ヘッダー行の設定
          // itemContent={rowContent} // 💡 行の設定
          itemContent={(index, row) => rowContent(index, row, doEditRow)} // 行の設定
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
        編集が必要な行のIDは: {editRow ?? "なし"}
      </Typography>
    </>
  );
};
