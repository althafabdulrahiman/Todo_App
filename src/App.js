import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<TodoApp />} /> */}
        <Route path="/" element={<TodoApp />}  />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};
