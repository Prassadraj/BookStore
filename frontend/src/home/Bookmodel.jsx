import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const Bookmodel = ({ book, onClose }) => {
  return (
    <div
      className=" fixed top-0 bottom-0 left-0 right-0 z-50 bg-opacity-45 bg-black flex justify-center
    items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] h-[400px] relative bg-white  rounded-lg p-4 flex flex-col"
      >
        <AiOutlineClose  className="top-6 right-6 absolute text-teal-700 text-3xl cursor-pointer" 
        onClick={onClose}/>
                  <h2 className=" w-fit px-2 py-2 bg-violet-300 rounded-lg">
            {book.publishYear}
          </h2>
          {/* <h4 className="my-2 text-gray-400">{book._id}</h4> */}
          <div className="flex justify-center items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-600 text-2xl" />
            <h3 className="text-gray-400 my-1">{book.title}</h3>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <BiUserCircle className="text-red-500 text-2xl" />
            <h3 className="text-gray-400 my-1">{book.author}</h3>
          </div>
          <p className="mt-4">{book.description}</p>
      </div>
    </div>
  );
};

export default Bookmodel;
