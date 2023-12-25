export const dropdownData = (spacecraftData) => {
  return spacecraftData.reduce(
    (acc, data) => {
      // Extract and store unique 'type' values
      if (!acc.type.includes(data.type)) {
        acc.type.push(data.type);
      }

      // Extract and store unique 'landings' values
      if (!acc.landings.includes(data.landings)) {
        acc.landings.push(data.landings);
      }

      // Extract and store unique 'status' values
      if (!acc.status.includes(data.status)) {
        acc.status.push(data.status);
      }

      return acc;
    },
    { type: [], landings: [], status: [] }
  );
}