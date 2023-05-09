import { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "..";

export const OpenTodo = () => {
  const { data } = useContext(TodoContext);

  const openItem = data.filter(({ isCompleted }) => {
    return !isCompleted;
  });
  console.log(openItem);
  return (
    <>
      <h3>Open Todo:{openItem.length}</h3>
      {openItem.map(({ id, title, description, isCompleted }) => {
        return (
          <div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              {isCompleted ? <p>Status: Done</p> : <p>Status: Not Done</p>}
              <Link to={`/opentodo/${id}`}>Expand Todo</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
