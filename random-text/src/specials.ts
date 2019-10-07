import { getRandomNumber } from './utils';
import * as stringsJson from '../text/strings.json';

const SPECIALS = stringsJson.specials;

const getSpecialsWord = async () => {
  const index = getRandomNumber(0, SPECIALS.length - 1);
  return SPECIALS[index];
};

export default getSpecialsWord;
