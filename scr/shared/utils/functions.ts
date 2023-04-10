import dayjs from "dayjs";
import { IDay } from "../store/models";

export const getMonthDays = (): IDay[] => {
  const monthDays = [];
  const today = dayjs();

  const daysInMonth = today.daysInMonth();

  for (let i = 0; i < daysInMonth; i++) {
    const date = today.date(i + 1);
    const dayObject = {
      id: i + 1,
      date: date,
      todos: [],
    };
    monthDays.push(dayObject);
  }

  return monthDays;
};

//  {
//           id: Math.floor(Math.random() * 1000),
//           text: `Do something ${Math.floor(Math.random() * 1000)}`,
//           isCompleted: false,
//         },
//         {
//           id: Math.floor(Math.random() * 1000),
//           text: `Do something ${Math.floor(Math.random() * 1000)}`,
//           isCompleted: false,
//         },
//         {
//           id: Math.floor(Math.random() * 1000),
//           text: `Do something ${Math.floor(Math.random() * 1000)}`,
//           isCompleted: true,
//         },
//         {
//           id: Math.floor(Math.random() * 1000),
//           text: `Do something ${Math.floor(Math.random() * 1000)}`,
//           isCompleted: true,
//         },
