import { FC, PropsWithChildren } from "react";
import Link from "next/link";

import styles from "./button.module.scss";
import { Detailed } from "../../../utils/types";

export type ButtonProps = PropsWithChildren<{
  to?: string;
}> &
  Detailed<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, to, ...props }) => {
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

export default Button;
