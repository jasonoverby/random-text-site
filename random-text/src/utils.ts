const NUMBER_OF_WORDS_TO_FETCH = 100;
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
  try {
    const wordsApiKeyRes = await fetch(
      'https://random-word-api.herokuapp.com/key?',
    );
    const wordsApiKey = wordsApiKeyRes && (await wordsApiKeyRes.text());
    const wordsApiRes =
      wordsApiKey &&
      (await fetch(
        `https://random-word-api.herokuapp.com/word?key=${wordsApiKey}&number=${NUMBER_OF_WORDS_TO_FETCH}`,
      ));
    const words = wordsApiRes && (await wordsApiRes.json());
    return words;
  } catch (err) {
    console.log('Error: was not able to get random words from the api');
  }

  return [
    'shoe',
    'tour',
    'texture',
    'versed',
    'thinkable',
    'fact',
    'relax',
    'miniature',
    'unadvised',
    'load',
    'dog',
    'paper',
    'gold',
    'miscreant',
    'burly',
    'enthusiastic',
    'slap',
    'normal',
    'women',
    'guard',
    'five',
    'vigorous',
    'noise',
    'sable',
    'command',
    'neck',
    'remain',
    'offend',
    'cup',
    'puny',
    'robust',
    'field',
    'melt',
    'twig',
    'truculent',
    'dam',
    'milk',
    'broad',
    'kneel',
    'smile',
    'month',
    'cute',
    'vivacious',
    'luxuriant',
    'hammer',
    'heavy',
    'abusive',
    'whisper',
    'staking',
    'develop',
    'turn',
    'general',
    'unhealthy',
    'confuse',
    'exuberant',
    'selfish',
    'thin',
    'uneven',
    'majestic',
    'include',
    'analyse',
    'nest',
    'cherries',
    'intend',
    'guiltless',
    'sparkling',
    'pointless',
    'lackadaisical',
    'trail',
    'blue',
    'tent',
    'flood',
    'oven',
    'lively',
    'fallacious',
    'tedious',
    'harm',
    'work',
    'strengthen',
    'farm',
    'substantial',
    'wanting',
    'line',
    'action',
    'cats',
    'bed',
    'surround',
    'inconclusive',
    'magnificent',
    'sprout',
    'minister',
    'inexpensive',
    'rock',
    'flashy',
    'dust',
    'toy',
    'object',
    'difficult',
    'consist',
    'fat',
    'brief',
    'actually',
    'equal',
    'learned',
    'lunch',
    'wary',
    'succeed',
    'scare',
    'wave',
    'receipt',
    'successful',
    'judge',
    'add',
    'whole',
    'concern',
    'prose',
    'filthy',
    'royal',
    'impulse',
    'disappear',
    'addition',
    'tired',
    'obsolete',
    'yummy',
    'troubled',
    'zebra',
    'exciting',
    'worthless',
    'unknown',
    'abandoned',
    'bruise',
    'faint',
    'feeling',
    'resolute',
    'march',
    'disastrous',
    'hands',
    'squeamish',
    'sleep',
    'jellyfish',
    'kiss',
    'delight',
    'reproduce',
    'sound',
    'gaping',
    'outrageous',
    'spicy',
    'hop',
    'substance',
    'dinosaurs',
    'icy',
    'peaceful',
    'colorful',
    'dear',
    'nutty',
    'crown',
    'obnoxious',
    'sour',
    'imported',
    'ship',
    'uncovered',
    'trees',
    'melted',
    'pig',
    'absent',
    'habitual',
    'push',
    'expect',
    'internal',
    'cake',
    'trust',
    'scientific',
    'crush',
    'books',
    'place',
    'skillful',
    'scrawny',
    'cobweb',
    'scarf',
    'grotesque',
    'profuse',
    'lock',
    'balance',
    'curve',
    'soda',
    'preach',
    'illustrious',
    'deafening',
    'key',
    'mouth',
    'wonderful',
    'unsightly',
    'hydrant',
    'seed',
    'ignorant',
    'doubtful',
    'simplistic',
    'slimy',
  ];
};

export {
  isNotEmpty,
  multilineStrToArrayOfWords,
  getRandomNumber,
  getRandomWords,
  removeNonAlphaChars,
  shuffleArr,
};
