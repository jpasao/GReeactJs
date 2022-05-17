import { useState } from 'react';

import Article from "../components/article.component";
import DropDown from '../components/drop-down.component';
import { PERSON_TYPE } from '../resources/enum-types';

const PastTenses = ({title}) => {
  const verbObj = [
    {
      present: 'ανεβαίνω',
      stem: 'ανε',
      past: 'ανέβηκα',
      verbCase: 'εγώ',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνω',
      stem: 'πηγ',
      past: 'πήγα',
      verbCase: 'εγώ',
      english: 'to go'
    },
    {
      present: 'περνάω',
      stem: 'περ',
      past: 'πέρασα',
      verbCase: 'εγώ',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνω',
      stem: 'κατ',
      past: 'κατέβηκα',
      verbCase: 'εγώ',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούω',
      stem: 'ακο',
      past: 'άκουσα',
      verbCase: 'εγώ',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγω',
      stem: 'φευ',
      past: 'έφυγα',
      verbCase: 'εγώ',
      english: 'to leave'
    },
    {
      present: 'τρώω',
      stem: 'τρω',
      past: 'έφαγα',
      verbCase: 'εγώ',
      english: 'to eat'
    },
    {
      present: 'αφήνω',
      stem: 'αφη',
      past: 'άφησα',
      verbCase: 'εγώ',
      english: 'to let'
    },
    {
      present: 'διαβάζω',
      stem: 'δια',
      past: 'διάβασα',
      verbCase: 'εγώ',
      english: 'to read'
    },
    {
      present: 'ανοίγω',
      stem: 'ανο',
      past: 'άνοιξα',
      verbCase: 'εγώ',
      english: 'to open'
    },
    {
      present: 'κλείνω',
      stem: 'κλε',
      past: 'έκλεισα',
      verbCase: 'εγώ',
      english: 'to close'
    },
    {
      present: 'σβήνω',
      stem: 'σβη',
      past: 'έσβησα',
      verbCase: 'εγώ',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνεις',
      stem: 'ανε',
      past: 'ανέβηκες',
      verbCase: 'εσύ',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνεις',
      stem: 'πηγ',
      past: 'πήγες',
      verbCase: 'εσύ',
      english: 'to go'
    },
    {
      present: 'περνάς',
      stem: 'περ',
      past: 'πέρασες',
      verbCase: 'εσύ',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνεις',
      stem: 'κατ',
      past: 'κατέβηκες',
      verbCase: 'εσύ',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούς',
      stem: 'ακο',
      past: 'άκουσες',
      verbCase: 'εσύ',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγεις',
      stem: 'φευ',
      past: 'έφυγες',
      verbCase: 'εσύ',
      english: 'to leave'
    },
    {
      present: 'τρως',
      stem: 'τρω',
      past: 'έφαγες',
      verbCase: 'εσύ',
      english: 'to eat'
    },
    {
      present: 'αφήνεις',
      stem: 'αφη',
      past: 'άφησες',
      verbCase: 'εσύ',
      english: 'to let'
    },
    {
      present: 'διαβάζεις',
      stem: 'δια',
      past: 'διάβασες',
      verbCase: 'εσύ',
      english: 'to read'
    },
    {
      present: 'ανοίγεις',
      stem: 'ανο',
      past: 'άνοιξες',
      verbCase: 'εσύ',
      english: 'to open'
    },
    {
      present: 'κλείνεις',
      stem: 'κλε',
      past: 'έκλεισες',
      verbCase: 'εσύ',
      english: 'to close'
    },
    {
      present: 'σβήνεις',
      stem: 'σβη',
      past: 'έσβησες',
      verbCase: 'εσύ',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνει',
      stem: 'ανε',
      past: 'ανέβηκε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνει',
      stem: 'πηγ',
      past: 'πήγε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to go'
    },
    {
      present: 'περνάει',
      stem: 'περ',
      past: 'πέρασε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνει',
      stem: 'κατ',
      past: 'κατέβηκε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούει',
      stem: 'ακο',
      past: 'άκουσε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγει',
      stem: 'φευ',
      past: 'έφυγε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to leave'
    },
    {
      present: 'τρώει',
      stem: 'τρω',
      past: 'έφαγε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to eat'
    },
    {
      present: 'αφήνει',
      stem: 'αφη',
      past: 'άφησε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to let'
    },
    {
      present: 'διαβάζει',
      stem: 'δια',
      past: 'διάβασε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to read'
    },
    {
      present: 'ανοίγει',
      stem: 'ανο',
      past: 'άνοιξε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to open'
    },
    {
      present: 'κλείνει',
      stem: 'κλε',
      past: 'έκλεισε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to close'
    },
    {
      present: 'σβήνει',
      stem: 'σβη',
      past: 'έσβησε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνουμε',
      stem: 'ανε',
      past: 'ανεβήκαμε',
      verbCase: 'εμείς',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνουμε',
      stem: 'πηγ',
      past: 'πήγαμε',
      verbCase: 'εμείς',
      english: 'to go'
    },
    {
      present: 'περνάμε',
      stem: 'περ',
      past: 'περάσαμε',
      verbCase: 'εμείς',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνουμε',
      stem: 'κατ',
      past: 'κατεβήκαμε',
      verbCase: 'εμείς',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούμε',
      stem: 'ακο',
      past: 'ακούσαμε',
      verbCase: 'εμείς',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγουμε',
      stem: 'φευ',
      past: 'φύγαμε',
      verbCase: 'εμείς',
      english: 'to leave'
    },
    {
      present: 'τρώμε',
      stem: 'τρω',
      past: 'φάγαμε',
      verbCase: 'εμείς',
      english: 'to eat'
    },
    {
      present: 'αφήνουμε',
      stem: 'αφη',
      past: 'αφήσαμε',
      verbCase: 'εμείς',
      english: 'to let'
    },
    {
      present: 'διαβάζουμε',
      stem: 'δια',
      past: 'διαβάσαμε',
      verbCase: 'εμείς',
      english: 'to read'
    },
    {
      present: 'ανοίγουμε',
      stem: 'ανο',
      past: 'ανοίξαμε',
      verbCase: 'εμείς',
      english: 'to open'
    },
    {
      present: 'κλείνουμε',
      stem: 'κλε',
      past: 'κλείσαμε',
      verbCase: 'εμείς',
      english: 'to close'
    },
    {
      present: 'σβήνουμε',
      stem: 'σβη',
      past: 'σβήσαμε',
      verbCase: 'εμείς',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνετε',
      stem: 'ανε',
      past: 'ανεβήκατε',
      verbCase: 'εσείς',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνετε',
      stem: 'πηγ',
      past: 'πήγατε',
      verbCase: 'εσείς',
      english: 'to go'
    },
    {
      present: 'περνάτε',
      stem: 'περ',
      past: 'περάσατε',
      verbCase: 'εσείς',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνετε',
      stem: 'κατ',
      past: 'κατεβήκατε',
      verbCase: 'εσείς',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούτε',
      stem: 'ακο',
      past: 'ακούσατε',
      verbCase: 'εσείς',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγετε',
      stem: 'φευ',
      past: 'φύγατε',
      verbCase: 'εσείς',
      english: 'to leave'
    },
    {
      present: 'τρώτε',
      stem: 'τρω',
      past: 'φάγατε',
      verbCase: 'εσείς',
      english: 'to eat'
    },
    {
      present: 'αφήνετε',
      stem: 'αφη',
      past: 'αφήσατε',
      verbCase: 'εσείς',
      english: 'to let'
    },
    {
      present: 'διαβάζετε',
      stem: 'δια',
      past: 'διαβάσατε',
      verbCase: 'εσείς',
      english: 'to read'
    },
    {
      present: 'ανοίγετε',
      stem: 'ανο',
      past: 'ανοίξατε',
      verbCase: 'εσείς',
      english: 'to open'
    },
    {
      present: 'κλείνετε',
      stem: 'κλε',
      past: 'κλείσατε',
      verbCase: 'εσείς',
      english: 'to close'
    },
    {
      present: 'σβήνετε',
      stem: 'σβη',
      past: 'σβήσατε',
      verbCase: 'εσείς',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνουν',
      stem: 'ανε',
      past: 'ανέβηκαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνουν',
      stem: 'πηγ',
      past: 'πήγαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to go'
    },
    {
      present: 'περνούν',
      stem: 'περ',
      past: 'πέρασαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνουν',
      stem: 'κατ',
      past: 'κατέβηκαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούν',
      stem: 'ακο',
      past: 'άκουσαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγουν',
      stem: 'φευ',
      past: 'έφυγαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to leave'
    },
    {
      present: 'τρώνε',
      stem: 'τρω',
      past: 'έφαγαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to eat'
    },
    {
      present: 'αφήνουν',
      stem: 'αφη',
      past: 'άφησαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to let'
    },
    {
      present: 'διαβάζουν',
      stem: 'δια',
      past: 'διάβασαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to read'
    },
    {
      present: 'ανοίγουν',
      stem: 'ανο',
      past: 'άνοιξαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to open'
    },
    {
      present: 'κλείνουν',
      stem: 'κλε',
      past: 'έκλεισαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to close'
    },
    {
      present: 'σβήνουν',
      stem: 'σβη',
      past: 'έσβησαν',
      verbCase: 'αυτοί / αυτές / αυτά',
      english: 'to switch off'
    }
  ];

  const presentVerbs = verbObj
    .filter((verb) => verb.verbCase === 'εγώ')
    .map((verb) => {
      return { checked: true, stem: verb.stem, text: verb.present}
    })

  const [cases, setCases] = useState('all');
  const [verbs, setVerbs] = useState(presentVerbs);

  const onCaseChange = (event) => {
    const caseOption = event.target.value;
    setCases(caseOption);
  }

  const onVerbChange = (event) => {
    const verbChecked = event.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filteredPresentVerbs = verbs.map((verbItem) => 
      verbItem.stem === verbChecked.slice(0, 3) 
        ? {...verbItem, checked: !verbItem.checked} 
        : verbItem
    )
    setVerbs(filteredPresentVerbs);
  }

  const filteredVerbs = verbObj
    .filter((verbItem) => {
        const verbChecked = verbs.find((verbList) => verbList.stem === verbItem.stem);

        return (verbItem.verbCase === cases || cases === 'all') 
          && verbChecked !== undefined
          && verbChecked.checked;
    })    

  return(
    <Article title={title}>     
      <p>In some cases i.e., the verbs ανεβαίνω, κατεβαίνω and πηγαίνω things are pretty much normal: we removed the last syllable -αίνω and in its place we have -ήκα, -ήκες, -ήκε, -ήκαμε, -ήκατε, and -ήκαν.</p>
      <p>In some other cases, i.e. the verbs ακούω, διαβάζω and αφήνω, the last syllable is again the one to go, i.e. -ω, -ζω, and -νω, respectively and in their place we have -σα, -σες, -σε, -σαμε, -σατε, and -σαν.</p>
      <p>Things get trickier with the verb περνάω. In its case, the two last syllables -νάω are the ones to be replaced, and in their place we have -ασα, -ασες, -ασε, -άσαμε, -άσατε, and -ασαν.</p>
      <p>In the case of ανοίγω  we replaced the final γω with -ξα, -ξες, -ξε, -ξαμε, -ξατε, and -ξαν.</p>
      <p>Κλείνω and σβήνω have two similarities: first, they both drop the final νω, which becomes -σα, -σες, -σε, -σαμε, -σατε, and -σαν. But they also get an -ε in their beginning έ-κλει-σα, έ-σβη-σα; we call this an augment, and it has to do with the verb starting with a consonant.</p>
      <p>Finally, we have φεύγω and τρώω. Since these also start with a consonant, they get the augment, so up until that point we are OK. Things get a little more complicated because after the initial -e, they change almost completely, so it would be better to not try to remember some rule of change but to learn them by heart. Luckily, they are very common verbs, so it won't be long before you learn their conjugation. </p>      
      <p>In the table that follow, we will show how these verbs form their simple past:</p>
      <h5>Choose options to filter the table:</h5>
      <DropDown label='Case' options={PERSON_TYPE} onChangeHandler={onCaseChange} />
      <p>
        <label>Verb</label><br/>
        {verbs.map((verbItem) => (
          <label key={verbItem.text}>
            <input 
              type='checkbox' 
              value={verbItem.text} 
              checked={verbItem.checked} 
              onChange={onVerbChange}  
            />
            {verbItem.text}
          </label>)
        )}
      </p>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Present</th>
            <th>Past</th>
            <th><em>English</em></th>
          </tr>
        </thead>
        <tbody>
          {filteredVerbs.map((verb) => {
            const { present, past, verbCase, english } = verb;
            return (
            <tr key={present}>
              <td>{verbCase}</td>
              <td>{present}</td>
              <td>{past}</td>
              <td><em>{english}</em></td>
            </tr>)
          })}
        </tbody>
      </table>
    </Article>
  )
}

export default PastTenses