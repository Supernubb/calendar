"use client";

import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import { formateDate } from "../utils/helpers/date";

import app from "../styles/app.module.scss";
import date from "../styles/date.module.scss";

export default function Page() {
  const [selectedDate, selectDate] = useState(new Date());

  return (
    <main className={app.app__container}>
      <div className={date.date__container}>
        {formateDate(selectedDate, "DD.MM.YYYY")}
      </div>
      <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </main>
  );
}
