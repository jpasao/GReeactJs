import Article from "../components/article.component";

const ToHaveSecondAndThird = ({title}) => {
  return(
    <Article title={title}>      
      <p>We translate σου and δικά σας as <em>your</em>. The word σου (and σας) are personal pronouns appearing here in their "weak" form (there is also a "strong" form, which we use when we want to add emphasis or make a distinction).</p>
      <p>We use this weak form in Greek to form possessive pronouns ("my," "your," etc.) as follows:</p>
      <dl>
        <dt>First and second person</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>CASE</td>
                <td>FIRST PERSON</td>
                <td>SECOND PERSON</td>
              </tr> 
              <tr>
                <td>Singular</td>
                <td></td>
                <td></td>
              </tr> 
              <tr>
                <td>Genitive</td>
                <td>μου</td>
                <td>σου</td>
              </tr>        
              <tr>
                <td>Accusative</td>
                <td>με</td>
                <td>σε</td>
              </tr>    
              <tr>
                <td>Plural</td>
                <td></td>
                <td></td>
              </tr> 
              <tr>
                <td>Genitive</td>
                <td>μας</td>
                <td>σας</td>
              </tr> 
              <tr>
                <td>Accusative</td>
                <td>μας</td>
                <td>σας</td>
              </tr>        
            </tbody>
          </table>           
        </dd>
      </dl>
      <dl>
        <dt>Third person</dt>
        <dd>
        <table>
            <tbody>
              <tr>
                <td>Case</td>
                <td>Masculine</td>
                <td>Feminine</td>
                <td>Neuter</td>
              </tr> 
              <tr>
                <td>Singular</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>              
              <tr>
                <td>Nominative</td>
                <td>τος</td>
                <td>τη</td>
                <td>το</td>
              </tr>
              <tr>
                <td>Genitive</td>
                <td>του</td>
                <td>της</td>
                <td>του</td>
              </tr>
              <tr>
                <td>Accusative</td>
                <td>τον</td>
                <td>τη(ν)</td>
                <td>το</td>
              </tr>
              <tr>
                <td>Plural</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Nominative</td>
                <td>τοι</td>
                <td>τες</td>
                <td>τα</td>
              </tr>
              <tr>
                <td>Genitive</td>
                <td>τους</td>
                <td>τους</td>
                <td>τους</td>
              </tr>
              <tr>
                <td>Accusative</td>
                <td>τους</td>
                <td>τις / τες </td>
                <td>τα</td>
              </tr>
            </tbody>
          </table>           
        </dd>
      </dl>
      <p>So when we want to say <em>my books</em>, we will use the first person singular genitive pronoun from the above, τα βιβλία μου, and when we want to say <em>her car</em>, we will say το αυτοκίνητό της - third person, feminine, genitive singular.</p>
    </Article>
  )
}

export default ToHaveSecondAndThird