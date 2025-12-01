import './SearchTaskForm.scss'
import Field from '@/components/Field';

const SearchTaskForm = () => {
  return (
    <form className='todo__form'>
      <Field
        className='field__input'
        type="search"
        placeholder='Search Task'
        hasIcon
      />
    </form>
  )
}

export default SearchTaskForm