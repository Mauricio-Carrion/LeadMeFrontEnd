import ContactSection from "@/components/ContactSession/ContactSection";
import HomeLayout from "../layout";

export default function Contacts() {
  return <ContactSection />;
}

Contacts.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
