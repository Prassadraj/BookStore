import { BiUserCircle, BiShow } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import Bookmodel from "./Bookmodel";
import { useState } from "react";

const BookSingleCard = ({ book }) => {
  const [showmodel, setshowmodel] = useState(false);
  return (
    <div
      key={book._id}
      className="border-2 m-4 relative rounded-lg border-gray-500 py-2 px-4 hover:shadow-xl"
    >
      <h2 className=" absolute top-1 right-2 px-2 py-2 bg-violet-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-400">{book._id}</h4>
      <div className="flex justify-center items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-600 text-2xl" />
        <h3 className="text-gray-400 my-1">{book.title}</h3>
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <BiUserCircle className="text-red-500 text-2xl" />
        <h3 className="text-gray-400 my-1">{book.author}</h3>
      </div>
      <div className="flex justify-between items-center  mt-3 p-4">
        <BiShow className="text-3xl hover:text-black cursor-pointer" onClick={()=>setshowmodel(true)} />

        <Link to={`/books/show/${book._id}`}>
          <BsInfoCircle className="text-2xl text-gray-600" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-blue-400" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-400" />
        </Link>
      </div>
      {showmodel&&(<Bookmodel book={book} onClose={()=>setshowmodel(false)}/>)}
    </div>
  );
};

export default BookSingleCard;
