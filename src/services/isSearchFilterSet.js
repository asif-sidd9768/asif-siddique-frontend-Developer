export const isSearchFilterSet = (searchFilter) => {
  // Check if all values in the searchFilter object are null
  return Object.values(searchFilter).some(value => value !== "");
}
