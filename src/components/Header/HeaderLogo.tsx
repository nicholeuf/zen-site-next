import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import VisuallyHidden from '../VisuallyHidden';

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
      sx={(theme) => ({
        typography: 'sacramento',
        fontSize: '30px',
        height: '100%',
        width,
        borderRight: `${theme.spacing(1)} solid`,
        borderRightColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
        },
      })}
      data-testid="header-logo"
    >
      <Link
        href="/"
        sx={{
          color,
          width: '100%',
          textAlign: 'center',
          '&:hover': {
            color: activeColor,
            textDecoration: 'none',
          },
          '&::before': {
            content: '"nf"',
          },
        }}
        component={NextLink}
      >
        <VisuallyHidden>Home</VisuallyHidden>
      </Link>
    </Box>
  );
};

export default HeaderLogo;
