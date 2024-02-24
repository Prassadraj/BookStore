import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Loading from '../component/Loading'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import BackButton from '../component/BackButton'


const EditBook = () => {
  const [title,settitle]=useState("")
  const [author,setauthor]=useState("")
  const [publishYear,setPublishYear]=useState("")
  const[spinner,setSpinner]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams()

  useEffect(()=>{
    setSpinner(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      settitle(res.data.title)
      setauthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setSpinner(false)
    }).catch((err)=>{
      setSpinner(false)
      console.log(err);
      alert("Somthing went Wrong,Check it")
    })

  },[])
  const handlerEditBook=()=>{
    const data={
      title,
      author,
      publishYear
    }
    setSpinner(true);
    axios.put(`http://localhost:5555/books/${id}`,data)
    .then((res)=>{
      setSpinner(false)
      navigate('/')
    })
    .catch((err)=>{
    console.log(err);
    alert("An error happened,check console Man")
    })
  }

  return (

    <div>
      <BackButton/>
      <h1 className='text-gray-400 my-4'>Edit Book</h1>
      {spinner?<Loading/>:
      (      <div className='flex flex-col border-2 border-gray-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label htmlFor="title" className='text-xl font-medium mr-4 text-sky-500'>Title:</label>
        <input type="text" className='border-2 w-full  px-4 py-1 rounded-xl'
        value={title}
        onChange={(val)=>settitle(val.target.value)}/>
      </div>
      <div className='my-4'>
        <label htmlFor="title" className='text-xl font-medium text-sky-500'>Author:</label>
        
        <input type="text" className='border-2 w-full  px-4 py-1 rounded-xl'
        value={author}
        onChange={(val)=>setauthor(val.target.value)}/>
      </div>
      <div className='my-4'>
        <label htmlFor="title" className='text-xl font-medium text-sky-500'>PublishYear:</label>
        <input type="number" className='border-2 w-full px-4 py-1 rounded-xl'
        value={publishYear}
        onChange={(val)=>setPublishYear(val.target.value)}/>
      </div>
      <button className='btn py-2 m-8 bg-red-500'
      onClick={handlerEditBook}>Save</button>
    </div>)}

    </div>
  )
}

export default EditBook