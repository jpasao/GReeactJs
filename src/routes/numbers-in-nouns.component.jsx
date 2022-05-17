import { useState } from "react";

import Article from "../components/article.component";
import { GENDER_TYPE } from "../resources/enum-types";
import DropDown from "../components/drop-down.component";

const NumbersInNouns = ({title}) => {
  const nouns = [
    {
      singular: 'ο άντρας',
      plural: 'οι άντρες',
      english: 'the man',
      gender: GENDER_TYPE.masculine
    },
    {
      singular: 'ο πατέρας',
      plural: 'οι πατέρες',
      english: 'the father',
      gender: GENDER_TYPE.masculine
    },
    {
      singular: 'ο υπολογιστής',
      plural: 'οι υπολογιστές',
      english: 'the computer',
      gender: GENDER_TYPE.masculine
    },
    {
      singular: 'ο τοίχος',
      plural: 'οι τοίχοι',
      english: 'the wall',
      gender: GENDER_TYPE.masculine
    },
    {
      singular: 'ο δρόμος',
      plural: 'οι δρόμοι',
      english: 'the street',
      gender: GENDER_TYPE.masculine
    },
    {
      singular: 'η γυναίκα',
      plural: 'οι γυναίκες',
      english: 'the woman',
      gender: GENDER_TYPE.feminine
    },
    {
      singular: 'η πόρτα',
      plural: 'οι πόρτες',
      english: 'the door',
      gender: GENDER_TYPE.feminine
    },
    {
      singular: 'η μητέρα',
      plural: 'οι μητέρες',
      english: 'the mother',
      gender: GENDER_TYPE.feminine
    },
    {
      singular: 'η οθόνη',
      plural: 'οι οθόνες',
      english: 'the screen',
      gender: GENDER_TYPE.feminine
    },
    {
      singular: 'η λεωφόρος',
      plural: 'οι λεωφόροι',
      english: 'the avenue',
      gender: GENDER_TYPE.feminine
    },
    {
      singular: 'το παιδί',
      plural: 'τα παιδιά',
      english: 'the child',
      gender: GENDER_TYPE.neuter
    },
    {
      singular: 'το εγγόνι',
      plural: 'τα εγγόνια',
      english: 'the grandchild',
      gender: GENDER_TYPE.neuter
    },
    {
      singular: 'το ποντίκι',
      plural: 'τα ποντίκια',
      english: 'the mouse',
      gender: GENDER_TYPE.neuter
    },
    {
      singular: 'το παράθυρο',
      plural: 'τα παράθυρα',
      english: 'the window',
      gender: GENDER_TYPE.neuter
    },
    {
      singular: 'το αυτοκίνητο',
      plural: 'τα αυτοκίνητα',
      english: 'the car',
      gender: GENDER_TYPE.neuter
    }    
  ]

  const [gender, setGender] = useState(GENDER_TYPE.all)

  const onGenderChange = (event) => {
    const genderChanged = event.target.value;
    setGender(genderChanged);
  }

  const filteredNouns = nouns 
    .filter((noun) => noun.gender === gender || gender === GENDER_TYPE.all)

  return(
    <Article title={title}>      
      <p>In the plural, the word μήνας becomes μήνες meaning <em>months</em>, which is a modification of the word's last syllable</p>
      <h5>Choose options to filter the table:</h5>
      <DropDown label='Gender' options={GENDER_TYPE} onChangeHandler={onGenderChange} />
      <table>
        <thead>
          <tr>
            <th>Singular</th>
            <th>Plural</th>
            <th><em>English</em></th>
          </tr>
        </thead>
        <tbody>
          {filteredNouns.map((noun) => {
            const { singular, plural, english } = noun
            return (
              <tr key={singular}>
                <td>{singular}</td>
                <td>{plural}</td>
                <td><em>{english}</em></td>
              </tr>              
            )
          })}          
        </tbody>
      </table>
    </Article>
  )
}

export default NumbersInNouns