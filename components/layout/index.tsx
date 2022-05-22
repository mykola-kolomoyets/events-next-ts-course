import { FC, Fragment, PropsWithChildren } from "react";
import Header from "../UI/header";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Fragment>
    <Header />

    <main>{children}</main>
  </Fragment>
);

export default Layout;
