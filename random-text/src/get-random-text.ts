import getSpecialsWord from './specials';
import getWord from './get-word';
import { getPOS } from './pos';
import { isShiftable } from './utils';

type MuseApiPartsOfSpeech = 'adj' | 'adv' | 'v' | 'n' | 'prop';
type Pos =
  | MuseApiPartsOfSpeech
  | 'determiners'
  | 'conjunctions'
  | 'prepositions';

const DEFAULT_NUMBER_OF_LETTERS = 200;
const WIGGLE_ROOM = 3;

const getRandomPhrase = async (randomWords: string[]) => {
  const numberOfLetters = DEFAULT_NUMBER_OF_LETTERS;
  const partsOfSpeech: Pos[] = ['v', 'adj', 'n'];

  const specialsWord = await getSpecialsWord();
  let specialsWordPOS: string[] = await getPOS(specialsWord);
  let str = '';

  while (
    isShiftable(partsOfSpeech) &&
    str.length + WIGGLE_ROOM < numberOfLetters
  ) {
    const pos = partsOfSpeech.shift();
    let word = '';

    if (specialsWordPOS.includes(pos)) {
      word = specialsWord;
      specialsWordPOS = [];
    } else {
      word = await getWord(pos, randomWords);
      const indexOfWord = randomWords.indexOf(word);
      randomWords.splice(indexOfWord, 1);
    }

    if (`${str} ${word}`.length < numberOfLetters) {
      str += ` ${word}`;
    }
  }

  return str.trim();
};

export default getRandomPhrase;
