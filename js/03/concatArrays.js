const concatArrays = (char, ...[...str]) => {
  const mergedArray = [char, ...[...str]].flat();

  const trimmedMergedArray = mergedArray.map((str) => str.trim());

  const uniqueTrimmedMergedArray = new Set(trimmedMergedArray);

  uniqueTrimmedMergedArray.forEach((str) => {
    if (str.includes(char)) {
      uniqueTrimmedMergedArray.delete(str);
    }
  });
  const finalArray = Array.from(uniqueTrimmedMergedArray);

  return finalArray;
};

export default concatArrays;
