import { getRandomNumber } from './utils';
import * as stringsJson from '../text/strings.json';

const SPECIALS = stringsJson.specials;

const handleWordsFromUser = (query?: Record<string, string>) => {
  const specialsStr = query && (query.word || query.words);
  const specialsWords = specialsStr && specialsStr.split(',');
  if (specialsWords) {
    specialsWords.forEach((word: string) => {
      SPECIALS.push(word);
    });
  }
};

const getSpecialsWord = (): string => {
  const index = getRandomNumber(0, SPECIALS.length - 1);
  return SPECIALS[index];
};

export { getSpecialsWord, handleWordsFromUser };
