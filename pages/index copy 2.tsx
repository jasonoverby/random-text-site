import { useState, useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import getRandomPhrase from '../random-text/src/get-random-text';
import { getRandomWords } from '../random-text/src/get-word';

const NUMBER_OF_PHRASES = 3;
const STARTER_PHRASE = 'get random text';

const getRandomPhrases = async (randomWords: string[]) => {
  const phrases = [];
  for (let i = 0; i < NUMBER_OF_PHRASES; i += 1) {
    const phrase = await getRandomPhrase(randomWords);
    phrases.push(phrase);
  }
  return phrases;
};
const getRandomPhrasesDebounced = AwesomeDebouncePromise(getRandomPhrases, 500);

const RandomText = ({ randomWords }: { randomWords: string[] }) => {
  const [phrases, setPhrases] = useState();
  const [phrase, setPhrase] = useState(STARTER_PHRASE);
  if (randomWords.length < 20) {
    getRandomWords().then((moreWords) => {
      randomWords = randomWords.concat(moreWords);
    });
  }
  useEffect(() => {
    console.log('in useEffect');
    console.log('phrases is array', Array.isArray(phrases))
    console.log('array length if array', Array.isArray(phrases) && phrases.length)
    if (!phrases || phrases.length < 20) {
      getRandomPhrasesDebounced(randomWords).then((randomPhrases) => {
        console.log('updating phrases')
        const newPhrases = (phrases || []).concat(randomPhrases);
        setPhrases(newPhrases);
      });
    }
  });

  return (
    <div className="container">
      <h1
        onClick={() => {
          console.log(phrases);
          const hasPhrases = (phrases && phrases[0]);
          if (hasPhrases) {
            const newPhrases = phrases.slice(1);
            setPhrase(phrases[0]);
            setPhrases(newPhrases);
          } else {
            setPhrases([]);
          }
        }}
      >
        {phrase}
      </h1>
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
