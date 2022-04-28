import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren
} from "react";
import Link from "next/link";

import styles from "./button.module.scss";

export type ButtonProps = PropsWithChildren<{
  to?: string;
}> &
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const LinkButton: FC<ButtonProps> = ({ children, to, ...props }) => {
  return Boolean(to) ? (
    <Link href={to!}>
      <a className={styles.button}>{children}</a>
    </Link>
  ) : (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default LinkButton;
