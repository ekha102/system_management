import Pagination from "./_components/Pagination";
import DashboardPage from "./dashboard/page";


interface Props {
  searchParams: {
    page?: string;
  }
}

export default function Home({ searchParams }: Props) {
  return (
    <>
      <DashboardPage />
      <Pagination itemCount={100} itemsSize={10} currentPage={parseInt(searchParams.page || "1")} />
    </>
  );
}
