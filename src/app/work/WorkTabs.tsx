'use client';

import { useState, SyntheticEvent, KeyboardEventHandler } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { WorkItemType } from './constants';
import WorkPanel from './WorkPanel';

type GetIdType = (index: number) => string;

const getTabId: GetIdType = (index) => `work-tab-${index}`;
const getTabPanelId: GetIdType = (index) => `work-tabpanel-${index}`;

type TabsOnChange = (event: SyntheticEvent, value: any) => void;
type TabOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => void;

interface WorkTabsProps {
  items: WorkItemType[];
}

const WorkTabs: React.FC<WorkTabsProps> = ({ items }) => {
  const [value, setValue] = useState(0);

  const handleChange: TabsOnChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleKeyDown: TabOnKeyDown = (ev) => {
    // Handle tab event for accessibility
    if ('Tab' === ev.code && value < items.length - 1) {
      setValue(value + 1);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="work experience tabs"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {items.map((item, index) => {
            return (
              <Tab
                key={item.company}
                label={item.company}
                id={getTabId(index)}
                aria-controls={getTabPanelId(index)}
                onKeyDown={handleKeyDown}
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
          />
        );
      })}
    </Box>
  );
};

export default WorkTabs;
