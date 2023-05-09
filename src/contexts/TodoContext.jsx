import { createContext, useState, useEffect } from "react";

import { fakeFetch } from "../data/fakeFetch";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const [doneItem, setDoneItem] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/todos");
      if (response.status === 200) {
        setData(response.data.todos);
        // setDoneItem(response.data.todos);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const addDoneITem = (doneItem) => {
  //   const addItem = data.filter(({ isCompleted }) => {
  //     return isCompleted;
  //   });
  //   console.log("addItem", addItem);
  //   setDoneItem(()=>addItem);
  // };
  // console.log("doneITem", doneItem);
  return (
    <>
      {data && (
        <div>
          <TodoContext.Provider value={{ data }}>
            {children}
          </TodoContext.Provider>
        </div>
      )}
    </>
  );
};
