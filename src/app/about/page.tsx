import { Metadata } from "next";
import { getItemPlaceholderData } from "./constants";
import AboutPage from "./AboutPage";

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
