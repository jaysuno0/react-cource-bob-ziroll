import './todoitem.css';

function handleClick(event) {
  const checkbox = event.currentTarget.querySelector('input');
  if (event.target !== checkbox) checkbox.checked = !checkbox.checked;
  event.currentTarget.classList.toggle('done');
}

function Todoitem(props) {
  const deal = props.deal;
  const input = (
    <input 
      className="todoitem__input" 
      value={deal.deal} 
      type="checkbox"
      defaultChecked={deal.done}
    />
  );

  let classname = props.odd ? 'todoitem' : 'todoitem odd';
  if (deal.done) classname = `${classname} done`;
  
  return (
    <div className={classname} onClick={event => handleClick(event)}>
      {input}
      <label className="todoitem__label">{deal.deal}</label>
    </div>
  );
}

export { Todoitem };