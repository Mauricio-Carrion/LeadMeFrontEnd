import HomeLayout from "../layout";

export default function Messages() {
  return <div>Messages</div>;
}

Messages.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
