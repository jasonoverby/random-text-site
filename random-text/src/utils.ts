const isNotEmpty = <T>(arr: T[]): arr is { shift(): T; pop(): T } & Array<T> =>
  arr.length > 0;
const multilineStrToArrayOfWords = (str: string) =>
  str.split(' ').filter((char) => char !== '');
const getRandomNumber = (val1: number, val2: number) => {
  const min = Math.min(val1, val2);
  const max = Math.max(val1, val2);
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { isNotEmpty, multilineStrToArrayOfWords, getRandomNumber };
