import { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  Inbox,
  Drafts,
  StarBorder,
  ExpandLess,
  ExpandMore,
  Delete,
} from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

export const ListSample1 = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  const doChangeSelected = (idx: number) => setSelected(idx);

  return (
    <>
      <FilenamePanel fileName="ListSample1.tsx" />
      {/* ここが一番外 */}
      <List>
        <ListItem disablePadding sx={{ height: 60 }}>
          <ListItemButton selected={selected === 1} onClick={() => doChangeSelected(1)}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" secondary="ここにも書ける" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ height: 60 }}>
          <ListItemButton selected={selected === 2} onClick={() => doChangeSelected(2)}>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Starred" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {/* コラプスの中にListを入れる */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selected === 3}
                onClick={() => doChangeSelected(3)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selected === 4}
                onClick={() => doChangeSelected(4)}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" onClick={() => setMessage("クリックした")}>
                  <Delete />
                </IconButton>
              }
            >
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selected === 5}
                onClick={() => doChangeSelected(5)}
              >
                <ListItemIcon>
                  <StarBorder color="error" />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
      {message}
    </>
  );
};
