export const calculateTotalPages = (totalElements, elementsPerPage) => {
  const totalPages = Math.ceil(totalElements / elementsPerPage);
  return totalPages;
}