export const isValidUrl = (url: unknown): url is URL => {
  try {
    new URL(url as URL);
    return true;
  } catch (e) {
    return false;
  }
};
