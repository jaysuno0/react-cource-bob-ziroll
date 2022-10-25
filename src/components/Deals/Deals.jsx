import { deals } from '../../deals';
import { Todoitem } from '../Todoitem/Todoitem';
import { generateId } from '../../helpers/idGenerator';

const dealsElements = deals.map((deal, ind) => {
  let odd = false;
    if (ind % 2) odd = true;

    return (
      <Todoitem 
        deal={ deal } 
        key={ generateId() }
        odd={ odd }
      />
    );
});

const Deals = () => <div className="deals">{dealsElements}</div>;

export { Deals };

