import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { MenuBar } from "./MenuBar";
import { FilenamePanel } from "../atoms/FilenamePanel";

export type TitleBarProps = {
  label?: string;
};

// アプリケーションタイトルバー
export const TitleBar = ({ label = import.meta.env.VITE_APP_NAME }: TitleBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false); // メニューバーの開閉状態
  const toggleDrawer = () => setMenuOpen((p) => !p); // メニューバーの開閉状態を反転

  return (
    <>
      {/* タイトルバー */}
      <AppBar position="static">
        {/* ツールバー */}
        <Toolbar className="wave2">
          {/* アイコンボタン */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* アプリケーション名 */}
          <Typography variant="h4" sx={{ flexGrow: 1, fontFamily: "DotGothic16" }}>
            {label}
          </Typography>

          {/* アプリケーションバージョン */}
          <Typography variant="inherit" sx={{ fontFamily: "Sawarabi Gothic", mt: 3 }}>
            ver: {APP_VERSION}
            <FilenamePanel fileName="TitleBar.tsx" />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* メニューバー */}
      <Drawer
        sx={{ flexShrink: 0, "& .MuiDrawer-paper": { width: "300px" } }}
        open={menuOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        <MenuBar menuToggle={toggleDrawer} />
      </Drawer>
    </>
  );
};
