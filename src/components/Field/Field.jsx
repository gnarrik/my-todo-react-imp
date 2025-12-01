import './Field.scss'
import field from '@/components/Field/index';
import classNames from 'classnames';

const Field = (props) => {
  const {
    className,
    type="text",
    placeholder,
    hasIcon=false,
  } = props

  return (
    <input
      className={classNames(className, 'field', {
        'has-icon': hasIcon,
      })}
      type={type}
      placeholder={placeholder}
      name='name'
      autoComplete='off'
    />
  )
};

export default Field