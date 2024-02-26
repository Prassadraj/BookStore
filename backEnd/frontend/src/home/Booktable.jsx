import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Booktable = ({books}) => {
  return (
    <div><table className="w-full border-separate border-spacing-2">
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
              <Link to={`/books/show/${book._id}`}>
                <BsInfoCircle title='info' className='text-green-500 text-2xl'/>
              </Link>
              <Link  to={`/books/edit/${book._id}`}>
                <AiOutlineEdit title='Edit' className='text-yellow-500 text-2xl'/>
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete title='delete' className='text-red-500 text-2xl'/>
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export default Booktable