import Article from "../components/article.component";

const ToHavePastTense = ({title}) => {
  return(
    <Article title={title}>
      <p>The full conjugation of είχα is:</p>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Greek</th>
            <th><em>English</em></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Singular</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>First person</td>
            <td>εγώ είχα</td>
            <td><em>I had</em></td>
          </tr>
          <tr>
            <td>Second person</td>
            <td>εσύ είχες</td>
            <td><em>you had</em></td>
          </tr>
          <tr>
            <td>Third person</td>
            <td>αυτός / αυτή / αυτό είχε</td>
            <td><em>he / she / it had</em></td>
          </tr>
          <tr>
            <td>Plural</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>First person</td>
            <td>εμείς είχαμε</td>
            <td><em>we had</em></td>
          </tr>
          <tr>
            <td>Second person</td>
            <td>εσείς είχατε</td>
            <td><em>you had</em></td>
          </tr>
          <tr>
            <td>Third person</td>
            <td>αυτοί / αυτές / αυτά είχαν</td>
            <td><em>they had</em></td>
          </tr>
          </tbody>
      </table>
    </Article>
  )
}

export default ToHavePastTense