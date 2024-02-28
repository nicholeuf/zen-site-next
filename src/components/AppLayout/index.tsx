import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import GlobalStyles from '@/app/styles/GlobalStyles';
import DeviceType from '@/types/DeviceType';

interface AppLayoutProps {
  children: React.ReactNode;
  deviceType: DeviceType;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, deviceType }) => {
  return (
    <GlobalStyles deviceType={deviceType}>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </GlobalStyles>
  );
};

export default AppLayout;
