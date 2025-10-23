import { Box } from '@mui/material';

/* Skip navigation links for keyboard users */
const SkipNavigation = () => {
  return (
    <Box
      data-testid="keyboard-skip-navigation"
      component="nav"
      sx={{
        position: 'absolute',
        top: -40,
        left: 6,
        zIndex: 1000,
        '& a': {
          position: 'absolute',
          left: -9999,
          width: 1,
          height: 1,
          overflow: 'hidden',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          padding: 1,
          textDecoration: 'none',
          borderRadius: 1,
          '&:focus': {
            position: 'static',
            left: 'auto',
            width: 'auto',
            height: 'auto',
            overflow: 'visible',
          },
        },
      }}
    >
      <a href="#main-content">Skip to main content</a>
      <a href="#main-navigation">Skip to navigation</a>
      <a href="#footer">Skip to footer</a>
    </Box>
  );
};

export default SkipNavigation;
