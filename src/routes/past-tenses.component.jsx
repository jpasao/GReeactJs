import Article from "../components/article.component";

const PastTenses = ({title}) => {
  const verbs = [
    {
      present: 'ανεβαίνω',
      past: 'ανέβηκα',
      verbCase: 'εγώ',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνω',
      past: 'πήγα',
      verbCase: 'εγώ',
      english: 'to go'
    },
    {
      present: 'περνάω',
      past: 'πέρασα',
      verbCase: 'εγώ',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνω',
      past: 'κατέβηκα',
      verbCase: 'εγώ',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούω',
      past: 'άκουσα',
      verbCase: 'εγώ',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγω',
      past: 'έφυγα',
      verbCase: 'εγώ',
      english: 'to leave'
    },
    {
      present: 'τρώω',
      past: 'έφαγα',
      verbCase: 'εγώ',
      english: 'to eat'
    },
    {
      present: 'αφήνω',
      past: 'άφησα',
      verbCase: 'εγώ',
      english: 'to let'
    },
    {
      present: 'διαβάζω',
      past: 'διάβασα',
      verbCase: 'εγώ',
      english: 'to read'
    },
    {
      present: 'ανοίγω',
      past: 'άνοιξα',
      verbCase: 'εγώ',
      english: 'to open'
    },
    {
      present: 'κλείνω',
      past: 'έκλεισα',
      verbCase: 'εγώ',
      english: 'to close'
    },
    {
      present: 'σβήνω',
      past: 'έσβησα',
      verbCase: 'εγώ',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνεις',
      past: 'ανέβηκες',
      verbCase: 'εσύ',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνεις',
      past: 'πήγες',
      verbCase: 'εσύ',
      english: 'to go'
    },
    {
      present: 'περνάς',
      past: 'πέρασες',
      verbCase: 'εσύ',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνεις',
      past: 'κατέβηκες',
      verbCase: 'εσύ',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούς',
      past: 'άκουσες',
      verbCase: 'εσύ',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγεις',
      past: 'έφυγες',
      verbCase: 'εσύ',
      english: 'to leave'
    },
    {
      present: 'τρως',
      past: 'έφαγες',
      verbCase: 'εσύ',
      english: 'to eat'
    },
    {
      present: 'αφήνεις',
      past: 'άφησες',
      verbCase: 'εσύ',
      english: 'to let'
    },
    {
      present: 'διαβάζεις',
      past: 'διάβασες',
      verbCase: 'εσύ',
      english: 'to read'
    },
    {
      present: 'ανοίγεις',
      past: 'άνοιξες',
      verbCase: 'εσύ',
      english: 'to open'
    },
    {
      present: 'κλείνεις',
      past: 'έκλεισες',
      verbCase: 'εσύ',
      english: 'to close'
    },
    {
      present: 'σβήνεις',
      past: 'έσβησες',
      verbCase: 'εσύ',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνει',
      past: 'ανέβηκε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνει',
      past: 'πήγε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to go'
    },
    {
      present: 'περνάει',
      past: 'πέρασε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνει',
      past: 'κατέβηκε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούει',
      past: 'άκουσε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγει',
      past: 'έφυγε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to leave'
    },
    {
      present: 'τρώει',
      past: 'έφαγε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to eat'
    },
    {
      present: 'αφήνει',
      past: 'άφησε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to let'
    },
    {
      present: 'διαβάζει',
      past: 'διάβασε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to read'
    },
    {
      present: 'ανοίγει',
      past: 'άνοιξε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to open'
    },
    {
      present: 'κλείνει',
      past: 'έκλεισε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to close'
    },
    {
      present: 'σβήνει',
      past: 'έσβησε',
      verbCase: 'αυτός / αυτή / αυτό',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνουμε',
      past: 'ανεβήκαμε',
      verbCase: 'εμείς',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνουμε',
      past: 'πήγαμε',
      verbCase: 'εμείς',
      english: 'to go'
    },
    {
      present: 'περνάμε',
      past: 'περάσαμε',
      verbCase: 'εμείς',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνουμε',
      past: 'κατεβήκαμε',
      verbCase: 'εμείς',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούμε',
      past: 'ακούσαμε',
      verbCase: 'εμείς',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγουμε',
      past: 'φύγαμε',
      verbCase: 'εμείς',
      english: 'to leave'
    },
    {
      present: 'τρώμε',
      past: 'φάγαμε',
      verbCase: 'εμείς',
      english: 'to eat'
    },
    {
      present: 'αφήνουμε',
      past: 'αφήσαμε',
      verbCase: 'εμείς',
      english: 'to let'
    },
    {
      present: 'διαβάζουμε',
      past: 'διαβάσαμε',
      verbCase: 'εμείς',
      english: 'to read'
    },
    {
      present: 'ανοίγουμε',
      past: 'ανοίξαμε',
      verbCase: 'εμείς',
      english: 'to open'
    },
    {
      present: 'κλείνουμε',
      past: 'κλείσαμε',
      verbCase: 'εμείς',
      english: 'to close'
    },
    {
      present: 'σβήνουμε',
      past: 'σβήσαμε',
      verbCase: 'εμείς',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνετε',
      past: 'ανεβήκατε',
      verbCase: 'εσείς',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνετε',
      past: 'πήγατε',
      verbCase: 'εσείς',
      english: 'to go'
    },
    {
      present: 'περνάτε',
      past: 'περάσατε',
      verbCase: 'εσείς',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνετε',
      past: 'κατεβήκατε',
      verbCase: 'εσείς',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούτε',
      past: 'ακούσατε',
      verbCase: 'εσείς',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγετε',
      past: 'φύγατε',
      verbCase: 'εσείς',
      english: 'to leave'
    },
    {
      present: 'τρώτε',
      past: 'φάγατε',
      verbCase: 'εσείς',
      english: 'to eat'
    },
    {
      present: 'αφήνετε',
      past: 'αφήσατε',
      verbCase: 'εσείς',
      english: 'to let'
    },
    {
      present: 'διαβάζετε',
      past: 'διαβάσατε',
      verbCase: 'εσείς',
      english: 'to read'
    },
    {
      present: 'ανοίγετε',
      past: 'ανοίξατε',
      verbCase: 'εσείς',
      english: 'to open'
    },
    {
      present: 'κλείνετε',
      past: 'κλείσατε',
      verbCase: 'εσείς',
      english: 'to close'
    },
    {
      present: 'σβήνετε',
      past: 'σβήσατε',
      verbCase: 'εσείς',
      english: 'to switch off'
    },
    {
      present: 'ανεβαίνουν',
      past: 'ανέβηκαν',
      verbCase: 'αυτοί',
      english: 'to climb up, to ascend'
    },
    {
      present: 'πηγαίνουν',
      past: 'πήγαν',
      verbCase: 'αυτοί',
      english: 'to go'
    },
    {
      present: 'περνούν',
      past: 'πέρασαν',
      verbCase: 'αυτοί',
      english: 'to pass'
    },
    {
      present: 'κατεβαίνουν',
      past: 'κατέβηκαν',
      verbCase: 'αυτοί',
      english: 'to climb down, to descend'
    },
    {
      present: 'ακούν',
      past: 'άκουσαν',
      verbCase: 'αυτοί',
      english: 'to hear or to listen'
    },
    {
      present: 'φεύγουν',
      past: 'έφυγαν',
      verbCase: 'αυτοί',
      english: 'to leave'
    },
    {
      present: 'τρώνε',
      past: 'έφαγαν',
      verbCase: 'αυτοί',
      english: 'to eat'
    },
    {
      present: 'αφήνουν',
      past: 'άφησαν',
      verbCase: 'αυτοί',
      english: 'to let'
    },
    {
      present: 'διαβάζουν',
      past: 'διάβασαν',
      verbCase: 'αυτοί',
      english: 'to read'
    },
    {
      present: 'ανοίγουν',
      past: 'άνοιξαν',
      verbCase: 'αυτοί',
      english: 'to open'
    },
    {
      present: 'κλείνουν',
      past: 'έκλεισαν',
      verbCase: 'αυτοί',
      english: 'to close'
    },
    {
      present: 'σβήνουν',
      past: 'έσβησαν',
      verbCase: 'αυτοί',
      english: 'to switch off'
    }
  ]

  return(
    <Article title={title}>      
      <p>In the tables that follow, we will show how some verbs form their simple past:</p>
      <h5>Choose options to filter the table:</h5>
      <select>
        <option selected>All cases</option>
        <option value='εγώ'>εγώ</option>
        <option value='εσύ'>εσύ</option>
        <option value='αυτός / αυτή / αυτό'>αυτός / αυτή / αυτό</option>
        <option value='εμείς'>εμείς</option>
        <option value='εσείς'>εσείς</option>
        <option value='αυτοί'>αυτοί</option>
      </select>
      <table>
        <tbody>
          <tr>
            <td>Case</td>
            <td>Present</td>
            <td>Past</td>
            <td><em>English</em></td>
          </tr>
          {verbs.map((verb) => {
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