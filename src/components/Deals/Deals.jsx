import { deals } from '../../deals';
import { Todoitem } from '../Todoitem/Todoitem';
import { generateId } from '../../helpers/idGenerator';

function Deals() {
  return (
    <div className="deals">
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

export { Deals };

