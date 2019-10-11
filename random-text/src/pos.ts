import fetch from 'isomorphic-unfetch';

const getPOS = async (word: string): Promise<MuseApiPartsOfSpeech> =>
  fetch(`https://api.datamuse.com/words?sp=${word}&md=p&max=1`)
    .then((datamuseApiRes) => datamuseApiRes.json())
    .then((datamuseApiJson) => {
      const wordObj: any = datamuseApiJson[0];
      if (wordObj && wordObj.tags) {
        const { tags } = wordObj;
        return tags[0];
      }

      /** default return value if word or pos are not found */
      return 'prop';
    });

const isPosWithWordsPartOfSpeech = (
  str: string,
): str is PosWithWordsPartsOfSpeech => {
  const validPos = ['nouns', 'verbs', 'adjectives', 'adverbs'];
  return validPos.includes(str);
};

export { getPOS, isPosWithWordsPartOfSpeech };
