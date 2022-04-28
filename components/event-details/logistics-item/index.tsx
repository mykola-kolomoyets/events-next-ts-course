import { PropsWithChildren, FC } from "react";
import styles from "./logistics-item.module.scss";

type LogisticsItemProps = PropsWithChildren<{
  icon: () => JSX.Element;
}>;

const LogisticsItem: FC<LogisticsItemProps> = ({ icon: Icon, children }) => (
  <li className={styles.item}>
    <span className={styles.icon}>
      <Icon />
    </span>
    <span className={styles.content}>{children}</span>
  </li>
);

export default LogisticsItem;
