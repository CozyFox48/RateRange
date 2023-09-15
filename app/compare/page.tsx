import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Image src="/images/compare/background.png" alt="343" fill />

    </>
  );
};

export default ContactPage;
