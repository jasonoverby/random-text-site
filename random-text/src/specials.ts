import { getRandomNumber } from './utils';
import posWithSpecials from '../text/pos-with-specials.json';
import { getPOS } from './pos';

const musePosToPartOfSpeech: Record<string, PosWithWordsPartsOfSpeech> = {
  adj: 'adjectives',
  adv: 'adverbs',
  n: 'nouns',
  prop: 'rest',
  v: 'verbs',
};

const handleWordsFromUser = async (query?: Record<string, string>) => {
  const specialsStr = query && (query.word || query.words);
  const specialsWords = specialsStr && specialsStr.split(',');
  if (specialsWords) {
    Promise.all(
      specialsWords.map((specialsWord: string) =>
        getPOS(specialsWord).then((specialsWordMusePos) => {
          const specialsWordPos = musePosToPartOfSpeech[specialsWordMusePos];
          posWithSpecials[specialsWordPos].push(specialsWord);
        }),
      ),
    );
  }
};

const getSpecialsWord = (partsOfSpeech: PosWithWordsPartsOfSpeech[]) => {
  const randomPosIndex = getRandomNumber(0, partsOfSpeech.length - 1);
  const specialsWordPos = partsOfSpeech[randomPosIndex];
  const specials = posWithSpecials[specialsWordPos];
  const randomSpecialsIndex = getRandomNumber(0, specials.length - 1);
  return {
    specialsWord: specials[randomSpecialsIndex],
    specialsWordPos,
  };
};

export { getSpecialsWord, handleWordsFromUser };
