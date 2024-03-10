"use client";

import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import styles from "./globals.module.css";

export default function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <main className={styles.app__container}>
      <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </main>
  );
}
