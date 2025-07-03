import { Chip, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, DataGridProps, GridColDef, gridClasses } from "@mui/x-data-grid";
import { jaJP } from "@mui/x-data-grid/locales";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

type RowModel = {
  id: number;
  status: "success" | "failed";
  subTotal: number;
  quantity: number;
};

const rows: RowModel[] = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i + 1, // id列は必須と考えたほうがいい
    status: faker.number.int({ min: 0, max: 1 }) ? "success" : "failed",
    subTotal: faker.number.int({ min: 100, max: 1000 }),
    quantity: faker.number.int({ min: 1, max: 50 }),
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
];

const ODD_OPACITY = 0.2;

const StyledDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  "& .MuiDataGrid-cell": {
    fontWeight: "bold",
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
  },
}));

export const DataGridSample5 = () => {
  return (
    <>
      <FilenamePanel fileName="DataGridSample5.tsx" />
      <Typography variant="body1" sx={{ mb: 2 }}>
        行データにはidが必須となる 内部的に絶対必要
        <br />
        「styled」でスタイルを当たる方法
        <br />
        DataGridの「getRowClassName」を使って動的にスタイルを変更できる
        <br />
        ・・・いまいちよく分からない 🤪
      </Typography>

      <StyledDataGrid
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} // 言語設定
        rows={rows}
        columns={columns as GridColDef[]} //XXX: ❓❓型エラー回避❓❓
        getRowClassName={(p) => (p.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
      />
    </>
  );
};
