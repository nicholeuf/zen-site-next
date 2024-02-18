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
        <Typography variant="h1" gutterBottom>
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
          Full-Stack Developer
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
          Based in Orlando, Florida, my passion lies in crafting seamless,
          intuitive, well-built experiences for the customer. I&apos;ve mentored
          junior developers, acted as a Lead Front-End developer, and
          collaborated within dynamic, agile teams.
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
