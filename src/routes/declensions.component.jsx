import Article from "../components/article.component";

const Declensions = ({title}) => {
  return(
    <Article title={title}>      
      <p>When we say that a noun is in the first declension, it is masculine; when we say it is in the second declension, it is feminine; and when we say it is in the third declension, it is neuter.</p>
      <ul>
        <li><span className="par"><span className="par">Parisyllabic</span></span> nouns: nouns that have the same number of syllables in the plural as they have in the nominative singular. An example of this category is the noun ο μήνας, <em>the month</em>, which in the plural becomes οι μήνες, <em>the months</em>.</li>
        <li><span className="impar">Imparisyllabic</span> nouns: nouns that in all cases of the plural have one syllable more than they have in the nominative singular. An example of this category is the noun ο πατέρας, meaning <em>the father</em>, which in the plural becomes οι πατεράδες, meaning <em>the fathers</em>.</li>        
      </ul>
      <details>
        <summary>First Declension</summary>
        <p>One way to categorize masculine nouns is by dividing them in two classes according to their ending:</p>
        <ol>
          <li>
            The first class is nouns that end in -ας, -ης, -ες or -ους. Masculine nouns of the first class can be either <span className="par">Parisyllabic</span> or <span className="impar">Imparisyllabic</span>:            
            <ul>
              <li><span className="par">Parisyllabic</span> nouns of the first class form their nominative, accusative, and vocative plurals in -ες.</li>
              <li><span className="impar">Imparisyllabic</span> nouns of the first class form their nominative, accusative, and vocative plurals in -δες.</li>
            </ul>
          </li>
          <li>
            The second class is nouns that end in -ος. It includes only nouns ending in -ος (-os); it is a very big category.
            <ul>
              <li>They are all <span className="par">Parisyllabic</span> (i.e., they have the same number of syllables in the plural as they have in the nominative singular)</li>
              <li>They are all declined the same way</li>
            </ul>
          </li>
        </ol>
      </details>
      <details>
        <summary>Second Declension</summary>
        <p><span className="par">Parisyllabic</span> nouns form their nominative plurals in -ες, while <span className="impar">Imparisyllabic</span> ones form their nominative plurals in -δες</p>
        <ul>
          <li>
            The endings found in feminine nouns are -α, -η, another -η with archaic endings, -ω, -ου, and -ος with archaic endings.
            <ul>
              <li>Nouns ending in -α can be either <span className="par">Parisyllabic</span> or <span className="impar">Imparisyllabic</span>, and nouns ending in -ου are always <span className="impar">Imparisyllabic</span>.</li>
              <li>Nouns with all other endings are <span className="par">Parisyllabic</span></li>
            </ul>
          </li>
          <li>One of these legacies is feminine nouns ending in -η, which are <span className="par">Parisyllabic</span> in all plural cases except one (the genitive) and feminine nouns endings in -ος</li>
          <li>All feminine nouns (except the ones in -ος with archaic endings) form the genitive singular by adding an -ς at the end of their nominative.</li>
          <li>All feminine nouns (except the ones in -ος with archaic endings) have three identical cases in both numbers: the nominative, the accusative, and the vocative.</li>
          <li>All feminine nouns form their genitive plural with the ending -ων.</li>
        </ul>
      </details>
      <details>
        <summary>Third Declension</summary>
        <p>The endings of neuter nouns are -o, -ι, -ος, -μα, -σιμο, -ας, and -ως. We usually group the last two together because they are declined in exactly the same way.</p>
        <ul>
          <li>The endings of neuter nouns are -o, -ι, -ος, -μα, -σιμο, -ας, and -ως. We usually group the last two together because they are declined in exactly the same way.</li>
          <li>From these groups, the ones ending in -o, -ι, and -ος are <span className="par">Parisyllabic</span> and the ones ending in -μα, -σιμο, -ας, and -ως are <span className="impar">Imparisyllabic</span>.</li>
          <li>All neuter nouns have three identical cases in both numbers: the nominative, the accusative, and the vocative.</li>
          <li>All neuter nouns form their genitive plural with the ending -ων.</li>
        </ul>
      </details>
    </Article>
  )
}

export default Declensions