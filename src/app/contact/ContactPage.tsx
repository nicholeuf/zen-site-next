"use client";
import ImageContainer from "@/components/ImageContainer";
import ContactContent from "./ContactContent";

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
