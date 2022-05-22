import { FC, PropsWithChildren } from "react";

import styles from "./event-content.module.scss";

type EventContentProps = PropsWithChildren<{}>;

const EventContent: FC<EventContentProps> = ({ children }) => (
  <section className={styles.content}>{children}</section>
);

export default EventContent;
