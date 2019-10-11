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
type MuseApiPartsOfSpeech = 'adj' | 'adv' | 'v' | 'n' | 'prop';
