import { Box, Typography, Chip } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { jaJP } from "@mui/x-data-grid/locales";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const rows = Array.from({ length: 200 }).map((_, i) => {
  return {
    id: i + 1, // id列は必須と考えたほうがいい
    name: faker.person.fullName(),
    age: faker.number.int({ min: 1, max: 100 }),
    gender: faker.number.int({ min: 0, max: 1 }) ? "男性" : "女性",
  };
});

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "id", width: 80 },
  { field: "name", headerName: "名前", width: 150 },
  {
    field: "age",
    headerName: "年齢",
    width: 100,
    type: "number",
    renderCell: (params) => (
      <Typography
        variant="h6"
        sx={{
          bgcolor: (p) => p.palette.grey[200],
          m: 1,
          borderRadius: 10,
          textAlign: "center",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
          "&:hover": {
            bgcolor: (p) => p.palette.grey[800],
            transform: "scale(1.5)",
          },

          color: (p) => {
            const {
              row: { age },
            } = params;
            if (age < 20) {
              return p.palette.error.dark;
            } else if (age < 30) {
              return p.palette.warning.dark;
            } else {
              return p.palette.primary.dark;
            }
          },
        }}
      >
        {params.row.age}
      </Typography>
    ),
  },
  {
    field: "gender",
    headerName: "性別",
    width: 150,
    align: "center",
    headerAlign: "center",
    type: "string",
    valueGetter: (value, row) => {
      // console.log(value); // この列の値が取得できる
      // console.log(row); // この行の値がオブジェクトとして取得できる
      return value; // 単純な値しか返せないっぽい
    },
  },
  {
    field: "calc", // データに無いキーを指定すると、自動的に作成される
    headerName: "計算", // 👆 その場合はここで列名を指定できる
    valueGetter: (_, row) => {
      return row["age"] * 10;
    },
  },
  {
    field: "render",
    headerName: "JSXを描いてみる",
    renderCell: (params) => {
      // JSXを書くにはrenderCellを使う
      const {
        row: { gender },
      } = params;
      return (
        <>
          <Chip
            label={gender}
            sx={{
              bgcolor: (p) =>
                "男性" === gender ? p.palette.primary.light : p.palette.error.light,
            }}
          />
        </>
      );
    },
  },
];

export const DataGridSample1 = () => {
  return (
    <>
      <FilenamePanel fileName="DataGridSample1.tsx" />
      <Typography variant="body1" sx={{ mb: 2 }}>
        基本的なグリッド 簡単にそれっぽくなる
        <br />
        セルにJSXを入れることができる
      </Typography>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} // 言語設定
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }} // ツールバー
          checkboxSelection // チェックボックスを表示
        />
      </Box>
    </>
  );
};
