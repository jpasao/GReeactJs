import Article from "../components/article.component";

const Declensions = ({title}) => {
  return(
    <Article title={title}>      
      <p>When we say that a noun is in the first declension, it is masculine; when we say it is in the second declension, it is feminine; and when we say it is in the third declension, it is neuter.</p>
      <ul>
        <li>Parisyllabic nouns: nouns that have the same number of syllables in the plural as they have in the nominative singular. An example of this category is the noun ο μήνας, <em>the month</em>, which in the plural becomes οι μήνες, <em>the months</em>.</li>
        <li>Imparisyllabic nouns: nouns that in all cases of the plural have one syllable more than they have in the nominative singular. An example of this category is the noun ο πατέρας, meaning <em>the father</em>, which in the plural becomes οι πατεράδες, meaning <em>the fathers</em>.</li>        
      </ul>
      <section>
        <h5>First Declension</h5>
        <p>One way to categorize masculine nouns is by dividing them in two classes according to their ending:</p>
      </section>
      <section>
        <h5>Second Declension</h5>
        <p>parisyllabic nouns form their nominative plurals in -ες, while imparisyllabic ones form their nominative plurals in -δες</p>
      </section>
      <section>
        <h5>Third Declension</h5>
        <p>The endings of neuter nouns are -o, -ι, -ος, -μα, -σιμο, -ας, and -ως. We usually group the last two together because they are declined in exactly the same way.</p>
      </section>
    </Article>
  )
}

export default Declensions