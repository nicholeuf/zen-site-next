import DeviceType from "types/DeviceType";
import GlobalStyles from "@/app/styles/GlobalStyles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import SkipLink from "@/components/SkipLink";

interface AppLayoutProps {
  children: React.ReactNode;
  deviceType: DeviceType;
  // When true, disable ripples for test environments
  disableRipple?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  deviceType,
  disableRipple = false,
}) => {
  return (
    <GlobalStyles deviceType={deviceType} disableRipple={disableRipple}>
      <SkipLink />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </GlobalStyles>
  );
};

export default AppLayout;
