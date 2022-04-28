import { Fragment } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import EventsData from "../../data";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";

const EventDetails: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const event = EventsData.getEventById(id as string);

  if (!event) return <p>Event not found</p>;

  const { title, description, ...eventLogisticsProps } = event;

  return (
    <Fragment>
      <EventSummary title={title} />

      <EventLogistics {...{ ...eventLogisticsProps, imageAlt: title }} />

      <EventContent>
        <p>{description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetails;
