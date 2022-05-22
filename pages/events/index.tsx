import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";
import EventsData from "../../data";

const Events: NextPage = () => {
  const events = EventsData.getAllEvents();

  const router = useRouter();

  const onSearch = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={onSearch} />
      <EventList events={events} />
    </Fragment>
  );
};

export default Events;
