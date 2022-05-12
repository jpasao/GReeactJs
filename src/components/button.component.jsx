import '../index.styles.scss';

const Button = ({buttonProps}) => {
  const {type, content} = buttonProps;
  return <button className={type}>{content}</button>
}

export default Button