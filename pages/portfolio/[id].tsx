import type { NextPage } from "next";
import { useRouter } from "next/router";

const PortfolioPage: NextPage = () => {
  const router = useRouter();

  return <div>Portfolio - {router.query.id} Page</div>;
};

export default PortfolioPage;
