import { Link } from "react-router-dom";

const Article = (content) => {
  return(
    <article>
      <Link to='/'>Back to index</Link>
        {content.children}
      <Link to='/'>Back to index</Link>
    </article>
  )
}

export default Article