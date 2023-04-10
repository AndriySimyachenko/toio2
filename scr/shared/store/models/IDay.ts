import { Dayjs } from "dayjs";
import { ITodo } from "./ITodo";
export interface IDay {
  id: number;
  date: Dayjs;
  todos: ITodo[];
}
