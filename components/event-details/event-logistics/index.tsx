import { FC } from "react";

import LogisticsItem from "./../logistics-item";

import CalendarIcon from "../../icons/calendar-icon";
import LocationIcon from "../../icons/location-icon";

import styles from "./event-logistics.module.scss";

type EventLogisticsProps = {
  date: string | Date;
  location: string;
  image: string;
  imageAlt: string;
};

const EventLogistics: FC<EventLogisticsProps> = ({
  date,
  location,
  image,
  imageAlt
}) => {
  const convertedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const convertedAddress = location.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>

      <ul className={styles.list}>
        <LogisticsItem icon={CalendarIcon}>
          <time>{convertedDate}</time>
        </LogisticsItem>

        <LogisticsItem icon={LocationIcon}>
          <address>{convertedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
