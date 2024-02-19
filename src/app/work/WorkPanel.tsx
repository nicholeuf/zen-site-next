import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { WorkItemType } from './constants';
import ChipList from './ChipList';
import ChipListItem from './ChipListItem';

interface WorkPanelProps extends BoxProps {
  item: WorkItemType;
}

const WorkPanel: React.FC<WorkPanelProps> = ({ item, ...props }) => {
  return (
    <Box {...props} role="tabpanel">
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" component="h2">
          {item.company} | {item.title}
        </Typography>
        <Typography variant="overline">
          {item.startDate} - {item.endDate}
        </Typography>
        <Typography variant="subtitle2">{item.location}</Typography>
        {!!item.experience.length && (
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
                  <Typography variant="body2">{experience}</Typography>
                </ListItem>
              );
            })}
          </List>
        )}
        {!!item.skills.length && (
          <ChipList>
            {item.skills.map((skill) => {
              return (
                <ChipListItem key={skill}>
                  <Chip label={skill} color="primary" size="small" />
                </ChipListItem>
              );
            })}
          </ChipList>
        )}
        {!!item.tools.length && (
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
        )}
      </Box>
    </Box>
  );
};

export default WorkPanel;
