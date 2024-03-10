interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
}

// const Calendar: React.FC<CalendarProps> = () => {
  // return <div>Calendarrrrrr</div>;
// };

const Calendar = (props: CalendarProps) => {
  return <div>Calendarrrrrr</div>;
};

export default Calendar;
