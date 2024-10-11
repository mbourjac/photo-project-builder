export const arraysAreEqual = (firstArray: string[], secondArray: string[]) => {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray.every((item, index) => item === secondArray[index]);
};
