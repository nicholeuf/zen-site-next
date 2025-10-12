import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ProfileImage, { ProfileImageProps } from './ProfileImage';
import Heading from './Heading';

const smallGridTemplateAreas = `
"photo"
"heading"
"body"
`;
const largeGridTemplateAreas = `
"photo heading heading heading"
"body body body body"
`;

interface ContentProps {
  profileImageProps: ProfileImageProps;
}

const Content: React.FC<ContentProps> = ({ profileImageProps }) => {
  return (
    <Box
      sx={{
        my: 3,
        p: 2,
        display: 'grid',
        gap: 2,
        gridTemplateAreas: {
          xs: smallGridTemplateAreas,
          sm: largeGridTemplateAreas,
        },
      }}
    >
      <Box
        sx={{
          gridArea: 'photo',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <ProfileImage {...profileImageProps} />
      </Box>
      <Box sx={{ gridArea: 'heading' }}>
        <Heading>Hi, I&apos;m Nichole</Heading>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 500,
          }}
        >
          Full-Stack Developer&nbsp;
          <Typography
            variant="sacramento"
            sx={{
              fontSize: {
                xs: '34px',
                sm: '38px',
              },
            }}
          >
            and yogi!
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ gridArea: 'body' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: '1.25rem',
              sm: '1.5rem',
            },
            color: 'grey.800',
          }}
          maxWidth="md"
        >
          Based in Orlando, Florida, my passion lies in crafting intuitive,
          well-built experiences for the customer. I have assumed roles such as
          Technical Lead, providing mentorship to colleagues, and collaborating
          within agile, cross-functional teams.
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
