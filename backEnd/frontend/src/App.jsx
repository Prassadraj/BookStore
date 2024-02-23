import React  from "react";
import { Routes,Route } from "react-router-dom";
import CreateBook from "./page/CreateBook";
import DeleteBook from "./page/DeleteBook";
import ShowBook from "./page/ShowBook";
import Home from "./page/Home";
import EditBook from "./page/EditBook";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/edit" element={<EditBook/>} />
      <Route path="/books/delete" element={<DeleteBook/>} />
      <Route path="/books/show" element={<ShowBook/>} />
    </Routes>
  )
}