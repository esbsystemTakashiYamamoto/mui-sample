import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import {
  Home,
  LooksOne,
  ExpandLess,
  ExpandMore,
  LooksTwo,
  Looks3,
} from "@mui/icons-material";
import { FilenamePanel } from "../atoms/FilenamePanel";

// NOTE: メニューのコラプス展開状態 ここに増やしていく
type MenuCollapseState = {
  // マテリアルUI
  materialUi: boolean;
  // カスタム
  customization: boolean;
  // muiX
  muiX: boolean;
};

/** メニューコラプスの初期状態 */
const initialMenuCollapseState: MenuCollapseState = {
  materialUi: false,
  customization: false,
  muiX: false,
};

/** メニューバープロップス */
type Props = {
  /** メニューの名称 */
  label?: string;
  /** メニューを開閉する関数 */
  menuToggle?: () => void;
};

/** メニュー項目の高さ */
const MENU_ITEM_HEIGHT = 50;
/**
 * メニューバー
 * @param param0 メニューバープロップス
 * @returns
 */
export const MenuBar = ({ label = "Menu", menuToggle = () => {} }: Props) => {
  const nav = useNavigate();

  // トップメニュー開閉状態管理
  const [open, setOpen] = useImmer<MenuCollapseState>(initialMenuCollapseState);
  /** 選択中のメニュー番号 */
  const [selected, setSelected] = useState(0);

  /**  メニュー選択変更 */
  const doChangeSelected = (index: number, path: string) => {
    nav(path);
    setSelected(index);
    if (index === 0) {
      setOpen(initialMenuCollapseState);
    }
  };

  /** メニューコラプスの開閉 */
  const toggleMenuCollapse = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    target: keyof MenuCollapseState
  ) => {
    ev.stopPropagation(); // イベントの伝播を止める
    setOpen((p) => ({ ...p, [target]: !p[target] }));
  };

  return (
    <Box onClick={menuToggle}>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          mb: 1,
          color: (p) => p.palette.primary.main,
          textAlign: "center",
          fontFamily: "Sawarabi Gothic",
        }}
      >
        {label}
      </Typography>
      <Divider />
      <List>
        {/* NOTE: ホーム */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => doChangeSelected(0, "/mui-sample/")}
            selected={selected === 0}
          >
            <ListItemIcon>
              <Home color="secondary" />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItemButton>
        </ListItem>

        {/* NOTE: material-ui関係 */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={(ev) => toggleMenuCollapse(ev, "materialUi")}
          >
            <ListItemIcon>
              <LooksOne color="primary" />
            </ListItemIcon>
            <ListItemText primary="material-ui" />
            {open.materialUi ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open.materialUi} timeout="auto" unmountOnExit>
          <Divider />

          {/* NOTE: Autocomplete */}
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(1, "/material-ui/autocomplete")}
              selected={selected === 1}
            >
              <ListItemText
                primary="Autocomplete"
                secondary="便利なコンボボックス"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Dialog */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(10, "/material-ui/dialog")}
              selected={selected === 2}
            >
              <ListItemText
                primary="Dialog"
                secondary="ダイヤログ"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: List */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(4, "/material-ui/list")}
              selected={selected === 3}
            >
              <ListItemText
                primary="List"
                secondary="リスト形式の選択のコンポーネント"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Popover */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(7, "/material-ui/popover")}
              selected={selected === 4}
            >
              <ListItemText
                primary="PopOver"
                secondary="ポップオーバー"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Select */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(3, "/material-ui/select")}
              selected={selected === 5}
            >
              <ListItemText
                primary="Select"
                secondary="選択のコンポーネント"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Slider */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(5, "/material-ui/slider")}
              selected={selected === 6}
            >
              <ListItemText
                primary="Slider"
                secondary="スライダーのコンポーネント"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Snackbar */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(9, "/material-ui/snackbar")}
              selected={selected === 7}
            >
              <ListItemText
                primary="SnackBar"
                secondary=" メッセージ通知"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: SpeedDial */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(11, "/material-ui/speedDial")}
              selected={selected === 8}
            >
              <ListItemText
                primary="SpeedDial"
                secondary="スピードダイヤル"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Switch */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(5, "/material-ui/switch")}
              selected={selected === 9}
            >
              <ListItemText
                primary="Switch"
                secondary="セレクトスイッチ"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Table */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(31, "/material-ui/table")}
              selected={selected === 10}
            >
              <ListItemText
                primary="Table"
                secondary="シンプルなテーブル形式の表示"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: TextField */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(2, "/material-ui/textfield")}
              selected={selected === 11}
            >
              <ListItemText
                primary="TextField"
                secondary="文字入力コンポーネント"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: ToggleButton */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(6, "/material-ui/toggleButton")}
              selected={selected === 12}
            >
              <ListItemText
                primary="ToggleButton"
                secondary="トグルボタン"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Tooltip */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(8, "/material-ui/tooltip")}
              selected={selected === 13}
            >
              <ListItemText
                primary="ToolTip"
                secondary="簡単な説明表示"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Transitions */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(12, "/material-ui/Transitions")}
              selected={selected === 14}
            >
              <ListItemText
                primary="Transitions"
                secondary="アニメーション"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: BackdropAndSnackbar */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() =>
                doChangeSelected(13, "/material-ui/BackdropAndSnackbar")
              }
              selected={selected === 15}
            >
              <ListItemText
                primary="BackdropAndSnackbar"
                secondary="通知系のコンポーネント"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>

        {/* NOTE: MUI X関係 */}
        <ListItem disablePadding>
          <ListItemButton onClick={(ev) => toggleMenuCollapse(ev, "muiX")}>
            <ListItemIcon>
              <LooksTwo color="primary" />
            </ListItemIcon>
            <ListItemText primary="MUI X" />
            {open.muiX ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open.muiX} timeout="auto" unmountOnExit>
          <Divider />

          {/* NOTE: Data Grid */}
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(51, "/mui-x/data-grid")}
              selected={selected === 51}
            >
              <ListItemText
                primary="Data Grid"
                secondary="表形式の多機能グリッド"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Date and Time Pickers */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(52, "/mui-x/dateTimePickers")}
              selected={selected === 52}
            >
              <ListItemText
                primary="Data and Time Pickers"
                secondary="日付・時間を扱うコンポーネント"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            {/* NOTE: Charts */}
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(53, "/mui-x/charts")}
              selected={selected === 53}
            >
              <ListItemText
                primary="Charts"
                secondary="グラフ"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>

        {/* NOTE: customization関係----- */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={(ev) => toggleMenuCollapse(ev, "customization")}
          >
            <ListItemIcon>
              <Looks3 color="primary" />
            </ListItemIcon>
            <ListItemText primary="Customization" />
            {open.customization ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open.customization} timeout="auto" unmountOnExit>
          <Divider />

          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() =>
                doChangeSelected(71, "/customization/hotToCustomize")
              }
              selected={selected === 71}
            >
              <ListItemText
                primary="Muiカスタマイズ"
                secondary="カスタマイズ方法"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(72, "/customization/theme")}
              selected={selected === 72}
            >
              <ListItemText
                primary="Theme"
                secondary="Themeの使い方"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />

            <ListItemButton
              sx={{ pl: 4, height: MENU_ITEM_HEIGHT }}
              onClick={() => doChangeSelected(73, "/customization/sxProps")}
              selected={selected === 73}
            >
              <ListItemText
                primary="SxProps"
                secondary="SxPropsの使い方"
                primaryTypographyProps={{ color: "primary" }}
              />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>
      </List>
      <FilenamePanel fileName="MenuBar.tsx" />
    </Box>
  );
};
