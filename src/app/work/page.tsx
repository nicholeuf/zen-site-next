import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

import WorkTabs from './WorkTabs';
import { items } from './constants';
import PageContainer from '@/components/PageContainer';

export const metadata: Metadata = {
  title: 'Work',
};

interface WorkProps {
  scrollable?: boolean;
}

const Work: React.FC<WorkProps> = ({ scrollable = true }) => {
  return (
    <PageContainer data-testid="work-page">
      <Typography variant="h1" gutterBottom>
        Work
      </Typography>
      <Typography variant="body2">
        After graduating in 2003 with a degree in Computer Engineering from the
        University of Florida, I worked in the defense industry for 7 years. I
        then transitioned to working for niche food delivery service companies,
        where I honed my skills as a Full-Stack Developer. Throughout my career
        progression, I have assumed roles such as Technical Lead, providing
        mentorship to colleagues, and collaborating within agile,
        cross-functional teams.
      </Typography>
      <WorkTabs items={items} scrollable={scrollable} />
    </PageContainer>
  );
};

export default Work;
