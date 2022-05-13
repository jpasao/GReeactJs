import Article from "../components/article.component";

const AccusativeWeak = ({title}) => {
  return(
    <Article title={title}>      
      <table>
        <tbody>
          <tr>
            <td>Greek</td>
            <td><em>English</em></td>          
          </tr>
          <tr>
            <td>με</td>
            <td><em>me</em></td>
          </tr>
          <tr>
            <td>σε</td>
            <td><em>you</em> (singular)</td>
          </tr>
          <tr>
            <td>τον</td>
            <td><em>him</em></td>
          </tr>
          <tr>
            <td>την</td>
            <td><em>her</em></td>
          </tr>
          <tr>
            <td>το</td>
            <td><em>it</em> (doesn't change)</td>
          </tr>
          <tr>
            <td>μας</td>
            <td><em>us</em></td>
          </tr>
          <tr>
            <td>σας</td>
            <td><em>you</em> (plural or formally)</td>
          </tr>
          <tr>
            <td>τους</td>
            <td><em>them</em> (mixed group)</td>
          </tr>
          <tr>
            <td>τις</td>
            <td><em>them</em> (a group of all women or feminine words)</td>
          </tr>
          <tr>
            <td>τα</td>
            <td><em>them</em> (a group of all neuter words)</td>
          </tr>
        </tbody>
      </table>

      <p>Sometimes δεν ends in ν and sometimes it doesn't. The rule is that the ν appears when the following word starts with -κ, -π, -τ, -ξ, -ψ, or the consonant combinations -γκ, -μπ, -ντ, -τσ, or -τζ.</p>
      <p>If you're into phonetics, you'll notice that all of these consonants are plosives; the air flow stops after them. If a non-plosive consonant follows, δε does not end in ν. The same happens with μην and a few other Greek words.</p>
    </Article>
  )
}

export default AccusativeWeak