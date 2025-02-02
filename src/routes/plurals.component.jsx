import Article from "../components/article.component";

const Plurals = ({title}) => {
  return(
    <Article title={title}>
      <p>In Greek, each flavor of noun gets a different ending for the plural:</p>
      <ul>
        <li>words ending in -ος change to -οι, as in δάσκαλοι and άνθρωποι</li>
        <li>words ending in -α change to -ες, as in πορτοκαλάδες and γυναίκες</li>
        <li>words ending in -ο change to -α, as in μουσεία and αυτοκίνητα</li>
      </ul>
    </Article>
  )
}

export default Plurals