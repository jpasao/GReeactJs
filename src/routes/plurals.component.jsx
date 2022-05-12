import { Link } from "react-router-dom";

const Plurals = () => {
  return(
    <article>
      <Link to='/'>Back to index</Link>
      <h4>Plural of -ος, -α, and -ο</h4>
      <p>In Greek, each flavor of noun gets a different ending for the plural:</p>
      <p>
        <li>words ending in -ος change to -οι, as in δάσκαλοι and άνθρωποι</li>
        <li>words ending in -α change to -ες, as in πορτοκαλάδες and γυναίκες</li>
        <li>words ending in -ο change to -α, as in μουσεία and αυτοκίνητα</li>
      </p>
      <Link to='/'>Back to index</Link>
    </article>
  )
}

export default Plurals