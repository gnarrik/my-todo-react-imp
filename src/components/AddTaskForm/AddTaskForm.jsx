import './AddTaskForm.scss'
import Field from '@/components/Field';

const AddTaskForm = () => {
  return (
    <form className='todo__form'>
      <Field
        type="text"
        className="field__input"
        placeholder='New task'
      />
      <button className='button'>Add</button>
    </form>
  )
}

export default AddTaskForm