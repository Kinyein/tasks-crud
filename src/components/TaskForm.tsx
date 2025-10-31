import { useState, useEffect } from "react";
import { type Task } from "../features/tasks/tasksSlice";
import { useTasksActions } from "../hooks/useTasks";
import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../redux/hooks/useStore";

function TaskForm() {
  const emptyTask: Task = {
    id: "",
    title: "",
    description: "",
    completed: false,
  };
  const [task, setTask] = useState<Task>(emptyTask);

  const { addTask, updateTask } = useTasksActions();
  const navigate = useNavigate();
  const params = useParams();
  const stateTasks = useAppSelector((state) => state.tasks);

  useEffect(() => {
    if (params.id) {
      const taskToEdit =
        stateTasks.find((task) => task.id === params.id) || emptyTask;
      setTask(taskToEdit);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description } = task;
    if (!title && !description) return null;

    if (params.id) {
      updateTask(task);
    } else {
      const newTask = {
        id: window.crypto.randomUUID(),
        title,
        description,
        completed: false,
      };
      addTask(newTask);
    }
    navigate("/");
  };

  const currentTaskActionText = params.id ? "Update Task" : "Add Task";

  return (
    <section>
      <h1 className="text-center mb-4 text-2xl">{currentTaskActionText}</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-5 rounded-xl flex flex-col gap-4"
      >
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          value={task.title}
          className="rounded-md border border-orient-200 py-2 px-4"
        />
        <textarea
          onChange={handleChange}
          name="description"
          id="description"
          value={task.description}
          placeholder="Description"
          className="max-h-60 min-h-[42px] h-[42px] border border-orient-200 rounded-md py-2 px-4"
        ></textarea>
        <button type="submit">{currentTaskActionText}</button>
      </form>
    </section>
  );
}

export default TaskForm;
