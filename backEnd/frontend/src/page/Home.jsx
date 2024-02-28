import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Booktable from '../home/Booktable';
import BookCard from '../home/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [showtype,setshowtype]=useState("")

  useEffect(() => {
    setSpinner(true);
    axios.get('http://localhost:5555/books')
      .then((res) => {
        setSpinner(true)
        setBooks(res.data.data);
        setSpinner(false);
      })
      .catch(err => {
        console.log(err);
        setSpinner(false);
      });
  }, []);
console.log(books);
  return (
    
    <div className='p-4 '>
      <div className='flex justify-center items-center gap-4 p-8'>
        <button onClick={()=>setshowtype("booktable")}
        className='text- bg-yellow-200 border-gray border-2 font-bold hover:bg-yellow-300 py-1 px-3 rounded-lg'>
          Table
        </button>
        <button onClick={()=>setshowtype("bookcard")}
        className='text- bg-yellow-200 border-gray border-2 font-bold hover:bg-yellow-300 py-1 px-3 rounded-lg'>
          Bookcard
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3x`l mx-5 my-5'></h1>
        <span className='text-2xl font-bold text-gray-500 absolute top-24 right-48 hover:shadow-lg'>Create Your Book</span>
        <Link to={'/books/create'}>
          <MdOutlineAddBox title='Create' className='text-gray-600 absolute right-36 top-24 text-4xl'/>
        </Link>
      </div>
      {spinner ? 
        <Loading />
      : showtype=="bookcard" ? (<BookCard books={books}/>):(<Booktable books={books}/>)}
    </div>
  );
}

export default Home;
