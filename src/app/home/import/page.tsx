import HomeLayout from "../layout";

export default function Import() {
  return <div>Import</div>;
}

Import.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
