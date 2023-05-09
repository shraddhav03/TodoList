import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { TodoList } from "./pages/TodoList";
import { DoneTodo } from "./pages/DoneTodo";
import { OpenTodo } from "./pages/OpenTodo";
import { TodoCard } from "./components/TodoCard";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/donetodo" element={<DoneTodo />} />
        <Route path="/donetodo/:todoId" element={<TodoCard />} />
        <Route path="/opentodo" element={<OpenTodo />} />
        <Route path="/opentodo/:todoId" element={<TodoCard />} />
      </Routes>
    </div>
  );
}
