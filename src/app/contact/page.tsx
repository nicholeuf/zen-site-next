import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section>
      <h1>Contact</h1>
      <ul>
        <li>
          <a target="_blank" href="https://icons8.com/icon/24556/lotus">
            Lotus
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
