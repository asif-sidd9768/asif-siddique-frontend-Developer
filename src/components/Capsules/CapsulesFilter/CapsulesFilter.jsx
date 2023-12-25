import { useSelector, useDispatch } from "react-redux"
import { isSearchFilterSet } from "../../../services/isSearchFilterSet"
import { applyFilterReset, applySearchFilter, fetchCapsules, updateSearchFilter } from "../../../redux/actions"

const CapsulesFilter = () => {
  const dispatch = useDispatch()
  const {dropdownValues, searchFilter, pageNumber} = useSelector(state => state.capsules)
  
  const updateAndApplyFilter = (filterKey, dropdownValue) => {
    dispatch(updateSearchFilter(filterKey, dropdownValue))
    dispatch(applySearchFilter(filterKey, dropdownValue))
  }

  const handleFilterReset = () => {
    dispatch(applyFilterReset())
    dispatch(fetchCapsules(pageNumber));
  }

  return (
   <section className="block md:flex py-4 w-full">
    {
      Object.keys(dropdownValues).map(filterKey => 
        <div key={filterKey} className="w-full py-1 px-0 md:px-1">
          <select onChange={(e) => updateAndApplyFilter(filterKey, e.target.value)} id={filterKey} className="w-full md:w-full mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Choose a {filterKey}</option>
            {
              dropdownValues[filterKey].map(dropdownOption => 
                <option value={dropdownOption} key={dropdownOption}>{dropdownOption}</option>
              )
            }
          </select>          
        </div>  
      )
    }
    {isSearchFilterSet(searchFilter) && <button onClick={handleFilterReset} className="text-gray-200 text-xl ms-1">x</button>}
   </section>
  )
}

export default CapsulesFilter