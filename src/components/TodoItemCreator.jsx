import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "../recoil/todoAtom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldToDoList) => [
      ...oldToDoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
    // console.log(getId())
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" name="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem} disabled={!inputValue}>Add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}
export default TodoItemCreator;
