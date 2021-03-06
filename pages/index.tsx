import { useState } from 'react';
import getRandomPhrase from '../random-text/src/get-random-text';
import { getRandomNumber } from '../random-text/src/utils';
import { handleWordsFromUser } from '../random-text/src/specials';
import stockPhrases from '../random-text/text/stock-phrases.json';
import posWithWords from '../random-text/text/pos-with-words.json';

const NUMBER_OF_PHRASES = 3;
const STARTER_PHRASE = 'get random text';

const getRandomPhrases = () => {
  const phrases = [];
  for (let i = 0; i < NUMBER_OF_PHRASES; i += 1) {
    try {
      const phrase = getRandomPhrase(posWithWords);
      phrases.push(phrase);
    } catch (err) {
      console.log(err);
    }
  }
  return phrases;
};
const getStockPhrase = () => {
  const randomIndex = getRandomNumber(0, stockPhrases.length - 1);
  return stockPhrases[randomIndex];
};

let specialWordsFromUserHandled = false;

const RandomText = ({ query }: { query?: Record<string, string> }) => {
  const [phrases, setPhrases] = useState([STARTER_PHRASE]);
  const [phrase, setPhrase] = useState(STARTER_PHRASE);
  if (!specialWordsFromUserHandled) {
    /** fire and forget */
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
      const randomPhrases = getRandomPhrases();
      setPhrases(newPhrases.concat(randomPhrases));
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

const getInitialProps = ({ query }: { query?: Record<string, string> }) => {
  return { query };
};
RandomText.getInitialProps = getInitialProps;

export default RandomText;
