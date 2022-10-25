import { JokeGenerator } from './components/JokeGenerator/JokeGenerator';
import { Deals } from './components/Deals/Deals';

function App() {

  return (
    <div className="container">
      <Deals/>
      <JokeGenerator/>
    </div>
  );
}

export { App };
