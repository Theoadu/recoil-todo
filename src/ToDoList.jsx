import React from "react";
import { useRecoilValue } from "recoil";

// import { todoListState } from "./recoil/todoAtom";

import ToDoItem from "./ToDoItem";
import { filteredTodoListState } from "./recoil/todoSelector";

const ToDoList = () => {
//   const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);
  console.log(todoList)
  return (
    <>
      <h3>To Do List</h3>
      {todoList.map((todoItem, i) => (
        <ToDoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default ToDoList;
