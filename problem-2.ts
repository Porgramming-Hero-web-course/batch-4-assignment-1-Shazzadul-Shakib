const removeDuplicates = (arrayOfNumbers: number[]): number[] => {
  return Array.from(new Set(arrayOfNumbers));
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
