import { getRandomNumber } from './utils';

const specials = [
  'America',
  'seventies',
  'pattern',
  'open',
  'unknowable',
  'ghosts',
  'character',
  'holographic',
  'assemblage',
  'surprised',
  'unpredictable',
  'beautiful',
  'magic',
  'accretion',
  'cage',
  'new',
  'realities',
  'reality',
  'densely',
  'phenomena',
  'tattoo',
  'chemical',
  'Gloria',
  'Crispin',
  'tropical',
  'electric',
  'cowboy',
  'snake',
  'shark',
  'tiger',
  'discrete',
  'fuzzy',
  'eight',
];

const getSpecialsWord = async () => {
  const index = getRandomNumber(0, specials.length - 1);
  return specials[index];
};

export default getSpecialsWord;
