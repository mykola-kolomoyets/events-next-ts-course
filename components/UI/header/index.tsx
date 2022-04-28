import Link from "next/link";
import { FC } from "react";

import Nav from "../nav";
import { NavItem } from "../nav/nav-item";

import styles from "./header.module.scss";

const navItems: NavItem[] = [
  {
    label: "All events",
    to: "/events"
  }
];

const Header: FC<{}> = ({}) => (
  <header className={styles.header}>
    <section className={styles.logo}>
      <Link href="/">NextEvents</Link>
    </section>

    <Nav items={navItems} />
  </header>
);

export default Header;
