import { FC } from "react";

import { months } from "../../utils/constants";

import Button from "../UI/button";

import styles from "./events-search.module.scss";

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  {
    value: "2021",
    label: "2021"
  },
  {
    value: "2022",
    label: "2022"
  }
];

const EventsSearch: FC<{}> = () => {
  return (
    <form className={styles.form}>
      <section className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">
            <p>Year</p>
            <select name="year" id="year">
              {options.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.control}>
          <label htmlFor="month">
            <p>Month</p>
            <select name="month" id="month">
              {months.map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
