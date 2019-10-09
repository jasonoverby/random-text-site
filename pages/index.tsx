import { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import getRandomPhrase from '../random-text/src/get-random-text';
import { getRandomNumber } from '../random-text/src/utils';
import { handleWordsFromUser } from '../random-text/src/specials';
import strings from '../random-text/text/strings.json';
import posWithWords from '../random-text/text/pos-with-words.json';

const NUMBER_OF_PHRASES = 3;
const STARTER_PHRASE = 'get random text';
const STOCK_PHRASES = strings.phrases;

const getRandomPhrases = async () => {
  const phrases = [];
  for (let i = 0; i < NUMBER_OF_PHRASES; i += 1) {
    try {
      const phrase = await getRandomPhrase(posWithWords);
      phrases.push(phrase);
    } catch (err) {
      console.log(err);
    }
  }
  return phrases;
};
const getRandomPhrasesDebounced = AwesomeDebouncePromise(getRandomPhrases, 500);
const getStockPhrase = () => {
  const randomIndex = getRandomNumber(0, STOCK_PHRASES.length - 1);
  return STOCK_PHRASES[randomIndex];
};

let specialWordsFromUserHandled = false;

const RandomText = ({ query }: { query?: Record<string, string> }) => {
  const [phrases, setPhrases] = useState([STARTER_PHRASE]);
  const [phrase, setPhrase] = useState(STARTER_PHRASE);
  if (!specialWordsFromUserHandled) {
    handleWordsFromUser(query);
    specialWordsFromUserHandled = true;
  }

  const handleClick = () => {
    console.log('phrases', phrases);
    if (phrase === phrases[0]) {
      const stockPhrase = getStockPhrase();
      const newPhrases = [stockPhrase, ...phrases.slice(1)];
      setPhrase(stockPhrase);
      setPhrases(newPhrases);
    } else {
      setPhrase(phrases[0]);
    }
    let newPhrases = (phrases && phrases.slice(1)) || [];
    if (newPhrases.length <= 1) {
      getRandomPhrasesDebounced().then((randomPhrases) => {
        setPhrases(newPhrases.concat(randomPhrases));
      });
    } else {
      newPhrases = phrases.slice(1);
      setPhrases(newPhrases);
    }
  };

  return (
    <div className="container">
      <h1 onClick={handleClick}>{phrase}</h1>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');
          body {
            background: #000;
          }

          .container {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }

          h1 {
            color: rgb(255, 235, 238);
            cursor: pointer;
            font: 32px 'fira code', menlo, helvetica, arial, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

const getInitialProps = async ({
  query,
}: {
  query?: Record<string, string>;
}) => {
  return { query };
};
RandomText.getInitialProps = getInitialProps;

export default RandomText;
