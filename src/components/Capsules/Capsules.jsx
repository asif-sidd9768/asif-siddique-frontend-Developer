import { useSelector } from "react-redux"

import CapsulesFilter from "./CapsulesFilter/CapsulesFilter"
import CapsulesGrid from "./CapsulesGrid/CapsulesGrid"
import CapsulesPagination from "./CapsulesPagination/CapsulesPagination"
import CapsulesSearch from "./CapsulesSearch/CapsulesSearch"
import EmptyGrid from "../Capsules/CapsulesGrid/EmptyGrid"
import CapsulesModal from "./CapsulesModal/CapsulesModal"
import { isSearchFilterSet } from "../../services/isSearchFilterSet"

const Capsules = () => {
  const {capsules, searchFilter, selectedCapsule} = useSelector(state => state.capsules)
  
  return (
    <div className="relative overflow-x-auto px-6 py-6">
      <div className="flex items-center justify-between bg-gray-900 px-6">
        <CapsulesFilter />
        <CapsulesSearch />
      </div>
      {
        capsules.length !== 0 ? 
        <CapsulesGrid/> : 
        <EmptyGrid />
      }
      {!isSearchFilterSet(searchFilter) && <CapsulesPagination />}
      {selectedCapsule && <CapsulesModal />}
    </div>
  )
}

export default Capsules