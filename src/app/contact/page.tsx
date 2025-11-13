import { Metadata } from "next";

import ContactPage from "./ContactPage";
import { SMALLCHAT_ENABLED } from "@/app/lib/smallchat";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact: React.FC = () => {
  return <ContactPage chatEnabled={SMALLCHAT_ENABLED} />;
};

export default Contact;
