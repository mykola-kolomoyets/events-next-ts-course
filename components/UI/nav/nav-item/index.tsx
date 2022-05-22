import Link from "next/link";
import { FC } from "react";

import styles from "./nav-item.module.scss";

export type NavItem = {
  to: string;
  label: string;
};

type NavItemProps = {
  item: NavItem;
};

const NavItemComponent: FC<NavItemProps> = ({ item }) => (
  <li className={styles.navItem}>
    <Link href={item.to}>
      <a>{item.label}</a>
    </Link>
  </li>
);

export default NavItemComponent;
