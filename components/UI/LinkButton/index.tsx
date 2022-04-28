import { FC, PropsWithChildren } from "react";
import Link from "next/link";

import styles from "./link-button.module.scss";

export type LinkButtonProps = PropsWithChildren<{
  to: string;
}>;

const LinkButton: FC<LinkButtonProps> = ({ children, to }) => {
  return (
    <Link href={to}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};

export default LinkButton;
