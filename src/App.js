import React from "react";

import ToDoList from "./components/ToDoList";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

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
