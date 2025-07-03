import { useState, SyntheticEvent } from "react";
import { Box, Tab, TabProps } from "@mui/material";
import { TabContext, TabList, TabPanel, TabContextProps } from "@mui/lab";

/** 標準タブコンポーネントProps */
export type StdTabProps = {
  /** タブコンポーネントに表示するコンテンツ */
  tabPanels?: { label: string; content: JSX.Element; tabProps?: TabProps }[];
  /** タブの幅 */
  tabWidth?: number;
  /** タブコンポーネントのProps */
  tabContextProps?: TabContextProps;
};

/** 標準タブコンポーネント */
export const StdTab = ({
  tabPanels = [{ label: "未指定", content: <>未指定</> }],
  tabWidth,
  tabContextProps,
}: StdTabProps) => {
  /** タブ選択初期値 */
  const [value, setValue] = useState("1");
  /** タブ切り替え */
  const doChange = (_: SyntheticEvent, value: string) => setValue(value);

  return (
    <>
      <TabContext {...tabContextProps} value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={doChange}>
            {tabPanels.map((n, i) => (
              <Tab
                {...n.tabProps}
                key={i}
                label={n.label}
                value={(i + 1).toString()}
                sx={{ width: tabWidth, textTransform: "none" }}
              />
            ))}
          </TabList>
        </Box>
        {tabPanels.map((n, i) => (
          <TabPanel key={i} value={(i + 1).toString()}>
            {n.content}
          </TabPanel>
        ))}
      </TabContext>
    </>
  );
};
