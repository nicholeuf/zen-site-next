import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { WorkItemType } from './constants';
import ChipList from './ChipList';
import ChipListItem from './ChipListItem';

interface WorkPanelProps extends BoxProps {
  isActive: boolean;
  item: WorkItemType;
}

const WorkPanel: React.FC<WorkPanelProps> = ({ isActive, item, ...props }) => {
  return (
    <Box {...props} role="tabpanel">
      {isActive && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" component="h2">
            {item.company}
          </Typography>
          <Typography variant="overline">
            {item.startDate} - {item.endDate}
          </Typography>
          <Typography variant="subtitle2">{item.location}</Typography>
          <List data-testid="experience-list">
            {item.experience.map((experience, index) => {
              return (
                <ListItem
                  key={index}
                  data-testid="experience-list-item"
                  sx={(theme) => ({
                    '&::before': {
                      content: '"-"',
                      pr: theme.spacing(0.5),
                      alignSelf: 'flex-start',
                    },
                  })}
                >
                  {experience}
                </ListItem>
              );
            })}
          </List>
          <ChipList>
            {item.skills.map((skill) => {
              return (
                <ChipListItem key={skill}>
                  <Chip label={skill} color="primary" size="small" />
                </ChipListItem>
              );
            })}
          </ChipList>
          <ChipList>
            {item.tools.map((tool) => {
              return (
                <ChipListItem key={tool}>
                  <Chip
                    label={tool}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                </ChipListItem>
              );
            })}
          </ChipList>
        </Box>
      )}
    </Box>
  );
};

export default WorkPanel;
