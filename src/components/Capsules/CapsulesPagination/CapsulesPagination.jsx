import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../../../redux/actions"
import { calculateTotalPages } from "../../../services/calculateTotalPages"

const CapsulesPagination = () => {
  const { pageNumber, totalCapsules, pageSize } = useSelector(state => state.capsules)
  const dispatch = useDispatch()
  return (
    <nav className=" md:flex-row text-right pt-4 mx-3" aria-label="Table navigation">
      {/* <span className="text-gray-300">Showing</span> */}
      <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
            <button onClick={() => dispatch(changePage('prev'))} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
        </li>
        <li>
            <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Showing {pageNumber} of {calculateTotalPages(totalCapsules, pageSize)}</span>
        </li>
        <li >
          <button onClick={() => dispatch(changePage('next'))} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default CapsulesPagination