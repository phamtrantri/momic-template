export const getCurrentTime = () => {
  return new Date().toISOString();
};

export const getCurrentTimeInMilliseconds = () => {
  return new Date().getTime();
};