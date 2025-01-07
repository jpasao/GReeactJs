import { useState } from "react";

import Article from "../components/article.component";
import { NUMBER_TYPE, CASE_TYPE } from "../resources/enum-types";
import DropDown from "../components/drop-down.component";

const DefiniteArticle = ({title}) => {
  const articles = [
    {
      caseType: CASE_TYPE.nominative,
      masculine: 'ο',
      feminine: 'η',
      neuter: 'το',
      number: NUMBER_TYPE.singular
    },
    {
      caseType: CASE_TYPE.genitive,
      masculine: 'του',
      feminine: 'της',
      neuter: 'του',
      number: NUMBER_TYPE.singular
    },
    {
      caseType: CASE_TYPE.accusative,
      masculine: 'τον',
      feminine: 'την',
      neuter: 'το',
      number: NUMBER_TYPE.singular
    },
    {
      caseType: CASE_TYPE.nominative,
      masculine: 'οι',
      feminine: 'οι',
      neuter: 'τα',
      number: NUMBER_TYPE.plural
    },
    {
      caseType: CASE_TYPE.genitive,
      masculine: 'των',
      feminine: 'των',
      neuter: 'των',
      number: NUMBER_TYPE.plural
    },
    {
      caseType: CASE_TYPE.accusative,
      masculine: 'τους',
      feminine: 'τις ',
      neuter: 'τα',
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

  const filteredArticles = articles
    .filter((art) => (
      (art.caseType === cases || cases === CASE_TYPE.all) &&
      (art.number === numbers || numbers === NUMBER_TYPE.all)
    ))

  return(
    <Article title={title}>
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
          {filteredArticles.map((polyForm) => {
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

export default DefiniteArticle