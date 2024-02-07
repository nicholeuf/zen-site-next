import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export const Contact = () => {
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
        <li>
          Photo by{" "}
          <a href="https://unsplash.com/@jongeng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jon Geng
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/red-petaled-flower-MM1FpBrhBPE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
