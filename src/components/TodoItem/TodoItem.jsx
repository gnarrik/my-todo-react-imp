import './TodoItem.scss'

const TodoItem = (props) => {
  // const {id} = props

  const id = 'id'

  return(
    <li className='todo__item todo-item'>
      <input
        className='todo-item__checkbox'
        type="checkbox"
        id={id}
      />
      <label className='todo-item__label' htmlFor={id}>Текст</label>
      <button className='todo-item__delete-button'>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L1 11M1 1L11 11" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </li>
  )
};

export default TodoItem