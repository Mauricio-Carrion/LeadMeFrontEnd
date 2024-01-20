import HomeLayout from "./layout";

export default function Home() {
  return <>content</>;
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
