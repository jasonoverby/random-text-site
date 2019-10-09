import fetch from 'isomorphic-unfetch';

type PosWithWordsPartsOfSpeech =
  | 'adjectives'
  | 'adverbs'
  | 'verbs'
  | 'nouns'
  | 'rest';

type MuseApiPartsOfSpeech = 'adj' | 'adv' | 'v' | 'n' | 'prop';

const getPOS = async (word: string): Promise<MuseApiPartsOfSpeech[]> => {
  const datamuseApiRes: any = await fetch(
    `https://api.datamuse.com/words?sp=${word}&md=p&max=1`,
  );
  const datamuseApiJson = await datamuseApiRes.json();
  const wordObj: any = datamuseApiJson[0];
  if (wordObj && wordObj.tags) {
    const { tags } = wordObj;
    return tags;
  }

  return ['prop'];
};

const isPosWithWordsPartOfSpeech = (
  str: string,
): str is PosWithWordsPartsOfSpeech => {
  const validPos = ['nouns', 'verbs', 'adjectives', 'adverbs'];
  return validPos.includes(str);
};

export { getPOS, isPosWithWordsPartOfSpeech };
