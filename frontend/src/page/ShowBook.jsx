import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../component/BackButton'
import Loading from '../component/Loading'

const ShowBook = () => {
  const[book,setbooks]=useState({})
  const[spinner,setSpinner]=useState(false)
  const{id}=useParams()

  useEffect(()=>{
    setSpinner(true);
    axios.get(`${import.meta.env.VITE_BASE_URL}/books/${id}`).then((res)=>{
      setbooks(res.data)
      setSpinner(false)
    }).catch((err)=>{
      console.log(err);
      setSpinner(false)
    })
  },[])
  console.log(book);

  return (
    <div className=''>
      <BackButton/> 
      <h1 className='font-bold text-grey-300 text-2xl mx-10'>ShowBook</h1>
      {spinner?(<Loading/>):(      <div className='flex flex-col border-2 border-sky-500 rounded-xl w-fit px-5 py-10 mx-20 my-10 '>
        <p className=''>ID : {book._id}</p>
        <p className=''>title : {book.title}</p>
        <p className=''>author : {book.author}</p>
        <p className=''>publishYear : {book.publishYear}</p>
      </div>)}

      </div>


  )
}

export default ShowBook