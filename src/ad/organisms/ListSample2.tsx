import { useState } from "react";
import {
  ListItem,
  ListItemText,
  Paper,
  Box,
  Typography,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { Notes, Delete } from "@mui/icons-material";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

// ダミーデータ
const rows = Array.from({ length: 1000 }).map((_, i) => {
  // この構造に意味がある
  return {
    id: i, // idを明示的に振ること
    label: faker.person.fullName(), // 表示するキー名はlabelにする
  };
});

const renderRow = (props: ListChildComponentProps, setValue: (value: number) => void) => {
  const { index, style } = props;

  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => setValue(index)}>
          <Delete />
        </IconButton>
      }
    >
      <ListItemIcon>
        <Notes />
      </ListItemIcon>
      <ListItemText primary={rows[index].label} secondary={`id: ${rows[index].id}`} />
    </ListItem>
  );
};

export const ListSample2 = () => {
  const [select, setSelect] = useState(0);
  const doChange = (value: number) => setSelect(value);
  return (
    <Paper sx={{ p: 2, width: 360, height: 500 }}>
      <FilenamePanel fileName="ListSample2.tsx" />
      <Typography variant="h5" sx={{ mb: 2 }}>
        {rows.length.toLocaleString()}件のデータ
      </Typography>
      <Box sx={{ width: "100%", height: 400, maxWidth: 360, bgcolor: "background.paper" }}>
        <FixedSizeList
          height={400}
          width={360}
          itemSize={60}
          itemCount={rows.length}
          overscanCount={5}
        >
          {(param) => renderRow(param, doChange)}
        </FixedSizeList>
      </Box>
      <Typography
        variant="body1"
        sx={{ mt: 2 }}
      >{`クリックした項目のID: ${select}`}</Typography>
    </Paper>
  );
};
