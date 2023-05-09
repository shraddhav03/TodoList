import { useContext } from "react";
import { useParams } from "react-router-dom";

import { TodoContext } from "..";

export const TodoCard = () => {
  const { todoId } = useParams();
  const { data } = useContext(TodoContext);

  const getTodoDetails = (todos, todoId) => {
    return todos.find((todo) => todo.id === Number(todoId));
  };

  const todo = getTodoDetails(data, todoId);
  const { id, title, description, isCompleted } = todo;

  return (
    <>
      <div>
        <h2>Todo Description</h2>
        <h3>{title}</h3>
        <p>Description: {description}</p>
        {isCompleted ? <p>Status: Done</p> : <p>Status: Not Done</p>}
      </div>
    </>
  );
};
