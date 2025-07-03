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
  };
});

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "id", width: 80, headerClassName: "header-class" },
  {
    field: "status",
    headerName: "ステータス",
    description: "商品のステータス", // 列にポップアップで説明を追加できる
    width: 150,
    headerClassName: "header-class", // 1️⃣ ここでヘッダーのクラスを指定して
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
    headerClassName: "header-class", // 1️⃣ ここでヘッダーのクラスを指定して
    type: "number",
    valueFormatter: (p?: number) => p?.toLocaleString(),
  },
  {
    field: "quantity",
    headerName: "数量",
    width: 150,
    type: "number",
    headerClassName: "header-class", // 1️⃣ ここでヘッダーのクラスを指定して
  },
  {
    field: "total",
    headerName: "合計",
    width: 150,
    type: "number",
    headerClassName: "header-class", // 1️⃣ ここでヘッダーのクラスを指定して
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
];

export const DataGridSample4 = () => {
  return (
    <>
      <FilenamePanel fileName="DataGridSample4.tsx" />
      <Typography variant="body1" sx={{ mb: 2 }}>
        行データにはidが必須となる 内部的に絶対必要
        <br />
        DataGridの外にBoxを置いて、そこでスタイルを定義している
        <br />
        Boxで「.header-class」を含む要素のスタイルを定義して・・・
        <br />
        列の定義の「headerClassName」で「header-class」を指定している
        <br />
        DataGridのSxPropsでも効くものは効く
      </Typography>
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .header-class": {
            // 1️⃣ ヘッダーのスタイル
            // ここで使ってる・・・面倒くさ！！
            color: (p) => p.palette.primary.contrastText,
            bgcolor: (p) => p.palette.primary.dark,
          },
        }}
      >
        <DataGrid
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} // 言語設定
          rows={rows}
          columns={columns}
          sx={{
            "& .MuiDataGrid-cell": {
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell:hover": {
              bgcolor: (p) => p.palette.primary.light,
            },
            "& .MuiDataGrid-row:hover": {
              bgcolor: (p) => p.palette.grey[700],
              color: (p) => p.palette.primary.contrastText,
              borderRadius: 5,
            },
          }}
        />
      </Box>
      <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
        {/* 選択中のid: {selectionModel.join(",")} */}
      </Typography>
    </>
  );
};
