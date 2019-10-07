const NUMBER_OF_WORDS_TO_FETCH = 100;
const isShiftable = <T>(arr: T[]): arr is { shift(): T } & Array<T> =>
  arr.length > 0;
const multilineStrToArrayOfWords = (str: string) =>
  str.split(' ').filter((char) => char !== '');
const getRandomNumber = (val1: number, val2: number) => {
  const min = Math.min(val1, val2);
  const max = Math.max(val1, val2);
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const removeNonAlphaChars = (arr: string[]) =>
  arr.filter((word) => /^[a-z]+$/i.test(word));
const shuffleArr = (arr: any[]) => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};
const getRandomWords = async () => {
  const wordsApiKeyRes = await fetch(
    'https://random-word-api.herokuapp.com/key?',
  );
  const wordsApiKey = await wordsApiKeyRes.text();
  const wordsApiRes = await fetch(
    `https://random-word-api.herokuapp.com/word?key=${wordsApiKey}&number=${NUMBER_OF_WORDS_TO_FETCH}`,
  );
  return wordsApiRes.json();
};

export {
  isShiftable,
  multilineStrToArrayOfWords,
  getRandomNumber,
  getRandomWords,
  removeNonAlphaChars,
  shuffleArr,
};
