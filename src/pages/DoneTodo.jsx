import { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "..";

export const DoneTodo = () => {
  const { data } = useContext(TodoContext);

  const doneItem = data.filter(({ isCompleted }) => {
    return isCompleted;
  });

  return (
    <>
      <h3>Done Todo:{doneItem.length}</h3>
      {doneItem.map(({ id, title, description, isCompleted }) => {
        return (
          <div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              {isCompleted ? <p>Status: Done</p> : <p>Status: Not Done</p>}
              <Link to={`/donetodo/${id}`}>Expand Todo</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
