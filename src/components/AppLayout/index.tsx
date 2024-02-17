import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import GlobalStyles from '@/app/styles/GlobalStyles';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <GlobalStyles>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </GlobalStyles>
  );
};

export default AppLayout;
