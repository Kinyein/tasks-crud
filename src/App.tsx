import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="p-4 md:p-16">
        <Routes>
          <Route index element={<TasksList />} />
          <Route path="create-task" element={<TaskForm />} />
          <Route path="edit-task/:id" element={<TaskForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
