import Article from "../components/article.component";

const Adverbs = ({title}) => {
  return(
    <Article title={title}>      
      <p>In English they usually end in -ly: for example, quick is an adjective, but quickly is an adverb.</p>
      <p>In Greek, adverbs typically end in -α, though there are some particularly old adverbs that end in -ως, like αμέσως, meaning <em>immediately</em>.</p>
      <p>The ending of adverbs never changes, so they are much easier to deal with.</p>
      <dl>
        <dt>Adjective</dt>
        <dd>      
          <table>            
            <tbody>
              <tr>
                <td>Το γρήγορο καράβι</td>
                <td>Το καράβι είναι γρήγορο</td>
              </tr>
              <tr>
                <td><em>The quick ship</em></td>
                <td><em>The ship is quick</em></td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>Adverb</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>Πάμε γρήγορα</td>
              </tr>
              <tr>
                <td><em>Let's go quickly</em></td>          
              </tr>
            </tbody>
          </table>
        </dd>
      </dl> 
      <dl>
        <dt>Adjective</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>Το εύκολο μάθημα</td>
                <td>Το μάθημα είναι εύκολο</td>
              </tr>
              <tr>
                <td><em>The easy lesson</em></td>
                <td><em>The lesson is easy</em></td>
              </tr>
            </tbody>
          </table>          
        </dd>
      </dl>
      <dl>
        <dt>Adverb</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>Πηγαίνεις εύκολα</td>       
              </tr>
              <tr>
                <td><em>You can easily get there</em></td>         
              </tr>
            </tbody>
          </table>          
        </dd>
      </dl> 
      <dl>
        <dt>Adjective</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>Καλό ταξίδι!</td>
              </tr>
              <tr>
                <td><em>Have a good trip!</em></td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>Adverb</dt>
        <dd>
          <table>
            <tbody>
              <tr>
                <td>Είμαι καλά</td>
              </tr>
              <tr>
                <td><em>I am well</em></td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>   
    </Article>
  )
}

export default Adverbs