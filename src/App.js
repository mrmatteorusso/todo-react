import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";

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
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <Input handleInput={addInput} />
              <Output items={itemList} handleDelete={deleteTodo} />
              <Link to="/about">About</Link>
            </>
          }>

          </Route>
          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={<App />} /> */}
        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;
