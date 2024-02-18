'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Navigation from './Navigation';
import { constants } from '@/app/styles/theme';
import ExternalLink from '@/components/ExternalLink';

const smallGridTemplateAreas = `
"nav"
"madeby"
"copyright"
"source"
`;
const largeGridTemplateAreas = `
"nav madeby"
"nav copyright"
"nav source"
`;

interface FooterProps {
  height?: string;
}

const Footer: React.FC<FooterProps> = ({
  height = constants.footer.height,
}) => {
  const color = 'background.default';
  return (
    <Box
      data-testid="footer"
      component="footer"
      sx={(theme) => ({
        backgroundColor: 'secondary.main',
        color,
        height,
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Box
        maxWidth="sm"
        sx={{
          display: 'grid',
          gap: 0.5,
          textAlign: 'center',
          height: '100%',
          width: '100%',
          gridTemplateAreas: {
            xs: smallGridTemplateAreas,
            sm: largeGridTemplateAreas,
          },
        }}
      >
        <Box
          sx={{
            gridArea: 'nav',
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'flex-start',
            },
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Navigation />
        </Box>
        <Box
          sx={{
            gridArea: 'madeby',
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'flex-end',
            },
            alignItems: {
              xs: 'center',
              sm: 'flex-end',
            },
          }}
        >
          <Typography
            variant="sacramento"
            component="p"
            sx={{
              fontSize: {
                xs: '24px',
                sm: '34px',
              },
            }}
          >
            Made with{' '}
            <Typography
              display={'inline'}
              component="span"
              sx={{ color: 'primary.main' }}
            >
              &#9829;
            </Typography>{' '}
            by Nichole Frey
          </Typography>
        </Box>
        <Box
          sx={{
            gridArea: 'copyright',
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'flex-end',
            },
            alignItems: {
              xs: 'center',
              sm: 'flex-end',
            },
          }}
        >
          <Typography
            variant="overline"
            component="p"
            sx={{ textTransform: 'none' }}
          >
            Copyright &#169; {new Date().getFullYear()} -{' '}
            <strong>All Rights Reserved</strong>
          </Typography>
        </Box>
        <Box
          sx={{
            gridArea: 'source',
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'flex-end',
            },
            alignItems: {
              xs: 'center',
              sm: 'flex-end',
            },
          }}
        >
          <Typography variant="overline" component="p">
            <ExternalLink
              href="https://github.com/nicholeuf/zen-site-next"
              sx={{
                color,
              }}
              aria-label="View Source Code"
            >
              [view source code]
            </ExternalLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
