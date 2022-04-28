import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import events from ".";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";
import EventsData from "../../data";

const EventsFiltered: NextPage = () => {
  const router = useRouter();

  const queryData = router?.query?.slug! as string[];

  const filteredEvents = EventsData.getFilteredEvents({
    year: Number(queryData[0]),
    month: Number(queryData[1])
  });

  if (!filteredEvents.length) return <p>Events nor found</p>;

  return (
    <Fragment>
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default EventsFiltered;
