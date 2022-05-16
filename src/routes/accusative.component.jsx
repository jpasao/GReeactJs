import Article from "../components/article.component";

const Accusative = ({title}) => {
  return(
    <Article title={title}>  
          <table>
            <tbody>
              <tr>
                <td>GENDER</td>
                <td>NOMINATIVE</td>
                <td>ACCUSATIVE</td>
                <td><em>ENGLISH</em></td>
              </tr>
              <tr>
                <td>Masculine in -ος</td>
                <td>ο γιατρός</td>
                <td>τον γιατρό</td>
                <td><em>the doctor</em></td>
              </tr>
              <tr>
                <td>Masculine in -ας</td>
                <td>ο παπάς</td>
                <td>τον παπά</td>
                <td><em>the priest</em></td>
              </tr>
              <tr>
                <td>Masculine in -ης</td>
                <td>ο Θανάσης</td>
                <td>τον Θανάση</td>
                <td><em>Thanasis</em></td>
              </tr>
              <tr>
                <td>Feminine in -α</td>
                <td>η νοσοκόμα</td>
                <td>τη νοσοκόμα</td>
                <td><em>the nurse</em></td>
              </tr>
              <tr>
                <td>Feminine in -η</td>
                <td>η ειρήνη</td>
                <td>την ειρήνη</td>
                <td><em>peace</em></td>
              </tr>
              <tr>
                <td>Neuter in -ο</td>
                <td>το ρούχο</td>
                <td>το ρούχο</td>
                <td><em>the cloth</em></td>
              </tr>
              <tr>
                <td>Neuter in -α</td>
                <td>το δίπλωμα</td>
                <td>το δίπλωμα</td>
                <td><em>the diploma</em></td>
              </tr>
              <tr>
                <td>Neuter in -oς</td>
                <td>το μήκος</td>
                <td>το μήκος</td>
                <td><em>the length</em></td>
              </tr>
              <tr>
                <td>Neuter in -ες</td>
                <td>to συνεχές</td>
                <td>το συνεχές</td>
                <td><em>the continuum</em></td>
              </tr>
              <tr>
                <td>Neuter in -ι</td>
                <td>το σπίτι</td>
                <td>το σπίτι</td>
                <td><em>the house</em></td>
              </tr>
              <tr>
                <td>Neuter in -ας</td>
                <td>το τέρας</td>
                <td>το τέρας</td>
                <td><em>the monster</em></td>
              </tr>
              <tr>
                <td>Neuter in -ως</td>
                <td>το καθεστώς</td>
                <td>το καθεστώς</td>
                <td><em>the regime</em></td>
              </tr>
            </tbody>
          </table>
          <p>Only the masculine nouns change from the nominative to the accusative, and basically what happens is that they drop the final -ς, which is always present in masculine-gendered nouns</p>
          <p>The following table has the changes from the nominative to the accusative case in the articles</p>
          <table>
            <tbody>
              <tr>
                <td>CASE</td>
                <td>NOMINATIVE</td>
                <td></td>
                <td>ACCUSATIVE</td>
                <td></td>
              </tr> 
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