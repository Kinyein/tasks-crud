import { Link } from "react-router";
import { useTasksActions } from "../hooks/useTasks";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import type { Task } from "../features/tasks/tasksSlice";

function TaskCard({ task }: { task: Task }) {
  const { id, title, description, completed } = task;

  const { removeTask, statusTask } = useTasksActions();

  const handleDelete = (taskId: string) => {
    removeTask({ id: taskId });
  };

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    statusTask({ id, completed: checked });
  };

  const checkButtonStyle = completed
    ? "bg-emerald-700"
    : "border border-emerald-700";

  return (
    <article
      key={task.id}
      className="task-card w-auto p-2 bg-zinc-700 rounded-md relative"
    >
      <h3 className="text-xl font-semibold mb-4 max-w-[calc(100%-116px)]">
        {title}
      </h3>
      <p>{description}</p>
      <p className="mt-3">Status: {completed ? "Completed" : "Pending"}</p>
      <div className="task-card__actions flex gap-2 absolute top-2 right-2 max-w-max items-center">
        <button
          className="bg-red-800! hover:bg-red-900! p-2!"
          title="Delete"
          onClick={() => handleDelete(id)}
        >
          <AiOutlineDelete size={20} />
        </button>
        <Link
          title="Edit"
          to={`/edit-task/${id}`}
          className="hover:border-none! bg-orient-600 p-2 rounded-md hover:bg-orient-700"
        >
          <AiOutlineEdit size={20} />
        </Link>
      </div>
      <form className="absolute bottom-2 right-2 w-5 h-5">
        <input
          className={`w-full h-full rounded-md appearance-none cursor-pointer duration-200 hover:bg-emerald-500 hover:opacity-60 ${checkButtonStyle}`}
          type="checkbox"
          name="status"
          checked={completed}
          onChange={handleChangeStatus}
        />
      </form>
    </article>
  );
}

export default TaskCard;
