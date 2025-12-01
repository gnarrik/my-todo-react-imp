import './TodoList.scss'
import TodoItem from '@/components/TodoItem';

const TodoList = () => {
  return(
    <>
      <ul className='todo__tasks-list'>
        <TodoItem/>
      </ul>
      <div className='todo__empty-message'></div>
    </>
  )
};

export default TodoList