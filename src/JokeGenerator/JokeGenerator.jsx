import './jokeGenerator.css';
import { getJoke as generateJoke } from '../getJoke';
import { useState } from 'react';

function JokeGenerator() {
  const [joke, setJoke] = useState({
    setup: 'Click the button to get the joke',
  });

  async function getJoke() {
    const loader = document.querySelector('.joke-generator__title');
    loader.style.animationName = 'loading';

    const joke = await generateJoke();
    setJoke(joke);

    loader.style.animationName = '';
  }

  return (
    <div className="joke-generator">
      <p className="joke-generator__title">🙃</p>
      <div className="joke-generator__joke">
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
      </div>
      <button onClick={() => getJoke()}>joke</button>
    </div>
  );
}

export { JokeGenerator };