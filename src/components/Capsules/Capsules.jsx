import { useSelector } from "react-redux"

import CapsulesFilter from "./CapsulesFilter/CapsulesFilter"
import CapsulesGrid from "./CapsulesGrid/CapsulesGrid"
import CapsulesPagination from "./CapsulesPagination/CapsulesPagination"
import EmptyGrid from "../Capsules/CapsulesGrid/EmptyGrid"
import CapsulesModal from "./CapsulesModal/CapsulesModal"
import { isSearchFilterSet } from "../../services/isSearchFilterSet"

const Capsules = () => {
  const {capsules, searchFilter, selectedCapsule} = useSelector(state => state.capsules)
  
  return (
    <main className="relative px-0 md:px-6 py-6">
      <section className="flex items-center justify-between flex-col md:flex-row pt-3 md:pt-0 bg-gray-900 px-6">
        <span className="text-gray-300">Filter the Capsules:</span> <CapsulesFilter />
      </section>
      {
        capsules.length !== 0 ? 
        <CapsulesGrid/> : 
        <EmptyGrid />
      }
      {!isSearchFilterSet(searchFilter) && <CapsulesPagination />}
      {selectedCapsule && <CapsulesModal />}
    </main>
  )
}

export default Capsules