import { useState } from "react";

import { ARTICLE_TYPE } from "../resources/enum-types";
import Article from "../components/article.component";
import DropDown from "../components/drop-down.component";

const IndefiniteArticle = ({title}) => {
  const phrases = [
    {
      greek: 'Στο λεωφορείο είναι μόνο ένας επιβάτης',
      english: 'There is only one passenger on the bus',
      type: ARTICLE_TYPE.numeral
    },
    {
      greek: 'Ο ένας μου γιος είναι γιατρός',
      english: 'One of my sons is a doctor',
      type: ARTICLE_TYPE.pronoun
    },
    {
      greek: 'Ο ένας κινητήρας είναι χαλασμένος',
      english: 'One engine is broken',
      type: ARTICLE_TYPE.numeral
    },
    {
      greek: 'O ένας είναι ψηλός και ο άλλος είναι κοντός',
      english: 'One is tall and the other is short',
      type: ARTICLE_TYPE.pronoun
    },
    {
      greek: 'Είναι ένας λευκός τοίχος',
      english: 'It is a white wall',
      type: ARTICLE_TYPE.indefinite
    },
    {
      greek: 'Στο συρτάρι είναι ένας χάρτης',
      english: 'There is a map in the drawer',
      type: ARTICLE_TYPE.indefinite
    },
    {
      greek: 'Είναι ένας πίνακας του Πικάσο',
      english: 'It is a painting by Picasso',
      type: ARTICLE_TYPE.indefinite
    }
  ]
   
  const [types, setTypes] = useState(ARTICLE_TYPE.all)

  const onTypechange = (event) => {
    const typeChanged = event.target.value;
    setTypes(typeChanged);
  }

  const filteredPhrases = phrases
    .filter((phrase) => phrase.type === types || types === ARTICLE_TYPE.all)

  return(
    <Article title={title}>      
      <p>The indefinite articles ένας, μία, and ένα are the masculine, feminine, and neuter, respectively</p>
      <p>We also use it as an indefinite personal pronoun and as the numeral one</p>
      <p>The good thing is that regardless of whether we are dealing with the indefinite article, the indefinite personal pronoun, or the numeral, we always decline the words ένας, μία and ένα the same way</p>
      <p>The following are some sample sentences using the word ένας in all its uses</p>
      <h5>Choose options to filter the table:</h5>
      <DropDown label='Type' options={ARTICLE_TYPE} onChangeHandler={onTypechange} />
      <table>
        <thead>
          <tr>
            <th>Greek</th>
            <th><em>English</em></th>
          </tr>
        </thead>
        <tbody>
          {filteredPhrases.map((type) => {
            const { greek, english } = type
            return (
              <tr key={greek}>
                <td>{greek}</td>
                <td><em>{english}</em></td>
              </tr>              
            )
          })}
        </tbody>
      </table>
    </Article>
  )
}

export default IndefiniteArticle