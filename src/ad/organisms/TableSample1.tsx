import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker/locale/ja";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { FilenamePanel } from "../atoms/FilenamePanel";

// デミーデータ
const rows = Array.from({ length: 100 }).map((_, i) => {
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
 * 基本的なテーブル
 * データはせいぜい1,000件まで
 * @returns
 */
export const TableSample1 = () => {
  const [filteredRows, setFilteredRows] = useState(rows); // フィルターしたデータ
  const [filterText, setFilterText] = useState(""); // フィルター文字列

  useEffect(() => {
    if ("" === filterText) {
      setFilteredRows(rows);
    } else {
      const d = rows.filter((row) => {
        return row.name.includes(filterText);
      });

      setFilteredRows(d);
    }
  }, [filterText]);

  return (
    <>
      <FilenamePanel fileName="TableSample1.tsx" />
      <TableContainer component={Paper} sx={{ minWidth: 650, maxHeight: 600 }} elevation={5}>
        <Table stickyHeader>
          {/* ヘッダー */}
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>
                <Typography variant="body1">氏名</Typography>
                <TextField
                  label="フィルター"
                  variant="standard"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </TableCell>
              <TableCell>年齢</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職業</TableCell>
              <TableCell>趣味</TableCell>
            </TableRow>
          </TableHead>

          {/* データ */}
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.jobType}</TableCell>
                <TableCell>{row.job}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
