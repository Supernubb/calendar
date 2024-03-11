"use client";

import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import styles from "./globals.module.css";
import { formateDate } from "../utils/helpers/date";

export default function Page() {
  const [selectedDate, selectDate] = useState(new Date());

  return (
    <main className={styles.app__container}>
      <div className={styles.date__container}>{formateDate(selectedDate, "DD.MM.YYYY")}</div>
      <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </main>
  );
}
