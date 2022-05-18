import { useState } from "react";

import Article from "../components/article.component";
import { NUMBER_TYPE, CASE_TYPE } from "../resources/enum-types";
import DropDown from "../components/drop-down.component";

const IrregularAdjective = ({title}) => {
  const polyForms = [
    {
      caseType: CASE_TYPE.nominative,
      masculine: 'ο πολύς',
      feminine: 'η πολλή',
      neuter: 'το πολύ',
      number: NUMBER_TYPE.singular
    },
    {
      caseType: CASE_TYPE.genitive,
      masculine: 'του πολύ',
      feminine: 'της πολλής',
      neuter: 'του πολύ',
      number: NUMBER_TYPE.singular
    },
    {
      caseType: CASE_TYPE.accusative,
      masculine: 'τον πολύ',
      feminine: 'την πολλή',
      neuter: 'το πολύ',
      number: NUMBER_TYPE.singular
    },
    {
      caseType: CASE_TYPE.nominative,
      masculine: 'οι πολλοί',
      feminine: 'οι πολλές',
      neuter: 'τα πολλά',
      number: NUMBER_TYPE.plural
    },
    {
      caseType: CASE_TYPE.genitive,
      masculine: 'των πολλών',
      feminine: 'των πολλών',
      neuter: 'των πολλών',
      number: NUMBER_TYPE.plural
    },
    {
      caseType: CASE_TYPE.accusative,
      masculine: 'τους πολλούς',
      feminine: 'τις πολλές',
      neuter: 'τα πολλά',
      number: NUMBER_TYPE.plural
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

  const filteredPolyForms = polyForms
    .filter((polyForm) => (
      (polyForm.caseType === cases || cases === CASE_TYPE.all) &&
      (polyForm.number === numbers || numbers === NUMBER_TYPE.all)
    ))

  return(
    <Article title={title}>      
      <p>Like most adjectives, πολλοί has three genders and is declinable with three cases:</p>
      <h5>Choose options to filter the table:</h5>
      <DropDown label='Case' options={CASE_TYPE} onChangeHandler={onCaseChange} />
      <DropDown label='Number' options={NUMBER_TYPE} onChangeHandler={onNumberChange} />
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
          {filteredPolyForms.map((polyForm) => {
            const { caseType, masculine, feminine, neuter, number } = polyForm
            return (
              <tr key={ masculine }>
                <td>{ caseType }</td>
                <td>{ number }</td>
                <td>{ masculine }</td>
                <td>{ feminine }</td>
                <td>{ neuter }</td>
              </tr>              
            )
          })}
        </tbody>
      </table>     
    </Article>
  )
}

export default IrregularAdjective