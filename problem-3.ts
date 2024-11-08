const countWordOccurrences = (sentence: string, word: string): number => {
  return sentence
    .toLowerCase()
    .split(" ")
    .reduce(
      (initialValue, currentWord) =>
        currentWord.includes(word.toLowerCase())
          ? initialValue + 1
          : initialValue,
      0
    );
};

console.log(
  countWordOccurrences("TypeScript is great I love TypeScript!", "typescript")
);
