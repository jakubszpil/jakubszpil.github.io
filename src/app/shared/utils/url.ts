export const isValidUrl = (url: unknown) => {
  try {
    new URL(url as URL);
    return true;
  } catch (e) {
    return false;
  }
};
