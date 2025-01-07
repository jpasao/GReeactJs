import { useState } from "react";

import Article from "../components/article.component";
import { NUMBER_TYPE, CASE_TYPE } from "../resources/enum-types";

const ToHaveSecondAndThird = ({title}) => {
  const haveFormsFirstAndSecond = [
    {
      number: NUMBER_TYPE.singular,
      caseType: CASE_TYPE.genitive,
      first: 'μου',
      second: 'σου'
    },
    {
      number: NUMBER_TYPE.singular,
      caseType: CASE_TYPE.accusative,
      first: 'με',
      second: 'σε'
    },
    {
      number: NUMBER_TYPE.plural,
      caseType: CASE_TYPE.genitive,
      first: 'μας',
      second: 'σας'
    },
    {
      number: NUMBER_TYPE.plural,
      caseType: CASE_TYPE.accusative,
      first: 'μας',
      second: 'σας'
    }
  ]

  const haveFormsThird = [
    {
      number: NUMBER_TYPE.singular,
      caseType: CASE_TYPE.nominative,
      masculine: 'τος',
      feminine: 'τη',
      neuter: 'το'
    },
    {
      number: NUMBER_TYPE.singular,
      caseType: CASE_TYPE.genitive,
      masculine: 'του',
      feminine: 'της',
      neuter: 'του'
    },
    {
      number: NUMBER_TYPE.singular,
      caseType: CASE_TYPE.accusative,
      masculine: 'τον',
      feminine: 'τη(ν)',
      neuter: 'το'
    },
    {
      number: NUMBER_TYPE.plural,
      caseType: CASE_TYPE.nominative,
      masculine: 'τοι',
      feminine: 'τες',
      neuter: 'τα'
    },
    {
      number: NUMBER_TYPE.plural,
      caseType: CASE_TYPE.genitive,
      masculine: 'τους',
      feminine: 'τους',
      neuter: 'τους'
    },
    {
      number: NUMBER_TYPE.plural,
      caseType: CASE_TYPE.accusative,
      masculine: 'τους',
      feminine: 'τις / τες',
      neuter: 'τα'
    },
  ]

  const [cases, setCases] = useState(CASE_TYPE.all)
  const [numbers, setNumbers] = useState(NUMBER_TYPE.all)

  const onCaseChange = (event) => {
    const caseChanged = event.target.value;
    setCases(caseChanged);
  }

  const onNumberChange = (event) => {
    const numberChanged = event.target.value;
    setNumbers(numberChanged);
  }

  const filteredHaveFormsFirstAndSecond = haveFormsFirstAndSecond
    .filter((forms) => (
      (forms.caseType === cases || cases === CASE_TYPE.all) &&
      (forms.number === numbers || numbers === NUMBER_TYPE.all)
    ))

  const filteredHaveFormsThird = haveFormsThird
    .filter((forms) => (
      (forms.caseType === cases || cases === CASE_TYPE.all) &&
      (forms.number === numbers || numbers === NUMBER_TYPE.all)
    ))    

  return(
    <Article title={title}>
      <p>We translate σου and δικά σας as <em>your</em>. The word σου (and σας) are personal pronouns appearing here in their "weak" form (there is also a "strong" form, which we use when we want to add emphasis or make a distinction).</p>
      <p>We use this weak form in Greek to form possessive pronouns ("my," "your," etc.) as follows:</p>
      
      <h5>Choose options to filter the table:</h5>
      <p>
        <label>Case</label><br/>
        <select onChange={onCaseChange}>
          <option defaultValue={CASE_TYPE.all} value={CASE_TYPE.all}>{CASE_TYPE.all}</option>
          <option value={CASE_TYPE.nominative}>{CASE_TYPE.nominative}</option>
          <option value={CASE_TYPE.accusative}>{CASE_TYPE.accusative}</option>
          <option value={CASE_TYPE.genitive}>{CASE_TYPE.genitive}</option>
        </select>
      </p>
      <p>
        <label>Number</label><br/>
        <select onChange={onNumberChange}>
          <option defaultValue={NUMBER_TYPE.all} value={NUMBER_TYPE.all}>{NUMBER_TYPE.all}</option>
          <option value={NUMBER_TYPE.singular}>{NUMBER_TYPE.singular}</option>
          <option value={NUMBER_TYPE.plural}>{NUMBER_TYPE.plural}</option>          
        </select>
      </p>

      <dl>
        <dt>First and second person</dt>
        <dd>
          <table>
            <thead>
              <tr>
                <th>Case</th>
                <th>Number</th>
                <th>First person</th>
                <th>Second person</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredHaveFormsFirstAndSecond.map((haveForm) => {
                  const { number, caseType, first, second } = haveForm
                  return (
                    <tr key={`${caseType}${first}`}>
                      <td>{ caseType}</td>
                      <td>{ number }</td>
                      <td>{ first }</td>
                      <td>{ second }</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>Third person</dt>
        <dd>
        <table>
            <thead>
              <tr>
                <th>Case</th>
                <th>Number</th>
                <th>Masculine</th>
                <th>Feminine</th>
                <th>Neuter</th>
              </tr> 
            </thead>
            <tbody>
              {
                filteredHaveFormsThird.map((haveForm) => {
                  const { number, caseType, masculine, feminine, neuter } = haveForm
                  return (
                    <tr key={ feminine }>
                      <td>{ caseType}</td>
                      <td>{ number }</td>
                      <td>{ masculine }</td>
                      <td>{ feminine }</td>
                      <td>{ neuter }</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </dd>
      </dl>
      <p>So when we want to say <em>my books</em>, we will use the first person singular genitive pronoun from the above, τα βιβλία μου, and when we want to say <em>her car</em>, we will say το αυτοκίνητό της - third person, feminine, genitive singular.</p>
    </Article>
  )
}

export default ToHaveSecondAndThird