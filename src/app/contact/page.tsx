import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Metadata } from 'next';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ExternalLink from '@/components/ExternalLink';

export const metadata: Metadata = {
  title: 'Contact',
};

const Contact: React.FC = () => {
  return (
    <Box>
      <Box component="section">
        <Typography variant="h1">Contact</Typography>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          tempore a praesentium perferendis doloremque, veniam minus quis
          laborum, numquam blanditiis sunt ex consectetur asperiores assumenda
          nisi laboriosam et tempora quos.
        </Typography>
      </Box>
      <Box component="section" id="credits">
        <Typography variant="h2">Credits</Typography>
        <List>
          <ListItem>
            Favicon image is&nbsp;
            <ExternalLink href="https://icons8.com/icon/35926/lotus">
              Lotus
            </ExternalLink>
            &nbsp;icon by&nbsp;
            <ExternalLink target="_blank" href="https://icons8.com">
              Icons8
            </ExternalLink>
          </ListItem>
          <ListItem>
            Landing page background photo by&nbsp;
            <ExternalLink href="https://unsplash.com/@scottwebb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Scott Webb
            </ExternalLink>
            &nbsp;on&nbsp;
            <ExternalLink href="https://unsplash.com/photos/rubber-plant-5mIcH3q7tIk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </ExternalLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Contact;
