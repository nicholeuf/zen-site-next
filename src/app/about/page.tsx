import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae
        optio quos dolor, corporis tenetur? Alias fugit doloribus nesciunt eum
        perferendis mollitia similique cupiditate ea quaerat. Magnam fugit
        cupiditate non!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
        assumenda laudantium in rem nisi architecto mollitia consequuntur quas
        nobis cupiditate, natus laborum, excepturi reprehenderit aspernatur
        commodi, explicabo amet aperiam. Pariatur.
      </p>
    </section>
  );
}
