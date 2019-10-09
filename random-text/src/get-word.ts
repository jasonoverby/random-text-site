import { getRandomNumber, multilineStrToArrayOfWords } from './utils';
import { isPosWithWordsPartOfSpeech } from './pos';

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
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
type Words = PartialRecord<Pos, string[]>;

const getWords = (): Words => ({
  conjunctions: 'and but for or so yet nor'.split(' '),
  prepositions: multilineStrToArrayOfWords(`of in to for with on at from
        by about as into like through after over between out against during without
        before under around among`),
  determiners: 'the this that those every each'.split(' '),
});

const getRandomWordFromWords = (pos: Pos) => {
  const words = getWords();
  const arr = words[pos];
  if (arr) {
    return arr[getRandomNumber(0, arr.length - 1)];
  }

  return '';
};

const getWord = async (pos: Pos, posWithWords: PosWithWords) => {
  if (!isPosWithWordsPartOfSpeech(pos)) return getRandomWordFromWords(pos);
  const wordsThatMatchPos = posWithWords[pos];
  const randomIndex = getRandomNumber(0, wordsThatMatchPos.length - 1);
  return wordsThatMatchPos[randomIndex];
};

export default getWord;
