import './todoitem.css';

function handleClick(event) {
  const checkbox = event.currentTarget.querySelector('input');
  if (event.target !== checkbox) checkbox.checked = !checkbox.checked;
  event.currentTarget.classList.toggle('done');
}

function Todoitem(props) {
  const deal = props.deal;
  const classname = props.odd ? 'todoitem' : 'todoitem odd';
  
  return (
    <div className={classname} onClick={event => handleClick(event)}>
      <input className="todoitem__input" value={deal} type="checkbox"/>
      <label className="todoitem__label">{deal}</label>
    </div>
  );
}

export { Todoitem };