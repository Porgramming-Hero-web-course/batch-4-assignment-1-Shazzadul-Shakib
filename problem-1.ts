const sumArray = (numbers: number[]): number => {
  return numbers.reduce(
    (initialValue, currentValue) => initialValue + currentValue,
    0
  );
};

console.log(sumArray([1, 2, 3, 4, 5]));
