import Article from "../components/article.component";

const GenitiveCases = ({title}) => {
  return(
    <Article title={title}>
      <p>We answer the question <em>who</em> or <em>what</em> with the nominative case:</p>
      <ol>
        <li>Ποιος είναι; <em>Who is it?</em></li>
        <li>Είναι ο Γιάννης. <em>It is Yannis.</em></li>
      </ol>
      <ol>
        <li>Τι είναι αυτό; <em>What is this?</em></li>
        <li>Είναι ένας υπολογιστής. <em>It's a computer.</em></li>
      </ol>
      <p>We answer the question <em>whose</em> with the genitive case:</p>
      <ol>
        <li>Ποιανού είναι αυτό το στυλό; <em>Whose is this pen?</em></li>
        <li>Είναι του Γιάννη. <em>It is Yanni's.</em></li>
      </ol>
      <ol>
        <li>Ποιανής είναι αυτό το αυτοκίνητο; <em>Whose is this car?</em></li>
        <li>Είναι της Μαρίας. <em>It is Maria's.</em></li>
      </ol>
      <p>We answer the question <em>whom</em> or <em>what</em> with the accusative case:</p>
      <ol>
        <li>Ποιον είδες; <em>Whom did you see?</em></li>
        <li>Είδα τον Νίκο. <em>I saw Niko.</em></li>
      </ol>
      <ol>
        <li>Τι έφαγες; <em>What did you eat?</em></li>
        <li>Έφαγα τη μπανάνα.  <em>I ate the banana.</em></li>
      </ol>
      <p>Vocative:</p>
      <ul>
        <li>Κώστα, έλα εδώ. <em>Kosta, come here.</em></li>
        <li>Πες μου, Ελένη, σου άρεσε η ταινία; <em>Tell me, Eleni, did you like the movie?.</em></li>
      </ul>
    </Article>
  )
}

export default GenitiveCases