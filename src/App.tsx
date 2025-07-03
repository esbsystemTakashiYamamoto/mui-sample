import "./App.css";

import { useRoutes } from "react-router-dom";
import { Container } from "@mui/material";

// NOTE: コンポーネント
import { TitleBar } from "./ad/molecules/TitleBar";

//NOTE: フォントの読込
import "@fontsource/sawarabi-gothic";
import "@fontsource/sawarabi-mincho";
import "@fontsource/rocknroll-one";
import "@fontsource/dotgothic16";

// NOTE: ページ読み込み
import { Home } from "./ad/page/Home";
import { MuiTable } from "./ad/page/MuiTable";
import { MuiAutocomplete } from "./ad/page/MuiAutocomplete";
import { MuiTextField } from "./ad/page/MuiTextField";
import { MuiSelect } from "./ad/page/MuiSelect";
import { MuiList } from "./ad/page/MuiList";
import { MuiSwitch } from "./ad/page/MuiSwitch";
import { MuiSlider } from "./ad/page/MuiSlider";
import { MuiToggleButton } from "./ad/page/MuiToggleButton";
import { MuiPopover } from "./ad/page/MuiPopover";
import { MuiTooltip } from "./ad/page/MuiTooltip";
import { MuiSnackbar } from "./ad/page/MuiSnackbar";
import { MuiDialog } from "./ad/page/MuiDialog";
import { MuiSpeedDial } from "./ad/page/MuiSpeedDial";
import { MuiTransitions } from "./ad/page/MuiTransitions";
import { MuiBackdropAndSnackbar } from "./ad/page/MuiBackdropAndSnackbar";
import { MuiTheme } from "./ad/page/MuiTheme";
import { MuiSxProps } from "./ad/page/MuiSxProps";
import { MuiDataGrid } from "./ad/page/MuiDataGrid";
import { MuiCustomize } from "./ad/page/MuiCustomize";
import { MuiDateTimePickers } from "./ad/page/MuiDateTimePickers";
import { MuiCharts } from "./ad/page/MuiCharts";

// NOTE: 背景コンポーネント

/** メインアプリケーション */
function App() {
  // NOTE: ルーティング
  const elements = useRoutes([
    {
      path: "/mui-sample/",
      element: <Home />,
    },
    {
      path: "/material-ui/table",
      element: <MuiTable />,
    },
    {
      path: "/material-ui/autocomplete",
      element: <MuiAutocomplete />,
    },
    {
      path: "/material-ui/textfield",
      element: <MuiTextField />,
    },
    {
      path: "/material-ui/select",
      element: <MuiSelect />,
    },
    {
      path: "/material-ui/list",
      element: <MuiList />,
    },
    {
      path: "/material-ui/switch",
      element: <MuiSwitch />,
    },
    {
      path: "/material-ui/slider",
      element: <MuiSlider />,
    },
    {
      path: "/material-ui/toggleButton",
      element: <MuiToggleButton />,
    },
    {
      path: "/material-ui/popover",
      element: <MuiPopover />,
    },
    {
      path: "/material-ui/tooltip",
      element: <MuiTooltip />,
    },
    {
      path: "/material-ui/snackbar",
      element: <MuiSnackbar />,
    },
    {
      path: "/material-ui/dialog",
      element: <MuiDialog />,
    },
    {
      path: "/material-ui/speedDial",
      element: <MuiSpeedDial />,
    },
    {
      path: "/material-ui/transitions",
      element: <MuiTransitions />,
    },
    {
      path: "/material-ui/backdropAndSnackbar",
      element: <MuiBackdropAndSnackbar />,
    },
    {
      path: "/customization/theme",
      element: <MuiTheme />,
    },
    {
      path: "/customization/sxProps",
      element: <MuiSxProps />,
    },
    {
      path: "/mui-x/data-grid",
      element: <MuiDataGrid />,
    },
    {
      path: "/customization/hotToCustomize",
      element: <MuiCustomize />,
    },
    {
      path: "/mui-x/dateTimePickers",
      element: <MuiDateTimePickers />,
    },
    {
      path: "/mui-x/charts",
      element: <MuiCharts />,
    },
  ]);
  return (
    <>
      <Container maxWidth="lg">
        <TitleBar />
        {elements}
      </Container>
    </>
  );
}

export default App;
