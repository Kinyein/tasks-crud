import { AiOutlinePlus } from "react-icons/ai";
import { useAppSelector } from "../redux/hooks/useStore";
import { Link } from "react-router";
import TaskCard from "./TaskCard";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        <Link
          to="/create-task"
          className="flex justify-center items-center hover:bg-zinc-700 rounded-md p-2"
        >
          <AiOutlinePlus size={50} />
        </Link>
      </div>
    </section>
  );
}

export default TasksList;
