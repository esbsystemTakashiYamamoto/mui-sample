import { Box, Chip, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { jaJP } from "@mui/x-data-grid/locales";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const rows = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i + 1, // id列は必須と考えたほうがいい
    status: faker.number.int({ min: 0, max: 1 }) ? "success" : "failed",
    subTotal: faker.number.int({ min: 100, max: 1000 }),
    quantity: faker.number.int({ min: 1, max: 50 }),
    dummy: faker.number.int({ min: 0, max: 1 }),
  };
});

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "id", width: 80 },
  {
    field: "status",
    headerName: "ステータス",
    description: "商品のステータス", // 列にポップアップで説明を追加できる
    width: 150,
    renderCell: (params) => {
      return (
        <Chip label={params.value} color={params.value === "success" ? "success" : "error"} />
      );
    },
  },
  {
    field: "subTotal",
    headerName: "小計",
    width: 150,
    type: "number",
    valueFormatter: (p?: number) => p?.toLocaleString(),
  },
  {
    field: "quantity",
    headerName: "数量",
    width: 150,
    type: "number",
  },
  {
    field: "total",
    headerName: "合計",
    width: 150,
    type: "number",
    valueGetter: (_, row) => row.subTotal * row.quantity, // ここで合計の値を作って
    renderCell: (p) => {
      // ここで使う
      // p.valueとすれば、この列の値が取得できる
      // p.row.～とすれば、この行の値がオブジェクトとして取得できる
      return (
        <>
          <Typography variant="body2" color="secondary" sx={{ mb: -2 }}>
            ￥{p.value.toLocaleString()}
          </Typography>
          <meter
            value={p.value}
            min={0}
            max={30_000}
            low={10_000}
            high={20_000}
            optimum={30_000}
          />
        </>
      );
    },
  },
  {
    field: "dummy",
    hideable: false, // 列の操作を無効にできる
  },
];

export const DataGridSample3 = () => {
  return (
    <>
      <FilenamePanel fileName="DataGridSample3.tsx" />
      <Typography variant="body1" sx={{ mb: 2 }}>
        セルや行の表示は列の定義(GridColDef)でやる
        <br />
        計算した値を新しい列に追加したりできる
        <br />
        列のヘッダー行に３点ドットがあって、ここからいろいろ出来る
        <br />
        その気になれば、これもカスタマイズ出来る
      </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} // 言語設定
          rows={rows}
          columns={columns}
          columnHeaderHeight={100} // ヘッダーの高さを指定できる
          columnVisibilityModel={{
            dummy: false, // dummy列を非表示
          }}
        />
      </Box>
      <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
        {/* 選択中のid: {selectionModel.join(",")} */}
      </Typography>
    </>
  );
};
