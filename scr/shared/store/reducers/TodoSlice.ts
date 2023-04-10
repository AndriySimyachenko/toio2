import { getMonthDays } from "../../utils";
import { RootState } from "../hooks";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { IDay } from "../models";
import dayjs from "dayjs";

interface IState {
  days: IDay[];
}

const initialState: IState = { days: getMonthDays() };

const todoSlice = createSlice({
  name: "daysList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { dayId, text } = action.payload;
      let i: number = 0;
      state.days[Number(dayId) - 1].todos.push({
        id: i,
        text,
        isCompleted: false,
      });
      i++;
    },
    removeTodo: (state, action) => {
      const { dayId, todoId } = action.payload;
      state.days[Number(dayId) - 1].todos = state.days[
        Number(dayId) - 1
      ].todos.filter((todo) => todo.id !== todoId);
    },
    toggleCompletedTodo: (state, action) => {
      const { dayId, todoId } = action.payload;
      const selectedTodo = state.days[Number(dayId) - 1].todos.find(
        (todo) => todo.id === todoId
      );
      if (selectedTodo) {
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
      }
    },
    editTodo: (state, action) => {
      const { dayId, todoId, text } = action.payload;
      state.days[Number(dayId) - 1].todos[todoId].text = text;
    },
  },
});

export const { addTodo, removeTodo, toggleCompletedTodo, editTodo } =
  todoSlice.actions;
export const todoSelector = (state: RootState) => state.daysList;
export default todoSlice.reducer;

// const selectedTodo = state.days[Number(dayId) - 1].todos.find(
//   (todo) => todo.id === todoId
// );

//  toggleCompletedTodo: (state, action) => {
//       const { dayId, todoId } = action.payload;
//       const selectedTodo = state.days[Number(dayId) - 1].todos.find(
//         (todo) => todo.id === todoId
//       );
//       if (selectedTodo) {
//         selectedTodo.isCompleted = !selectedTodo.isCompleted;
//       }
//     },

//  removeTodo: (state, action) => {
//       const { dayId, todoId } = action.payload;
//       state.days[Number(dayId) - 1].todos = state.days[
//         Number(dayId) - 1
//       ].todos.filter((todo) => todo.id !== todoId);
//     },
