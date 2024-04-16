import React, { useState } from "react";
import axios from "axios";
import Loading from "../component/Loading";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Load environment variables

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      description,
    };

    setSpinner(true);

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/books`, data)
      .then((res) => {
        setSpinner(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setSpinner(false);
        enqueueSnackbar("Error creating book", { variant: "error" });
        console.error(err);
      });
  };

  return (
<div className="" style={{ background: "#343a40" }}>
  {spinner ? (
    <Loading />
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div
        style={{ background: "#42494e" }}
        className="flex flex-col border border-gray-700 shadow-md rounded-lg w-[600px] h-[750px] p-4 mx-auto"
      >
        <div className="my-2">
          <h1
            className=" text-2xl my-4 flex justify-center"
            style={{ color: "#f2f2f2" }}
          >
            Add Book
          </h1>
          <label htmlFor="title" className="text-xl font-medium mr-4 text-gray-300">
            Title:
          </label>
          <input
            type="text"
            className="border border-tan-400  w-full px-4 py-1 rounded-md bg-transparent text-gray-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl font-medium text-gray-300">
            Author:
          </label>
          <input
            type="text"
            className="border border-tan-400   w-full px-4 py-1 rounded-md bg-transparent text-gray-300"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl font-medium text-gray-300">
            Publish Year:
          </label>
          <input
            type="number"
            className="border border-tan-400  w-full px-4 py-1 rounded-md bg-transparent text-gray-300"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="description" className="text-xl font-medium text-gray-300">
            Narrate the story
          </label>
          <br />
          <textarea
            className="w-full p-5 border rounded-md border-tan-400 bg-transparent text-gray-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name=""
            placeholder=""
            id=""
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <button
          style={{ background: "#2f80ed", color: "#f2f2f2" }}
          className="btn py-2 m-8 text-center rounded-md"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  )}
</div>





  );
};

export default CreateBook;
