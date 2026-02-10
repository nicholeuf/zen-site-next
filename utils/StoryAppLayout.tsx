import MainContainer from "../src/components/MainContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const StoryAppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default StoryAppLayout;
