import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Header from "./components/Header";

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
    <div className="container">
      <Header />
      <Input handleInput={addInput} />
      <Output handleOutput={itemList} handleDelete={deleteTodo} />

    </div>
  );
}

export default App;
