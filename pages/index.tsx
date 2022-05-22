import type { GetStaticProps, NextPage } from "next";
import EventList from "../components/event-list";
import EventsData, { Event } from "../data";
import EventsService from "../data/events";

type HomePageProps = {
  featuredEvents: Event[];
};

const Home: NextPage<HomePageProps> = ({ featuredEvents }) => {
  console.log(featuredEvents);

  return <EventList events={featuredEvents} />;
};

const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
  const request = await EventsService.getFeaturedEvents();

  const featuredEvents = request.data;

  return {
    props: {
      featuredEvents
    }
  };
};

export { getStaticProps };

export default Home;
