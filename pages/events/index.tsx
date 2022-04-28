import type { NextPage } from "next";
import EventList from "../../components/event-list";
import EventsData from "../../data";

const Events: NextPage = () => {
  const events = EventsData.getAllEvents();
  return <EventList events={events} />;
};

export default Events;
