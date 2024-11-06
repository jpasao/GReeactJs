import '../index.styles.scss';

const Button = ({buttonProps}) => {
  const {type, content, clickHandle} = buttonProps;
  return (
    <button 
      className={type} 
      onClick={clickHandle}>
        {content}
    </button>
  )
}

export default Button