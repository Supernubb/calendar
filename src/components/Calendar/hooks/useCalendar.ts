import { getWeekDaysNames } from "@/src/utils/helpers/date/getWeekDaysNames";
import {
  createDate,
  createMonth,
  getMonthNumberOfdays,
  getMonthsNames,
} from "@/src/utils/helpers/date/index";
import { useMemo, useState } from "react";

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
  firstWeekDay: number;
}

const getYearsInterval = (year: number) => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array(10)].map((_, i) => startYear + i);
};

export const useCalendar = ({
  locale = "default",
  selectedDate: date,
  firstWeekDay = 2,
}: UseCalendarParams) => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  const [selectedDate, setSelectedDate] = useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({
      date: new Date(selectedDate.year, selectedDate.monthIndex),
      locale,
    })
  );

  const [selectedYear, setSelectedYear] = useState(selectedDate.year);
  const [selectedYearInterval, setSelectedYearInterval] = useState(
    getYearsInterval(selectedDate.year)
  );

  const monthsNames = useMemo(() => getMonthsNames(locale), []);
  const weekDaysNames = useMemo(
    () => getWeekDaysNames(firstWeekDay, locale),
    []
  );

  const days = useMemo(
    () => selectedMonth.createMonthDays(),
    [selectedMonth, selectedYear]
  );

  const calendarDays = useMemo(() => {
    const monthNumberIfDays = getMonthNumberOfdays(
      selectedDate.monthIndex,
      selectedYear
    );

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];
    const lastDay = days[monthNumberIfDays - 1];

    const shiftIndex = firstWeekDay - 1;

    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    const numberOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i++) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i++
    ) {
      result[i] = days[i - numberOfPrevDays];
    }

    for (
      let i = totalCalendarDays - numberOfNextDays;
      i < totalCalendarDays;
      i++
    ) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
    }

    return result;
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthsNames,
      selectedDate,
      selectedMonth,
      selectedYear,
      selectedYearInterval,
    },
  };
};
