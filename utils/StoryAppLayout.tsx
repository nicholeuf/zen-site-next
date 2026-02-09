import MainContainer from "../src/components/MainContainer";

const StoryAppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MainContainer>{children}</MainContainer>;
};

export default StoryAppLayout;
