import { Metadata } from "next";

import LandingPage from "@/components/LandingPage";

import { getLandingPageProps } from "@/components/LandingPage/constants";

export const metadata: Metadata = {
  title: "The Coding Yogi | Nichole Frey",
};

const getServerSideProps = getLandingPageProps;

const Home: React.FC = async () => {
  const props = await getServerSideProps();
  return <LandingPage {...props} />;
};

export default Home;
