import { useContext, useState } from "react";

import { TodoContext } from "..";

export const TodoList = () => {
  const { data } = useContext(TodoContext);
  const [done, setDone] = useState([]);
  // const [checked, setChecked] = useState(false);

  const addToDone = (itemId) => {
    console.log("clicked");
    console.log(itemId);
    const fltr = data.filter(({ id }) => id === itemId);

    const elem = fltr.find(({ isCompleted }) => !isCompleted);
    if (elem) elem.isCompleted = true;

    setDone(elem);
  };

  console.log("done", done);
  return (
    <>
      {data.map(({ id, title, description, isCompleted }) => {
        return (
          <div
            key={id}
            // style={{ textDecoration: checked ? "line-through" : "" }}
          >
            <h3>{title}</h3>
            <p>{description}</p>
            {isCompleted ? <p>Status: Done</p> : <p>Status: Not Done</p>}
            {
              !isCompleted && (
                <button onClick={() => addToDone(id)}>Mark as done</button>
              )
              // :<button onClick={() => addToDone(id)}>Mark as open</button>
            }
            <hr />
          </div>
        );
      })}
    </>
  );
};
