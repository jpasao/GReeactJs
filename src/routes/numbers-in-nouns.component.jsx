import Article from "../components/article.component";

const NumbersInNouns = ({title}) => {
  return(
    <Article title={title}>      
      <p>In the plural, the word μήνας becomes μήνες meaning <em>months</em>, which is a modification of the word's last syllable</p>
      <table>
        <tbody>
          <tr>
            <td>Singular</td>
            <td>Plural</td>
            <td><em>English</em></td>
          </tr>
          <tr>
            <td>ο άντρας (m.)</td>
            <td>οι άντρες</td>
            <td><em>the man</em></td>
          </tr>
          <tr>
            <td>ο πατέρας (m.)</td>
            <td>οι πατέρες</td>
            <td><em>the father</em></td>
          </tr>
          <tr>
            <td>ο υπολογιστής (m.)</td>
            <td>οι υπολογιστές</td>
            <td><em>the computer</em></td>
          </tr>
          <tr>
            <td>ο τοίχος (m.)</td>
            <td>οι τοίχοι</td>
            <td><em>the wall</em></td>
          </tr>
          <tr>
            <td>ο δρόμος (m.)</td>
            <td>οι δρόμοι</td>
            <td><em>the street</em></td>
          </tr>
          <tr>
            <td>η γυναίκα (f.)</td>
            <td>οι γυναίκες</td>
            <td><em>the woman</em></td>
          </tr>
          <tr>
            <td>η πόρτα (f.)</td>
            <td>οι πόρτες</td>
            <td><em>the door</em></td>
          </tr>
          <tr>
            <td>η μητέρα (f.)</td>
            <td>οι μητέρες</td>
            <td><em>the mother</em></td>
          </tr>
          <tr>
            <td>η οθόνη (f.)</td>
            <td>οι οθόνες</td>
            <td><em>the screen</em></td>
          </tr>
          <tr>
            <td>η λεωφόρος (f.)</td>
            <td>οι λεωφόροι</td>
            <td><em>the avenue</em></td>
          </tr>
          <tr>
            <td>το παιδί (n.)</td>
            <td>τα παιδιά</td>
            <td><em>the child</em></td>
          </tr>
          <tr>
            <td>το εγγόνι (n.)</td>
            <td>τα εγγόνια</td>
            <td><em>the grandchild</em></td>
          </tr>
          <tr>
            <td> το ποντίκι (n.)</td>
            <td>τα ποντίκια</td>
            <td><em>the mouse</em></td>
          </tr>
          <tr>
            <td>το παράθυρο (n.)</td>
            <td>τα παράθυρα</td>
            <td><em>the window</em></td>
          </tr>
          <tr>
            <td>το αυτοκίνητο (n.)</td>
            <td>τα αυτοκίνητα</td>
            <td><em>the car</em></td>
          </tr>
        </tbody>
      </table>
    </Article>
  )
}

export default NumbersInNouns