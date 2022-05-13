import Article from "../components/article.component";

const Adjective = ({title}) => {
  return(
    <Article title={title}>      
      <p>The feminine forms of adjectives can follow the pattern of words like γυναίκα, but there is also a second pattern that they could follow, based on the ending -η and mirroring feminine nouns like πόλη.</p>
      <p> This leads to phrases where the adjective and the noun suddenly don't have the same ending anymore, like η αρχαία πόλη or η όμορφη γυναικα.</p>
      <p>So when you're learning a new adjective like μεγάλος, you have to memorize whether the feminine form will end in -α or -η.</p>
      <ul>
        <li>In the case of μεγάλος the feminine form is μεγάλη</li>
        <li>For καινούριος it's καινούρια.</li>
        <li>Όμορφος leads to όμορφη</li>
        <li>αρχαίος leads to αρχαία</li>
      </ul>
      <p>For μεγάλος you'll see ος, η, and ο, for masculine, feminine and the neuter, respectively. Very soon you will be able to predict which ending words will take.</p>
      <table>
        <tr>
          <td>Greek</td>
          <td>English</td>
          <td>Endings</td>
        </tr>
        <tr>
          <td>μεγάλος</td>
          <td><em>big, elder</em></td>
          <td>ος, η, ο</td>
        </tr>
        <tr>
          <td>όμορφος</td>
          <td><em>beautiful</em></td>
          <td>ος, η, ο</td>
        </tr>
        <tr>
          <td>άσχημος</td>
          <td><em>ugly, bad</em></td>
          <td>ος, η, ο</td>
        </tr>
        <tr>
          <td>αρχαίος</td>
          <td><em>ancient</em></td>
          <td>ος, α, ο</td>
        </tr>
        <tr>
          <td>καινούριο</td>
          <td><em>new</em></td>
          <td>ος, α, ο</td>
        </tr>
      </table>
      <p>	Τι μεγάλος που είναι! is an expression like <em>Wow, how big it is!</em> Literally, you're saying <em>what big which it is</em></p>
      <p>	μου αρέσει να βλέπω και τα μουσεία. Here it doesn't mean <em>and</em> so much as <em>also</em>: <em>I like to see the museums also</em>.</p>
    </Article>
  )
}

export default Adjective