import { FC } from "react";
import NavItemComponent, { NavItem } from "./nav-item";

type NavProps = {
  items: NavItem[];
};

const Nav: FC<NavProps> = ({ items }) => (
  <nav>
    <ul>
      {items.map((item) => (
        <NavItemComponent key={item.label} item={item} />
      ))}
    </ul>
  </nav>
);

export default Nav;
