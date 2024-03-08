import { useState } from "react";

interface UseCalendarParams {
  locale?: string;
  selectedDate: Date;
}

export const useCalendar = ({ locale, selectedDate }: UseCalendarParams) => {
  const [mode, setMode] = useState<"days" | "months" | "years">("days");
  return {};
};
