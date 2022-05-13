import Article from "../components/article.component";

const IndefiniteArticle = ({title}) => {
  return(
    <Article title={title}>      
      <p>The indefinite articles ένας, μία, and ένα are the masculine, feminine, and neuter, respectively</p>
      <p>We also use it as an indefinite personal pronoun and as the numeral one</p>
      <p>The good thing is that regardless of whether we are dealing with the indefinite article, the indefinite personal pronoun, or the numeral, we always decline the words ένας, μία and ένα the same way</p>
      <p>The following are some sample sentences using the word ένας in all its uses</p>
      <table>
        <tbody>
          <tr>
            <td>Greek</td>
            <td><em>English</em></td>
          </tr>
          <tr>
            <td>Στο λεωφορείο είναι μόνο ένας επιβάτης</td>
            <td><em>There is only one passenger on the bus</em></td>
          </tr>
          <tr>
            <td>Ο ένας μου γιος είναι γιατρός</td>
            <td><em>One of my sons is a doctor</em></td>
          </tr>
          <tr>
            <td>Ο ένας κινητήρας είναι χαλασμένος</td>
            <td><em>One engine is broken</em></td>
          </tr>
          <tr>
            <td>O ένας είναι ψηλός και ο άλλος είναι κοντός</td>
            <td><em>One is tall and the other is short</em></td>
          </tr>
          <tr>
            <td>Είναι ένας λευκός τοίχος</td>
            <td><em>It is a white wall</em></td>
          </tr>
          <tr>
            <td>Στο συρτάρι είναι ένας χάρτης</td>
            <td><em>There is a map in the drawer</em></td>
          </tr>
          <tr>
            <td>Είναι ένας πίνακας του Πικάσο</td>
            <td><em>It is a painting by Picasso</em></td>
          </tr>
        </tbody>
      </table>
    </Article>
  )
}

export default IndefiniteArticle