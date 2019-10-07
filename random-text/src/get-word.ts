import { wordIsThisPOS, isMuseApiPartOfSpeech } from './pos';
import {
  getRandomNumber,
  multilineStrToArrayOfWords,
  removeNonAlphaChars,
  shuffleArr,
  getRandomWords,
} from './utils';

type MuseApiPartsOfSpeech = 'adj' | 'adv' | 'v' | 'n' | 'prop';
type Pos =
  | MuseApiPartsOfSpeech
  | 'determiners'
  | 'conjunctions'
  | 'prepositions';
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
type Words = PartialRecord<Pos, string[]>;

const prepareWords = (words: string[]) =>
  shuffleArr(removeNonAlphaChars([...words]));

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

const getWord = async (pos: Pos, randomWords: string[]) => {
  const preparedWords = prepareWords(randomWords);

  if (isMuseApiPartOfSpeech(pos)) {
    for (let i = 0; i < preparedWords.length; i += 1) {
      const word = preparedWords[i];
      const isThisPOS = await wordIsThisPOS(word, pos);
      if (isThisPOS) return word;
    }
  }

  getRandomWords().then((moreWords: string[]) => {
    randomWords = randomWords.concat(moreWords);
  });
  return getRandomWordFromWords(pos);
};

export default getWord;
