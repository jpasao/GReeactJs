import { useState } from "react";

import Article from "../components/article.component";
import { ADJECTIVE_TYPE } from "../resources/enum-types";
import DropDown from "../components/drop-down.component";

const SuperlativeDegree = ({title}) => {
  const adjectiveList = [
    {
      greek: 'καλός',
      compound: '',
      positive: 'καλός',
      english: 'good',
      type: ADJECTIVE_TYPE.positive
    },
    {
      greek: 'πιο καλός',
      compound: 'καλύτερος',
      positive: 'καλός',
      english: 'better',
      type: ADJECTIVE_TYPE.comparative
    },
    {
      greek: 'ο πιο καλός',
      compound: 'ο άριστος / ο κάλλιστος',
      positive: 'καλός',
      english: 'best',
      type: ADJECTIVE_TYPE.superlative
    },
    {
      greek: 'μεγάλος',
      compound: '',
      positive: 'μεγάλος',
      english: 'big',
      type: ADJECTIVE_TYPE.positive
    },
    {
      greek: 'πιο μεγάλος',
      compound: 'μεγαλύτερος',
      positive: 'μεγάλος',
      english: 'bigger',
      type: ADJECTIVE_TYPE.comparative
    },
    {
      greek: 'ο πιο μεγάλος',
      compound: 'ο μέγιστος',
      positive: 'μεγάλος',
      english: 'biggest',
      type: ADJECTIVE_TYPE.superlative
    },
    {
      greek: 'μικρός',
      compound: '',
      positive: 'μικρός',
      english: 'small',
      type: ADJECTIVE_TYPE.positive
    },
    {
      greek: 'πιο μικρός',
      compound: 'μικρότερος',
      positive: 'μικρός',
      english: 'smaller',
      type: ADJECTIVE_TYPE.comparative
    },
    {
      greek: 'ο πιο μικρός',
      compound: 'ο ελάχιστος',
      positive: 'μικρός',
      english: 'smallest',
      type: ADJECTIVE_TYPE.superlative
    },
    {
      greek: 'κακός',
      compound: '',
      positive: 'κακός',
      english: 'bad',
      type: ADJECTIVE_TYPE.positive
    },
    {
      greek: 'πιο κακός',
      compound: 'χειρότερος',
      positive: 'κακός',
      english: 'worse',
      type: ADJECTIVE_TYPE.comparative
    },
    {
      greek: 'ο πιο κακός',
      compound: 'ο χείριστος',
      positive: 'κακός',
      english: 'the worst',
      type: ADJECTIVE_TYPE.superlative
    },
    {
      greek: 'πολύς',
      compound: '',
      positive: 'πολύς',
      english: 'much',
      type: ADJECTIVE_TYPE.positive
    },
    {
      greek: 'πιο πολύς',
      compound: 'περισσότερος',
      positive: 'πολύς',
      english: 'more',
      type: ADJECTIVE_TYPE.comparative
    },
    {
      greek: 'ο πιο πολύς',
      compound: 'ο περισσότερος',
      positive: 'πολύς',
      english: 'most',
      type: ADJECTIVE_TYPE.superlative
    },
    {
      greek: 'λίγος',
      compound: '',
      positive: 'λίγος',
      english: 'little',
      type: ADJECTIVE_TYPE.positive
    },
    {
      greek: 'πιο λίγος',
      compound: 'λιγότερος',
      positive: 'λίγος',
      english: 'less',
      type: ADJECTIVE_TYPE.comparative
    },
    {
      greek: 'ο πιο λίγος',
      compound: 'ο ελάχιστος',
      positive: 'λίγος',
      english: 'least',
      type: ADJECTIVE_TYPE.superlative
    },    
  ]

  const positiveList = adjectiveList
    .reduce((acc, element) => {
      const positive = element.positive;
      if (acc.includes(positive) === false) acc.push(positive);
      return acc;
    }, [])
    .map((element) => { 
      return {checked: true, text: element }
    })

  const [adjectives, setAdjectives] = useState(ADJECTIVE_TYPE.all)
  const [positives, setPositives] = useState(positiveList)
  
  const onTypeChange = (event) => {
    const typeChanged = event.target.value;
    setAdjectives(typeChanged);
  }

  const onPositiveChange = (event) => {
    const positiveChecked = event.target.value
    const filteredPositives = positives
      .map((positive) => 
        positive.text === positiveChecked
        ? { ...positive, checked: !positive.checked }
        : positive
      )
      setPositives(filteredPositives)
  }

  const filteredAdjectives = adjectiveList
    .filter((adjective) => {
      const positiveChecked = positives.find((positive) => positive.text === adjective.positive)

      return (adjective.type === adjectives || adjectives === ADJECTIVE_TYPE.all)
        && positiveChecked !== undefined
        && positiveChecked.checked;
    })

  return(
    <Article title={title}>
      <p>The relative superlative is when it indicates that the noun mentioned has the particular quality/attribute in the highest degree in the when compared to all similar nouns:</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Το Έβερεστ είναι το ψηλότερο βουνό στον κόσμο.</dd>
        <dd><em>Everest is the highest mountain in the world.</em></dd>
      </dl>
      <p>The absolute superlative is when it indicates that the noun mentioned has the particular quality/attribute in the highest degree but without comparing it.</p>
      <dl>
        <dt>For Example:</dt>
        <dd>Αυτό το αυτοκίνητο είναι κατάμαυρο.</dd>
        <dd><em>This car is pitch black.</em></dd>
      </dl>
      <aside>All we need to do is add the definite article before the comparative degree of the adjective</aside>
      <p>We can create The absolute superlative in different ways: </p>      
      <dl>
        <dt>By adding the suffix -τατος, which can be either -ότατος or -ύτατος, depending on whether the adjective ends in -ος or -υς</dt>
        <dd>Positive: ακριβός <em>expensive</em>; superlative: ακριβότατος <em>most expensive</em></dd>
        <dd>Positive: φτηνός <em>cheap</em>; superlative: φτηνότατος <em>cheapest</em></dd>
        <dd>Positive: βαθύς <em>deep</em>; superlative: βαθύτατος <em>deepest</em></dd>
        <dd>Positive: πλατύς <em>wide</em>; superlative: πλατύτατος <em>most wide</em></dd>
      </dl>
      <dl>
        <dt>By adding the adverb πολύ, meaning <em>very</em> before the positive degree of the adjective</dt>
        <dd>Positive: μαύρος <em>black</em>; superlative: πολύ μαύρος <em>very black</em></dd>
        <dd>Positive: δυνατός <em>strong</em>; superlative: πολύ δυνατός <em>very strong</em></dd>
        <dd>Positive: καλός <em>good</em>; superlative: πολύ καλός <em>very good</em></dd>
        <dd>Positive: μεγάλος <em>big</em>; superlative: πολύ μεγάλος <em>very big</em></dd>
      </dl>
      <dl>
        <dt>By creating a compound with the use of the adjective όλο, meaning <em>all</em> the preposition κατά, literally meaning <em>against</em> but in this context meaning <em>completely</em> and the Ancient Greek adjective παν, meaning <em>all</em> or <em>everything</em></dt>
        <dd>Positive: λευκός, <em>white</em>; superlative: ολόλευκος <em>all white</em></dd>
        <dd>Positive: ψηλός <em>tall</em>; superlative: πανύψηλος <em>very tall</em></dd>
        <dd>Positive: πράσινος <em>green</em>; superlative: καταπράσινος <em>completely green</em></dd>
      </dl>
      <p>Some common adjectives in all three degrees:</p>
      <h5>Choose options to filter the table:</h5>
      <DropDown label='Type' options={ADJECTIVE_TYPE} onChangeHandler={onTypeChange} />
      <p>
        <label>Adjectives</label><br/>
        {positives.map((positive) => (
          <label key={positive.text}>
          <input 
            type='checkbox' 
            value={positive.text} 
            checked={positive.checked} 
            onChange={onPositiveChange}  
          />
          {positive.text}
        </label>          
        ))}
      </p>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Greek</th>
            <th>Compound</th>
            <th><em>English</em></th>
          </tr>
        </thead>
        <tbody>
          {filteredAdjectives.map((adjective) => {
            const { greek, compound, english, type } = adjective
            return (
              <tr key={english}>
                <td>{ type }</td>
                <td>{ greek }</td>
                <td>{ compound }</td>
                <td>{ english }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Article>
  )
}

export default SuperlativeDegree