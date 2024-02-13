'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Links from './Links';
import { constants } from '@/app/styles/theme';

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: constants.colors.carob,
        color: constants.colors.cream,
        height: constants.footer.height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: constants.spacing.md,
      }}
    >
      <Links />
      <Box sx={{
        textAlign: 'center'
      }}>
        <Typography variant='sacramento' component='p'>
          Made with{' '}
          <Typography
            display={'inline'}
            component='span'
            sx={{ color: constants.colors.guava }}
          >
            &#9829;
          </Typography>{' '}
          by Nichole Frey
        </Typography>
        <Typography sx={{ fontSize: '12px' }}>
          &#169; Copyright {new Date().getFullYear()} -{' '}
          <strong>All Rights Reserved</strong>
        </Typography>
        <Link
            target='_blank'
            rel='noopener'
            href='https://github.com/nicholeuf/zen-site-next'
            sx={{
              color: constants.colors.cream,
              textDecoration: 'none',
              fontSize: '12px',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            [view source code]
          </Link>
        </Box>
    </Box>
  );
};

export default Footer;
