export const selectParams = ({ condition }) => {
  const { radius, longitude, latitude, categories } = condition;

  return {
    radius,
    longitude,
    latitude,
    categories,
  };
};
