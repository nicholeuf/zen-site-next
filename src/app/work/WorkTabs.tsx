'use client';

import { useState, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { WorkItemType } from './constants';
import WorkPanel from './WorkPanel';

const getTabId = (index: number) => `simple-tab-${index}`;
const getTabPanelAriaLabel = (index: number) => `simple-tabpanel-${index}`;

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {items.map((item, index) => {
            return (
              <Tab
                key={item.company}
                label={item.company}
                id={getTabId(index)}
                aria-controls={getTabPanelAriaLabel(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {items.map((item, index) => {
        const isActive = value === index;
        return (
          <WorkPanel
            key={item.company}
            isActive={isActive}
            item={item}
            hidden={!isActive}
            id={getTabId(index)}
            aria-labelledby={getTabPanelAriaLabel(index)}
          />
        );
      })}
    </Box>
  );
};

export default WorkTabs;
