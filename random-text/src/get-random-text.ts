import { getSpecialsWord } from './specials';
import getWord from './get-word';
import { getPOS } from './pos';
import { isNotEmpty } from './utils';

type PosWithWordsPartsOfSpeech =
  | 'adjectives'
  | 'adverbs'
  | 'verbs'
  | 'nouns'
  | 'rest';
type Pos =
  | PosWithWordsPartsOfSpeech
  | 'determiners'
  | 'conjunctions'
  | 'prepositions';
type PosWithWords = Record<PosWithWordsPartsOfSpeech, string[]>;

const DEFAULT_NUMBER_OF_LETTERS = 200;
const WIGGLE_ROOM = 3;

const musePosToPartOfSpeech = {
  adj: 'adjectives',
  adv: 'adverbs',
  n: 'nouns',
  prop: 'rest',
  v: 'verbs',
};

const getRandomPhrase = async (posWithWords: PosWithWords) => {
  const numberOfLetters = DEFAULT_NUMBER_OF_LETTERS;
  const partsOfSpeech: Pos[] = ['verbs', 'adjectives', 'nouns'];

  const specialsWord = getSpecialsWord();
  // TODO: add parts of speech for all specialsWords
  // so this call does not have to happen
  const specialsWordMusePos = await getPOS(specialsWord);
  let specialsWordPos = specialsWordMusePos.map(
    (musePartOfSpeech) => musePosToPartOfSpeech[musePartOfSpeech],
  );

  let str = '';

  while (
    isNotEmpty(partsOfSpeech) &&
    str.length + WIGGLE_ROOM < numberOfLetters
  ) {
    const pos = partsOfSpeech.shift();
    let word = '';

    if (specialsWordPos.includes(pos)) {
      word = specialsWord;
      specialsWordPos = [];
    } else {
      word = await getWord(pos, posWithWords);
    }

    if (`${str} ${word}`.length < numberOfLetters) {
      str += ` ${word}`;
    }
  }

  return str.trim();
};

export default getRandomPhrase;
