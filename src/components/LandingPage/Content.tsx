import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CldImage } from 'next-cloudinary';

const smallGridTemplateAreas = `
"photo"
"heading"
"body"
`;
const largeGridTemplateAreas = `
"photo heading heading heading"
"body body body body"
`;

const Content = () => {
  return (
    <Box
      sx={{
        my: 3,
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
          alignItems: 'center',
        }}
      >
        <CldImage
          data-testid="landing-profile-image"
          width="200"
          height="200"
          crop="thumb"
          zoom="0.5"
          src="zensite/nf-profile-c-hibiscus"
          radius="20"
          alt="Photo of website author"
          style={{
            border: '1px solid white',
            borderRadius: '20px',
          }}
        />
      </Box>
      <Box sx={{ gridArea: 'heading' }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={(theme) => ({
            fontSize: {
              xs: '2.75rem',
              sm: theme.typography.h1.fontSize,
            },
          })}
        >
          Hi, I&apos;m Nichole
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 500,
          }}
        >
          Full-Stack Developer&nbsp;
          <Typography variant="sacramento" sx={{ fontSize: '30px' }}>
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
