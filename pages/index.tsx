import { useState, useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import getRandomPhrase from '../random-text/src/get-random-text';
import { getRandomWords } from '../random-text/src/utils';

const NUMBER_OF_PHRASES = 3;
const STARTER_PHRASE = 'get random text';

const getRandomPhrases = async (randomWords: string[]) => {
  const phrases = [];
  for (let i = 0; i < NUMBER_OF_PHRASES; i += 1) {
    try {
      const phrase = await getRandomPhrase(randomWords);
      phrases.push(phrase);
    } catch (err) {
      console.log(err);
    }
  }
  return phrases;
};
const getRandomPhrasesDebounced = AwesomeDebouncePromise(getRandomPhrases, 500);

const RandomText = ({ randomWords }: { randomWords: string[] }) => {
  const [phrases, setPhrases] = useState([STARTER_PHRASE]);
  const [phrase, setPhrase] = useState(STARTER_PHRASE);

  const handleClick = () => {
    console.log('phrases', phrases);
    setPhrase(phrases[0]);
    let newPhrases = (phrases && phrases.slice(1)) || [];
    if (newPhrases.length <= 1) {
      getRandomPhrasesDebounced(randomWords).then((randomPhrases) => {
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

const getInitialProps = async () => {
  const randomWords = await getRandomWords();
  return { randomWords };
};
RandomText.getInitialProps = getInitialProps;

export default RandomText;