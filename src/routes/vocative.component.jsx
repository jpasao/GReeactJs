import Article from "../components/article.component";

const Plurals = ({title}) => {
  return(
    <Article title={title}>
      <ul>
        <li>If the masculine noun ends in - ος, the ending becomes -ε</li>
        <li>If the masculine noun ends in - ης, the ending becomes -η</li>
        <li>If the masculine noun ends in - ας, the ending becomes -α</li>
      </ul>
      <p>Feminine and neuter nouns are easier since the singular number's vocative case is exactly the same with the nominative case</p>
    </Article>
  )
}

export default Plurals