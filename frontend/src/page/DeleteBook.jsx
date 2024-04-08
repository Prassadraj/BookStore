import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

import Loading from '../component/Loading'
import BackButton from '../component/BackButton'
import axios from 'axios'


const DeleteBook = () => {
  const [spinner,setSpinner]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()
  const handlerDeleteButton = () => {
    setSpinner(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setSpinner(false);
        navigate('/');
      })
      .catch(err => {
        setSpinner(false);
        console.error('Error deleting book:', err);
        alert("Something went wrong while deleting the book. Please try again.");
      });
};

  return (
    <div><BackButton/>
    <div className='text-3xl flex flex-col items-center my-4 mx-auto'>
    <h1 className=''>Delete Seletion</h1>
    </div>
    {spinner?(<Loading/>):""}
     <div className='flex flex-col rounded-lg border-2 items-center border-gray-400 w-[600px] p-8 mx-auto'>
    <h1 className='text-green-600 text-3xl'>Are you Sure Want to Delete</h1>
    <button onClick={handlerDeleteButton} className='btn bg-rose-500 p-2 my-4 rounded-lg text-white'>Delete</button>
  </div>


    </div>
  )
}

export default DeleteBook