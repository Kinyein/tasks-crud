import {
  addATask,
  removeATask,
  updateATask,
  updateTaskStatus,
  type StatusTask,
  type Task,
  type TaskId,
} from "../features/tasks/tasksSlice";
import { useAppDispatch } from "../redux/hooks/useStore";

export const useTasksActions = () => {
  const dispatch = useAppDispatch();

  const addTask = (task: Task) => {
    dispatch(addATask(task));
  };

  const removeTask = (taskId: TaskId) => {
    dispatch(removeATask(taskId));
  };

  const updateTask = (task: Task) => {
    dispatch(updateATask(task));
  };

  const statusTask = (taskStatus: StatusTask) => {
    dispatch(updateTaskStatus(taskStatus));
  };

  return { addTask, removeTask, updateTask, statusTask };
};
