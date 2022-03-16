import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {

  const [itemList, setItemList] = useState([])
  const addInput = (newInput) => {
    setItemList([...itemList, newInput])

  }

  const deleteTodo = (id) => {
    const newList = itemList.filter((todo) => todo.id !== id);
    setItemList(newList)
  };

  return (
    <div>
      <Input handleInput={addInput} />
      <Output handleOutput={itemList} handleDelete={deleteTodo} />

    </div>
  );
}

export default App;
