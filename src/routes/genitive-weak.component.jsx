import Article from "../components/article.component";

const GenitiveWeak = ({title}) => {
  return(
    <Article title={title}>      
      <p>Used when English would say <em>to me</em>, <em>to you</em>, <em>to us</em>, or the like</p>
      <table>
        <thead>
          <tr>
            <th>GREEK</th>
            <th><em>ENGLISH</em></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>μου</td>
            <td><em>my / to me</em></td>
          </tr>
          <tr>
            <td>σου</td>
            <td><em>your / to you</em> (singular)</td>
          </tr>
          <tr>
            <td>του</td>
            <td><em>his / to him</em></td>
          </tr>
          <tr>
            <td>της</td>
            <td><em>her / to her</em></td>
          </tr>
          <tr>
            <td>μας</td>
            <td><em>our / to us</em></td>
          </tr>
          <tr>
            <td>σας</td>
            <td><em>your / to you</em> (plural)</td>
          </tr>
          <tr>
            <td>τους</td>
            <td><em>their / to them</em></td>
          </tr>
        </tbody>
      </table>
    </Article>
  )
}

export default GenitiveWeak