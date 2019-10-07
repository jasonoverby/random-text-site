import fetch from 'isomorphic-unfetch';

type MuseApiPartsOfSpeech = 'adj' | 'adv' | 'v' | 'n' | 'prop';
type Pos =
  | MuseApiPartsOfSpeech
  | 'determiners'
  | 'conjunctions'
  | 'prepositions';

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

const wordIsThisPOS = async (
  word: string,
  pos: MuseApiPartsOfSpeech,
): Promise<boolean> => {
  const datamuseApiRes: any = await fetch(
    `https://api.datamuse.com/words?sp=${word}&md=p&max=1`,
  );
  const datamuseApiJson = await datamuseApiRes.json();
  const wordObj: any = datamuseApiJson[0];
  if (wordObj && wordObj.tags) {
    const { tags } = wordObj;
    return tags.includes(pos);
  }
  return false;
};
const isPos = (str: string): str is Pos => {
  const validPos = [
    'adj',
    'adv',
    'conjunctions',
    'determiners',
    'n',
    'v',
    'prop',
  ];
  return validPos.includes(str);
};
const isMuseApiPartOfSpeech = (str: string): str is MuseApiPartsOfSpeech => {
  const validPos = ['adj', 'adv', 'n', 'v', 'prop'];
  return validPos.includes(str);
};

export { getPOS, wordIsThisPOS, isPos, isMuseApiPartOfSpeech };
