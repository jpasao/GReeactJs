import { useState } from "react";

import Article from "../components/article.component";
import { GENDER_TYPE } from "../resources/enum-types";
import DropDown from "../components/drop-down.component";

const Accusative = ({title}) => {
  const nouns = [
    {
      gender: GENDER_TYPE.masculine,
      termination: 'Masculine in -ος',
      nominative: 'ο γιατρός',
      accusative: 'τον γιατρό',
      english: 'the doctor'
    },
    {
      gender: GENDER_TYPE.masculine,
      termination: 'Masculine in -ας',
      nominative: 'ο παπάς',
      accusative: 'τον παπά',
      english: 'the priest'
    },
    {
      gender: GENDER_TYPE.masculine,
      termination: 'Masculine in -ης	',
      nominative: 'ο Θανάσης',
      accusative: 'τον Θανάση',
      english: 'Thanasis'
    },
    {
      gender: GENDER_TYPE.feminine,
      termination: 'Feminine in -α',
      nominative: 'η νοσοκόμα',
      accusative: 'τη νοσοκόμα',
      english: 'the nurse'
    },
    {
      gender: GENDER_TYPE.feminine,
      termination: 'Feminine in -η',
      nominative: 'η ειρήνη',
      accusative: 'την ειρήνη',
      english: 'peace'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -ο',
      nominative: 'το ρούχο',
      accusative: 'το ρούχο',
      english: 'the cloth'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -α',
      nominative: 'το δίπλωμα',
      accusative: 'το δίπλωμα',
      english: 'the diploma'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -oς',
      nominative: 'το μήκος',
      accusative: 'το μήκος',
      english: 'the length'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -ες',
      nominative: 'to συνεχές',
      accusative: 'to συνεχές',
      english: 'the continuum'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -ι',
      nominative: 'το σπίτι',
      accusative: 'το σπίτι',
      english: 'the house'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -ας',
      nominative: 'το τέρας',
      accusative: 'το τέρας',
      english: 'the monster'
    },
    {
      gender: GENDER_TYPE.neuter,
      termination: 'Neuter in -ως',
      nominative: 'το καθεστώς',
      accusative: 'το καθεστώς',
      english: 'the regime'
    },    
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
      <h5>Choose options to filter the table:</h5>
      <DropDown label='Gender' options={GENDER_TYPE} onChangeHandler={onGenderChange} />
      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Nominative</th>
            <th>Accusative</th>
            <th><em>English</em></th>
          </tr>
        </thead>
        <tbody>
          {filteredNouns.map((noun) => {
            const { termination, nominative, accusative, english } = noun
            return (
              <tr key={ nominative }>
                <td>{termination}</td>
                <td>{nominative}</td>
                <td>{accusative}</td>
                <td><em>{english}</em></td>
              </tr>              
            )
          })}             
        </tbody>
      </table>
      <p>Only the masculine nouns change from the nominative to the accusative, and basically what happens is that they drop the final -ς, which is always present in masculine-gendered nouns</p>
      <p>The following table has the changes from the nominative to the accusative case in the articles</p>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Nominative</th>
            <th></th>
            <th>Accusative</th>
            <th></th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Definite</td>
            <td>Indefinite</td>
            <td>Definite</td>
            <td>Indefinite</td>
          </tr> 
          <tr>
            <td>Masculine</td>
            <td>ο</td>
            <td>ένας</td>
            <td>τον</td>
            <td>έναν</td>
          </tr> 
          <tr>
            <td>Feminine</td>
            <td>η</td>
            <td>μία</td>
            <td>τη / την</td>
            <td>μία</td>
          </tr> 
          <tr>
            <td>Neuter</td>
            <td>το</td>
            <td>ένα</td>
            <td>το</td>
            <td>ένα</td>
          </tr>
        </tbody>
      </table>
    </Article>
  )
}

export default Accusative