import type { Metadata } from "next";

import Home from "components/HomeContent";

import "./page.module.css";

export const metadata: Metadata = {
  title: "Full-Stack Web Developer",
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
