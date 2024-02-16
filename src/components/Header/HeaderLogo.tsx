import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

import { constants } from '@/app/styles/theme';

interface HeaderLogoProps {
  width: string;
  color: string;
  activeColor: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  width,
  color,
  activeColor,
}) => {
  return (
    <Box
      sx={{
        typography: 'sacramento',
        fontSize: '30px',
        height: '100%',
        width,
        borderRight: `${constants.spacing.sm} solid`,
        borderRightColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Link
        href="/"
        sx={{
          textDecoration: 'none',
          color,
          '&:hover': {
            color: activeColor,
          },
        }}
        component={NextLink}
      >
        nf
      </Link>
    </Box>
  );
};

export default HeaderLogo;
