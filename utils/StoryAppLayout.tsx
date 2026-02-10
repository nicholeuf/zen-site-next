import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "../src/components/MainContainer";

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
