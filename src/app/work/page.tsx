import { Metadata } from "next";

import WorkPage from "./WorkPage";

export const metadata: Metadata = {
  title: "Work",
};

const Work: React.FC = () => {
  return <WorkPage />;
};

export default Work;
