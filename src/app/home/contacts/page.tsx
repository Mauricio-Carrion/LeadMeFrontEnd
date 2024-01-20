import HomeLayout from "../layout";

export default function Contacts() {
  return <div>Contacts</div>;
}

Contacts.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
