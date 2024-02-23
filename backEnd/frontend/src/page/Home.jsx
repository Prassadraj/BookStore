import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    axios.get('http://localhost:5555/books')
      .then((res) => {
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
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-5'>Book List</h1>
        <Link to={'/books/create'}>
          <MdOutlineAddBox className='bg-green-300 text-4xl'/>
        </Link>
      </div>
      {spinner ? (
        <Loading />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="text-black border border-slate-500 rounded-md">
              <th>No</th>
              <th>Title</th>
              <th className="max-md:hidden">Author</th>
              <th className="max-md:hidden">PublishYear</th>
              <th className="max-md:hidden">Modify</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="text-amber-700 border rounded-md text-center">{index + 1}</td>
                <td className="border rounded-md text-center text-amber-700">{book.title}</td>
                <td className="border rounded-md text-center text-amber-700">{book.author}</td>
                <td className="border rounded-md text-center text-amber-700">{book.publishYear}</td>
                <td>
                  <div className="flex justify-center gap-4">
                    <Link to={`/book/show/${book._id}`}>
                      <BsInfoCircle className='text-green-500 text-2xl'/>
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                      <AiOutlineEdit className='text-yellow-500 text-2xl'/>
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                      <MdOutlineDelete className='text-red-500 text-2xl'/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
