import Box from '@mui/material/Box';
import NextLink from '@/components/NextLink';
import VisuallyHidden from '@/components/VisuallyHidden';

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      data-testid="header-logo"
    >
      <NextLink
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
      >
        <VisuallyHidden>Home</VisuallyHidden>
      </NextLink>
    </Box>
  );
};

export default HeaderLogo;
