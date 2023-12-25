import { createSlice } from '@reduxjs/toolkit'
import { fetchCapsulesData } from '../../services/fetchCapsules'
import { dropdownData } from '../../services/dropdownData'

export const initialState = {
  pageNumber: 1,
  pageSize: 5,
  capsules: [],
  totalCapsules: null,
  selectedCapsule: null,
  selectedCapsuleData: {},
  loading: false,
  searchFilter: {
    landings: null,
    status: null,
    type: null
  },
  dropdownValues: {
    landings: [],
    status: [],
    type: []
  }
}

const capsulesSlice = createSlice({
  name: "capsules",
  initialState,
  reducers: {
    changePageNumber: (state, {payload}) => {
      state.pageNumber = payload
    },
    loadCapsules: (state, {payload}) => {
      const {capsules, totalCapsules} = payload
      state.capsules = capsules
      state.totalCapsules = totalCapsules
    },
    applyFilters: (state, {payload}) => {
      const {filterKey, dropdownValue} = payload
      state.searchFilter = {...state.searchFilter, [filterKey]: dropdownValue}
    },
    updateCapsulesOnFilter: (state, {payload}) => {
      state.capsules = payload
    },
    setDropdownData: (state, {payload}) => {
      state.dropdownValues = {
        type:payload.type,
        landings: payload.landings,
        status: payload.status
      }
    },
    selectedCapsule: (state, {payload}) => {
      state.selectedCapsule = payload
    },
    selectedCapsuleData: (state, {payload}) => {
      state.selectedCapsuleData = payload
    },
    changeLoading: (state, {payload}) => {
      state.loading = payload
    },
    resetFilters: (state) => {
      state.searchFilter = initialState.searchFilter
    }
  }
})

export const {changePageNumber, loadCapsules, applyFilters, selectedCapsuleData, setDropdownData,resetFilters, updateCapsulesOnFilter, changeLoading, selectedCapsule} = capsulesSlice.actions

export default capsulesSlice.reducer

