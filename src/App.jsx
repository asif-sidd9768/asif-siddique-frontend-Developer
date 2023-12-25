import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { fetchCapsules, fetchFilters } from "./redux/slices/capsulesSlice";
import { fetchCapsules, fetchFilters } from "./redux/actions";

import Capsules from "./components/Capsules/Capsules";

import "./App.css";
import Banner from "./components/Banner/Banner";

function App() {
  const { pageNumber } = useSelector((state) => state.capsules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCapsules(pageNumber));
    dispatch(fetchFilters())
  }, [dispatch, pageNumber]);

  return (
    <div className="bg-black">
      <Banner />
      <Capsules />
    </div>
  );
}

export default App;
