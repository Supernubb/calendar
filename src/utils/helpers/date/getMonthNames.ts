import { createDate } from "./createDate";

export const getMonthnames = (locale: string = "default") => {
  const monthNames: {
    month: ReturnType<typeof createDate>["month"];
    monthShort: ReturnType<typeof createDate>["monthShort"];
    monthIndex: ReturnType<typeof createDate>["monthIndex"];
    date: ReturnType<typeof createDate>["date"];
  }[] = Array.from({ length: 12 });

  const d = new Date();

  monthNames.forEach((_, i) => {
    const { month, monthIndex, monthShort, date } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()),
    });
      
      monthNames[monthIndex] = { month, monthShort, monthIndex, date };
  });

  return monthNames;
};
