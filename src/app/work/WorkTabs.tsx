"use client";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent, useState } from "react";

import { WorkItemType } from "./constants";
import WorkPanel from "./WorkPanel";

type GetIdType = (index: number) => string;

const getTabId: GetIdType = (index) => `work-tab-${index}`;
const getTabPanelId: GetIdType = (index) => `work-tabpanel-${index}`;

type TabsOnChange = (event: SyntheticEvent, value: any) => void;

interface WorkTabsProps {
  items: WorkItemType[];
}

const WorkTabs: React.FC<WorkTabsProps> = ({ items }) => {
  const [value, setValue] = useState(0);

  const handleChange: TabsOnChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="work experience tabs"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          // https://mui.com/base-ui/react-tabs/#keyboard-navigation
          selectionFollowsFocus
        >
          {items.map((item, index) => {
            return (
              <Tab
                key={item.company}
                label={item.company}
                id={getTabId(index)}
                aria-controls={getTabPanelId(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {items.map((item, index) => {
        const isActive = value === index;
        return (
          <WorkPanel
            key={item.id}
            item={item}
            hidden={!isActive}
            id={getTabPanelId(index)}
            aria-labelledby={getTabId(index)}
            data-testid={item.id}
          />
        );
      })}
    </Box>
  );
};

export default WorkTabs;
