import { useCalendar } from "./hooks/useCalendar";
import s from "./calendar.module.scss";

interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDay?: number;
}

// const Calendar: React.FC<CalendarProps> = () => {
// return <div>Calendarrrrrr</div>;
// };

const Calendar = ({
  selectDate,
  selectedDate,
  locale = "default",
  firstWeekDay = 2,
}: CalendarProps) => {
  const state  = useCalendar({ selectedDate, locale, firstWeekDay });

  console.log(state);

  return <div className={s.calendar}>Calendar</div>;
};

export default Calendar;
