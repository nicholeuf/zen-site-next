'use client';

import { useState, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { WorkItemType } from './constants';
import WorkPanel from './WorkPanel';

type GetIdType = (index: number) => string;

const getTabId: GetIdType = (index) => `work-tab-${index}`;
const getTabPanelId: GetIdType = (index) => `work-tabpanel-${index}`;

type TabsOnChange = (event: SyntheticEvent, value: any) => void;

interface WorkTabsProps {
  items: WorkItemType[];
  scrollable: boolean;
}

const WorkTabs: React.FC<WorkTabsProps> = ({ items, scrollable }) => {
  const [value, setValue] = useState(0);

  const handleChange: TabsOnChange = (_, newValue) => {
    setValue(newValue);
  };

  const scrollableProps: TabsProps = {
    variant: 'scrollable',
    scrollButtons: true,
    allowScrollButtonsMobile: true,
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="work experience tabs"
          // https://mui.com/base-ui/react-tabs/#keyboard-navigation
          selectionFollowsFocus
          {...(scrollable && scrollableProps)}
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
