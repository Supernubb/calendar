import { createDate, createMonth } from "@/src/utils/helpers/date/index";
import { useState } from "react";

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
}

export const useCalendar = ({
  locale,
  selectedDate: date,
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

  const monthsNames = useMemo(() => first, [second]);
  
  return {};
};
