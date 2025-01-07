import Article from "../components/article.component";

const ToHaveFirstPerson = ({title}) => {
  return(
    <Article title={title}>
      <p>The perfect or present perfect (Greek: παρακείμενος):</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Έχει φάει το κέικ.</dd>
        <dd><em>He has eaten the cake.</em></dd>
      </dl>
      <p>The past perfect or pluperfect (Greek: υπερσυντέλικος):</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Είχε φάει όλο το κέικ πριν γυρίσω </dd>
        <dd><em>He had eaten the whole cake before I came</em></dd>
      </dl>
      <p>The future perfect (Greek: συντελεσμένος μέλλοντας):</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Θα έχω φάει μέχρι να έρθεις </dd>
        <dd><em>By the time you come, I will have eaten</em></dd>
      </dl>
      <dl>
        <dt>Πρέπει</dt>
        <dd>The word πρέπει, meaning <em>must</em>, is a strange case of verb; as in English, it is not conjugated and it exists only in the present and the past tenses (Πρέπει and Έπρεπε, respectively)</dd>
      </dl>
    </Article>
  )
}

export default ToHaveFirstPerson