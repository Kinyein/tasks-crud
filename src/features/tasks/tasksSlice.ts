import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export type TaskId = Pick<Task, "id">;
export type StatusTask = Pick<Task, "id" | "completed">;

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addATask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    removeATask: (state, action: PayloadAction<TaskId>) => {
      const taskIdToRemove = action.payload.id;
      return state.filter((task) => task.id !== taskIdToRemove);
    },
    updateATask: (state, action: PayloadAction<Task>) => {
      const newTask = action.payload;
      const taskToUpdate = state.find((task) => task.id === newTask.id);

      if (taskToUpdate) {
        taskToUpdate.title = newTask.title;
        taskToUpdate.description = newTask.description;
      }
    },
    updateTaskStatus: (state, action: PayloadAction<StatusTask>) => {
      const { id, completed } = action.payload;
      const taskToUpdate = state.find((task) => task.id === id);
      taskToUpdate!.completed = completed;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addATask, removeATask, updateATask, updateTaskStatus } =
  tasksSlice.actions;

export default tasksSlice.reducer;
