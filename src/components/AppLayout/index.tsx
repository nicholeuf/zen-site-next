import DeviceType from "types/DeviceType";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import ConnectedThemeSpeedDial from "@/components/ThemeSpeedDial/ConnectedThemeSpeedDial";
import AppThemeRegistry from "../../app/styles/providers/AppThemeRegistry";

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
    <AppThemeRegistry deviceType={deviceType} disableRipple={disableRipple}>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
      <ConnectedThemeSpeedDial />
    </AppThemeRegistry>
  );
};

export default AppLayout;
