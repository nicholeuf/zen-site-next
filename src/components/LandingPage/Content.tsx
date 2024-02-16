import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CldImage } from 'next-cloudinary';

const Content = () => {
  const smallGridTemplateAreas = `
    "photo"
    "heading"
    "body"
  `;
  const largeGridTemplateAreas = `
    "photo heading heading heading"
    "body body body body"
  `;

  return (
    <Box
      sx={{
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
          width="200"
          height="200"
          crop="thumb"
          zoom="0.5"
          src="zensite/nf-profile-c-hibiscus"
          radius="20"
          alt=""
        />
      </Box>
      <Box sx={{ gridArea: 'heading' }}>
        <Typography variant="h1" gutterBottom>
          Hi, I&apos;m Nichole
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Full-Stack Developer
        </Typography>
      </Box>
      <Box sx={{ gridArea: 'body' }}>
        <Typography>
          I turn ideas into reality using modern Javascript. I can work up and
          down the stack, but my sweet spot is on the Front-End.
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
