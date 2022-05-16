import Article from "../components/article.component";

const ToBePastTense = ({title}) => {
  return(
    <Article title={title}>      
      <p>Past continuous (something was happening in the past, was in progress, or was happening repeatedly)</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Για πέντε χρόνια, πήγαινα στη δουλειά με το αυτοκίνητό μου</dd>
        <dd><em>For five years, I was going to work with my car.</em></dd>
      </dl>
      <p>Simple past (something happened in the past):</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Εχτές πήγα σινεμά</dd>
        <dd><em>Yesterday, I went to the cinema.</em></dd>
      </dl>
      <p>Past perfect (something had been completed before something else, also in the past, happened):</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Είχα πάει στην Ιταλία πριν έρθω στην Ελλάδα </dd>
        <dd><em>I had gone to Italy before I came to Greece</em></dd>
      </dl>
      <p>The conjugation of the verb is in the table that follows:</p>
      <table>
        <tbody>
          <tr>
            <td>Case</td>
            <td>Greek</td>
            <td><em>English</em></td>
          </tr>
          <tr>
            <td>Singular</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>First person</td>
            <td>εγώ ήμουν(α)</td>
            <td><em>I was</em></td>
          </tr>
          <tr>
            <td>Second person</td>
            <td>εσύ ήσουν(α)</td>
            <td><em>you were</em></td>
          </tr>
          <tr>
            <td>Third person</td>
            <td>αυτός / αυτή / αυτό ήταν(ε)</td>
            <td><em>he / she / it was</em></td>
          </tr>
          <tr>
            <td>Plural</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>First person</td>
            <td>εμείς ήμασταν</td>
            <td><em>we were</em></td>
          </tr>
          <tr>
            <td>Second person</td>
            <td>εσείς ήσασταν</td>
            <td><em>you were</em></td>
          </tr>
          <tr>
            <td>Third person</td>
            <td>αυτοί / αυτές / αυτά ήταν(ε)</td>
            <td><em>they were</em></td>
          </tr>          
          </tbody>
      </table>          
    </Article>
  )
}

export default ToBePastTense