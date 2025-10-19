import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import GlobalStyles from '@/app/styles/GlobalStyles';
import DeviceType from '@/types/DeviceType';
import Box from '@mui/material/Box';

interface AppLayoutProps {
  children: React.ReactNode;
  deviceType: DeviceType;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, deviceType }) => {
  return (
    <GlobalStyles deviceType={deviceType}>
      {/* Skip navigation links for keyboard users */}
      <Box
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
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </GlobalStyles>
  );
};

export default AppLayout;
