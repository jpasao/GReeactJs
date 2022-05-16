import Article from "../components/article.component";

const IrregularAdjective = ({title}) => {
  return(
    <Article title={title}>      
      <p>Like most adjectives, πολλοί has three genders and is declinable with three cases:</p>
      <dl>
        <dt>Singular</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>CASE</td>
                <td>MASCULINE</td>
                <td>FEMININE</td>
                <td>NEUTER</td>
              </tr>
              <tr>
                <td>Nominative</td>
                <td>ο πολύς</td>
                <td>η πολλή</td>
                <td>το πολύ</td>
              </tr>
              <tr>
                <td>Genitive</td>
                <td>του πολύ</td>
                <td>της πολλής</td>
                <td>του πολύ</td>
              </tr>
              <tr>
                <td>Accusative</td>
                <td>τον πολύ</td>
                <td>την πολλή</td>
                <td>το πολύ</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>Plural</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>CASE</td>
                <td>MASCULINE</td>
                <td>FEMININE</td>
                <td>NEUTER</td>
              </tr>
              <tr>
                <td>Nominative</td>
                <td>οι πολλοί</td>
                <td>οι πολλές</td>
                <td>τα πολλά</td>
              </tr>
              <tr>
                <td>Genitive</td>
                <td>των πολλών</td>
                <td>των πολλών</td>
                <td>των πολλών</td>
              </tr>
              <tr>
                <td>Accusative</td>
                <td>τους πολλούς</td>
                <td>τις πολλές</td>
                <td>τα πολλά</td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>      
    </Article>
  )
}

export default IrregularAdjective