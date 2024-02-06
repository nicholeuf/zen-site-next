import type { Metadata } from "next";

import "./home.css";

export const metadata: Metadata = {
  title: "Full-Stack Web Developer",
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        suscipit mollitia modi, ea, necessitatibus tempore deserunt, minima
        similique quidem ex architecto itaque quia numquam maiores sapiente
        doloremque odio. Doloribus, expedita?
      </p>
    </div>
  );
};

export default Home;
