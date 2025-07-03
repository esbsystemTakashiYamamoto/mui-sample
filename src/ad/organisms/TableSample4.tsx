import { faker } from "@faker-js/faker/locale/ja";

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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

// セルのスタイル設定したコンポーネント
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // 「head」が含まれる要素に適用するスタイル・・・か？
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[800],
    fontWeight: "bold",
    fontSize: 18,
  },
}));

// 行をスタイル設定したコンポーネント
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // テーブルの奇数行に適用するスタイル
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.grey[200],
  },
  // テーブルの偶数行に適用するスタイル
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.grey[300],
  },
  // ホバーした行に適用するスタイル
  "&.MuiTableRow-root:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

/**
 * 基本的なテーブル
 * データはせいぜい1,000件まで
 * @returns
 */
export const TableSample4 = () => {
  return (
    <>
      <FilenamePanel fileName="TableSample4.tsx" />
      <Typography variant="body1">
        styledを使ったスタイリングのパターン
        <br />
        細かく設定してもJSXがごちゃごちゃしない
        <br />
        これはこれでありかも
      </Typography>
      <Typography variant="body1" color="red">
        行の文字の色の指定方法が分からない・・・
      </Typography>
      <TableContainer component={Paper} sx={{ minWidth: 650, maxHeight: 500 }} elevation={5}>
        <Table stickyHeader>
          {/* ヘッダー */}
          <TableHead>
            <TableRow>
              {/* ここで使っている */}
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell>氏名</StyledTableCell>
              <StyledTableCell>年齢</StyledTableCell>
              <StyledTableCell>性別</StyledTableCell>
              <StyledTableCell>職業</StyledTableCell>
              <StyledTableCell>趣味</StyledTableCell>
            </TableRow>
          </TableHead>

          {/* データ */}
          <TableBody>
            {rows.map((row) => (
              // ここで使っている
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.age}</StyledTableCell>
                <StyledTableCell>{row.gender}</StyledTableCell>
                <StyledTableCell>{row.jobType}</StyledTableCell>
                <StyledTableCell>{row.job}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
