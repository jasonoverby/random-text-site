import { getSpecialsWord } from './specials';
import getWord from './get-word';
import { getPOS, isPosWithWordsPartOfSpeech } from './pos';
import { isNotEmpty } from './utils';

const DEFAULT_NUMBER_OF_LETTERS = 200;
const WIGGLE_ROOM = 3;

const getRandomPhrase = async (posWithWords: PosWithWords) => {
  const numberOfLetters = DEFAULT_NUMBER_OF_LETTERS;
  const partsOfSpeech: Pos[] = ['verbs', 'adjectives', 'nouns'];

  const { specialsWord, specialsWordPos } = getSpecialsWord(
    partsOfSpeech.filter(isPosWithWordsPartOfSpeech),
  );

  let str = '';

  while (
    isNotEmpty(partsOfSpeech) &&
    str.length + WIGGLE_ROOM < numberOfLetters
  ) {
    const pos = partsOfSpeech.shift();
    let word = '';

    if (specialsWordPos === pos) {
      word = specialsWord;
    } else {
      word = getWord(pos, posWithWords);
    }

    if (`${str} ${word}`.length < numberOfLetters) {
      str += ` ${word}`;
    }
  }

  return str.trim();
};

export default getRandomPhrase;
