import Article from "../components/article.component";

const Time = ({title}) => {
  return(
    <Article title={title}>
      <p>To indicate the full hour, just say στις, as in στις πέντε (<em>at five o'clock</em>). You may want to add the word ακριβώς (<em>exactly</em>) to mean <em>at five o'clock sharp</em>.</p>
      <p>If it is some minutes after the full hour, simply use και, as in στις πέντε και δέκα (<em>at five-ten</em>). However, if it's approaching the next hour already, use παρά (<em>minus</em>), as in στις έξι παρά δέκα (<em>at ten to six = five-fifty</em>).</p>
      <ul>
        <li>Στις πέντε και τέταρτο <em>at a quarter past five = five-fifteen</em></li>
        <li>Στις έξι παρά τέταρτο <em>at a quarter to six = five-forty-five</em></li>
        <li>Στις πέντε και μισή <em>at half past five = five-thirty</em></li>
      </ul>
    </Article>
  )
}

export default Time