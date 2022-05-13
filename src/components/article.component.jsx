import { Link } from "react-router-dom";
import { BUTTON_TEXTS } from "../resources/button-types";
import { BUTTON_TYPES } from "../resources/button-types";
import Button from "./button.component";

const Article = (content) => {  
    // Scroll up with no animation when arriving to article
    window.scrollTo({ top:0, left:0, behavior: "instant"});
  
  const { title, children } = content;
  const props = {
    type: BUTTON_TYPES.back,
    content: BUTTON_TEXTS.backToIndex
  }

  return(
    <>      
      <Link to='/'><Button buttonProps={props} /></Link>
      <article>
          <h4>{ title }</h4>
          { children }
      </article>
      <Link to='/'><Button buttonProps={props} /></Link>       
    </>
  )
}

export default Article