import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../../../redux/actions"

const CapsulesPagination = () => {
  const { pageNumber } = useSelector(state => state.capsules)
  const dispatch = useDispatch()
  return (
    <nav className=" md:flex-row text-right pt-4" aria-label="Table navigation">
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
            <button onClick={() => dispatch(changePage('prev'))} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
        </li>
        <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{pageNumber}</a>
        </li>
        <li >
          <button onClick={() => dispatch(changePage('next'))} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default CapsulesPagination