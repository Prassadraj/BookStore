import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Load environment variables


  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };

    setSpinner(true);

    axios.post(`${import.meta.env.VITE_BASE_URL}/books`, data)
      .then((res) => {
        setSpinner(false);
        enqueueSnackbar("Book created successfully", { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        setSpinner(false);
        enqueueSnackbar("Error creating book", { variant: 'error' });
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className='text-gray-400 my-4'>Create Book</h1>
      {spinner ? <Loading /> :
        <div className='flex flex-col border-2 border-gray-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label htmlFor="title" className='text-xl font-medium mr-4 text-sky-500'>Title:</label>
            <input
              type="text"
              className='border-2 w-full px-4 py-1 rounded-xl'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='my-4'>
            <label htmlFor="author" className='text-xl font-medium text-sky-500'>Author:</label>
            <input
              type="text"
              className='border-2 w-full px-4 py-1 rounded-xl'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className='my-4'>
            <label htmlFor="publishYear" className='text-xl font-medium text-sky-500'>Publish Year:</label>
            <input
              type="number"
              className='border-2 w-full px-4 py-1 rounded-xl'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
          <button
            className='btn py-2 m-8 bg-red-500'
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      }
    </div>
  );
};

export default CreateBook;
