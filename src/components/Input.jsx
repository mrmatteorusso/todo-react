import React, { useState } from "react";

function Input({ handleInput }) {
  const [input, setInput] = useState("");
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    handleInput(newTodo);
    // console.log(handleInput);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo(e.target.value);
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="add item here"
        onKeyUp={handleKeyPress}
      />
      <button onClick={() => addTodo(input)}>Add</button>
    </div>
  );
}

export default Input;
