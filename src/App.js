import deals from './deals';
import { Todoitem } from './components/Todoitem/Todoitem';
import generateId from './helpers/idGenerator';

function App() {
  return (
    <div className="container">
      {
        deals.map((deal, ind) => {
          let odd = false;
          if (ind % 2) odd = true;

          return (
            <Todoitem 
              deal={ deal } 
              key={ generateId() }
              odd={ odd }
            />
          );
        })
      }
    </div>
  );
}

export { App };
