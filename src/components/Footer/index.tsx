'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Links from './Links';
import { constants } from '@/app/styles/theme';
import ExternalLink from '@/components/ExternalLink';

interface FooterProps {
  height: string;
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2),
      })}
    >
      <Links />
      <Box
        data-testid="footer-copy"
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography variant="sacramento" component="p">
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
        <Typography sx={{ fontSize: '12px' }}>
          Copyright &#169; {new Date().getFullYear()} -{' '}
          <strong>All Rights Reserved</strong> -{' '}
          <ExternalLink
            href="https://github.com/nicholeuf/zen-site-next"
            sx={{
              color,
              fontSize: '12px',
            }}
            aria-label="View Source Code"
          >
            [view source code]
          </ExternalLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
