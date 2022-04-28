import type { NextPage } from "next";
import { Fragment } from "react";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";
import EventsData from "../../data";

const Events: NextPage = () => {
  const events = EventsData.getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList events={events} />
    </Fragment>
  );
};

export default Events;
