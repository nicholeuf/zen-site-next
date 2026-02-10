import { Metadata } from "next";
import AboutPage from "./AboutPage";
import { getItemPlaceholderData } from "./constants";

export const metadata: Metadata = {
  title: "About",
};

const getServerSideProps = async () => {
  return await getItemPlaceholderData();
};

const About: React.FC = async () => {
  const { itemDataPlaceholder } = await getServerSideProps();

  return <AboutPage itemPlaceholder={itemDataPlaceholder} />;
};

export default About;
