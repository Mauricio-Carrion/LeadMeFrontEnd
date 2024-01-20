import HomeLayout from "../layout";

export default function Calendar() {
  return <div>Calendar</div>;
}

Calendar.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
