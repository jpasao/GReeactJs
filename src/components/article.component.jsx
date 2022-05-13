import { Link } from "react-router-dom";
import { BUTTON_TEXTS } from "../resources/button-types";

const Article = (content) => {  
  const { title, children } = content;
  return(
    <article>
      <Link to='/'>{ BUTTON_TEXTS.backToIndex }</Link>
        <h4>{ title }</h4>
        { children }
      <Link to='/'>{ BUTTON_TEXTS.backToIndex }</Link>
    </article>
  )
}

export default Article