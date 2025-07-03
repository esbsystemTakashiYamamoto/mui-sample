import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar, GridRowSelectionModel } from "@mui/x-data-grid";
import { jaJP } from "@mui/x-data-grid/locales";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const rows = Array.from({ length: 10 }).map((_, i) => {
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
  },
  {
    field: "gender",
    headerName: "性別",
    width: 150,
    align: "center",
    headerAlign: "center",
    type: "string",
  },
];

export const DataGridSample2 = () => {
  // 選択中の行のidが格納される
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

  return (
    <>
      <FilenamePanel fileName="DataGridSample2.tsx" />
      <Typography variant="body1" sx={{ mb: 2 }}>
        チェックボックスで複数選択の方法
        <br />
        選択中のIDを管理する
      </Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} // 言語設定
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }} // ツールバー
          checkboxSelection // チェックボックスを表示
          onRowSelectionModelChange={(p) => setSelectionModel(p)} // 選択中の行を更新
          rowSelectionModel={selectionModel} // 選択中の行
          initialState={{
            density: "compact", // 行の高さを縮める
          }}
        />
      </Box>
      <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
        選択中のid: {selectionModel.join(",")}
      </Typography>
    </>
  );
};
