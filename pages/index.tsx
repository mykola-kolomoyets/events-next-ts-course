import type { NextPage } from "next";
import EventsData from "../data";

const Home: NextPage = () => {
  const featuresEvents = EventsData.getFeaturedEvents();

  console.log(featuresEvents);

  return <h1>Home page</h1>;
};

export default Home;
