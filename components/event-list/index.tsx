import { FC } from "react";

import EventListItem from "../event-list-item";

import { Event } from "./../../data";

import styles from "./event-list.module.scss";

export type EventListProps = {
  events: Event[];
};

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
