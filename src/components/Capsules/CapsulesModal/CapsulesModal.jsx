import {useSelector, useDispatch} from "react-redux"
import { setSelectedCapsule } from "../../../redux/actions"

const CapsulesModal = () => {
  const {selectedCapsuleData} = useSelector(state => state.capsules)
  const dispatch = useDispatch()

  return (
    <div className="bg-gray-300 text-gray-700 rounded-md p-6 w-6/12 h-6/12 mt-40  mx-auto fixed top-0 left-0 right-0">
      <span className="absolute right-2 top-0 text-xl cursor-pointer" onClick={() => dispatch(setSelectedCapsule(null))}>x</span>
      {
        Object.keys(selectedCapsuleData).length > 0 && Object.keys(selectedCapsuleData).map(key => 
          typeof selectedCapsuleData[key] !== "object" && 
          <p className="py-2"><span className="text-gray-500">{key}</span>: <span className="">{selectedCapsuleData[key]}</span></p>
        )
      }
    </div>
  )
}

export default CapsulesModal