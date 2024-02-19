import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

import WorkTabs from './WorkTabs';
import { items } from './constants';
import PageContainer from '@/components/PageContainer';

export const metadata: Metadata = {
  title: 'Work',
};

const Work: React.FC = () => {
  return (
    <PageContainer data-testid="work-page">
      <Typography variant="h1">Work</Typography>
      <Typography variant="body2">
        After graduating with a BS in Computer Engineering from the University
        of Florida in 2003, I worked in the defense industry for 7 years.
        Subsequently, I transitioned to working for niche food delivery service
        companies, where I honed my skills as a Full-Stack Developer. Throughout
        my career progression, I have assumed roles such as Technical Lead,
        providing mentorship to colleagues, and collaborating within agile,
        cross-functional teams.
      </Typography>
      <WorkTabs items={items} />
    </PageContainer>
  );
};

export default Work;
