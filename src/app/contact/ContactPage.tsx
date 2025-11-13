"use client";
import ContactContent from "./ContactContent";
import ImageContainer from "@/components/ImageContainer";

interface ContactPageProps {
  chatEnabled: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ chatEnabled }) => {
  return (
    <ImageContainer>
      <ContactContent chatEnabled={chatEnabled} />
    </ImageContainer>
  );
};

export default ContactPage;
