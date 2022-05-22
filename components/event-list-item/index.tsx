import { FC } from "react";
import cn from "classnames";

import { Event } from "./../../data";
import { convertDate } from "../../utils/fn";

import Button from "../UI/button";

import styles from "./event-list-item.module.scss";
import CalendarIcon from "../icons/calendar-icon";
import LocationIcon from "../icons/location-icon";
import ArrowRight from "../icons/arrow-right";

export type EventListItemProps = {
  event: Event;
};

const EventListItem: FC<EventListItemProps> = ({ event }) => {
  const { id, title, description, date, location, image, isFeatured } = event;

  const listItemClasses = cn(styles.listItem, {
    [styles.listItemFeatured]: isFeatured
  });

  const convertedDate = convertDate(new Date(date));

  const convertedAddress = location.replace(",", "\n");

  return (
    <li className={listItemClasses}>
      <img className={styles.listItemImage} src={`/${image}`} alt={title} />

      <article className={styles.listItemContent}>
        <h2 className={styles.listItemTitle}>{title}</h2>

        <p className={styles.listItemDescription}>{description}</p>

        <div className={styles.listItemSummary}>
          <time className={styles.listItemTime}>
            <CalendarIcon />

            {convertedDate}
          </time>
          <address className={styles.listItemLocation}>
            <LocationIcon />

            {convertedAddress}
          </address>
        </div>

        <div className={styles.listItemDetails}>
          <Button to={`/events/${id}`}>
            Explore Event
            <span className={styles.listItemIcon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </article>
    </li>
  );
};

export default EventListItem;
