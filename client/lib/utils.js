export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export const hasLatLong = ({ latitude, longitude }) => {
  return typeof latitude === 'undefined' && typeof longitude === 'undefined';
};

export const categoriesToString = categories => categories.map(({ alias }) => alias).join(',');
