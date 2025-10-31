import { Link } from "react-router";
import { useAppSelector } from "../redux/hooks/useStore";
import { AiOutlineUnorderedList } from "react-icons/ai";

function Nav() {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <header className="bg-orient-900">
      <nav className="flex gap-5 items-center justify-between py-4 px-8 flex-wrap md:flex-nowrap ">
        <h1 className="text-xl font-bold">
          <Link className="hover:border-b" to="/">
            Current tasks: {tasks.length}
          </Link>
        </h1>

        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-2 hover:border-b">
            Get back to tasks list <AiOutlineUnorderedList size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
