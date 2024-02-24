import React  from "react";
import { Routes,Route } from "react-router-dom";
import CreateBook from "./page/CreateBook";
import DeleteBook from "./page/DeleteBook";
import ShowBook from "./page/ShowBook";
import Home from "./page/Home";
import EditBook from "./page/EditBook";
// import BackButton from "./component/BackButton";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/books/create' element={<CreateBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
      <Route path="/books/show/:id" element={<ShowBook/>} />
      
    </Routes>
  )
}