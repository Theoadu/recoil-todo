import React from "react";

import ToDoList from "./ToDoList";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function App() {

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <ToDoList />
    </>
  );
}

export default App;
