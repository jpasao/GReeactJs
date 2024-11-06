import { Link } from "react-router-dom";
import Article from "../components/article.component";

const Landing = ({ title }) => {
  return (
    <Article title={title}>      
      <ul>
        <li><Link to='/'>Check pills</Link></li>
        <li><Link to='quiz'>Take a quiz</Link></li>
      </ul>
    </Article>
  )
}

export default Landing