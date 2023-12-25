// capsulesActions.js
import {
  changePageNumber,
  loadCapsules,
  applyFilters,
  setDropdownData,
  resetFilters,
  updateCapsulesOnFilter,
  changeLoading,
  selectedCapsule,
  selectedCapsuleData,
} from './slices/capsulesSlice';

import { fetchCapsulesData } from '../services/fetchCapsules';
import { dropdownData } from '../services/dropdownData';
import { fetchOneCapsuleData } from '../services/fetchOneCapsule';

const handlePageChange = (toChange, pageNumber, pageSize, totalCapsules) => {
  if (toChange === 'prev') {
    if (pageNumber > 1) {
      return pageNumber - 1;
    }
  } else {
    if (pageNumber * pageSize < totalCapsules) {
      return pageNumber + 1;
    }
  }
  return pageNumber;
};

export const changePage = (toChange) => async (dispatch, getState) => {
  const { pageNumber, pageSize, totalCapsules } = getState().capsules;
  const updatedPage = handlePageChange(toChange, pageNumber, pageSize, totalCapsules);
  dispatch(changePageNumber(updatedPage));
};

export const fetchCapsules = (pageNumber = 1, pageSize = 5) => async (dispatch) => {
  try {
    const payload = await fetchCapsulesData(pageNumber, pageSize);
    dispatch(loadCapsules(payload));
  } catch (error) {
    console.error(error);
  }
};

export const fetchFilters = () => async (dispatch) => {
  try {
    dispatch(changeLoading(true));
    const { capsules } = await fetchCapsulesData(0, 0);
    const dropData = dropdownData(capsules);
    dispatch(setDropdownData(dropData));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const updateSearchFilter = (filterKey, dropdownValue) => async (dispatch) => {
  try {
    const payload = {
      filterKey,
      dropdownValue,
    };
    dispatch(applyFilters(payload));
  } catch (error) {
    console.error(error);
  }
};

export const applySearchFilter = (filterKey, dropdownValue) => async (dispatch, getState) => {
  try {
    dispatch(changeLoading(true));
    const filters = getState().capsules.searchFilter;
    const searchFilters = { ...filters, [filterKey]: dropdownValue };
    const url = new URL('https://api.spacexdata.com/v3/capsules');
    Object.keys(searchFilters).forEach((key) => {
      if (searchFilters[key]) {
        url.searchParams.append(key, searchFilters[key]);
      }
    });

    const response = await fetch(url);
    const result = await response.json();
    dispatch(updateCapsulesOnFilter(result));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const applyFilterReset = () => (dispatch) => {
  dispatch(resetFilters());
};

export const setLoading = (loadingState) => (dispatch) => {
  dispatch(changeLoading({ payload: loadingState }));
};

export const setSelectedCapsule = (capsuleSerial) => async (dispatch) => {
  dispatch(selectedCapsule(capsuleSerial))
  try{
    const capsuleData = await fetchOneCapsuleData(capsuleSerial)
    dispatch(selectedCapsuleData(capsuleData))
  }catch(error){
    console.log(error)
  }
}

export const setSelectedCapsuleData = (capsuleData) => (dispatch) => {
  
}