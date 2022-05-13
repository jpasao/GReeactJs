import Article from "../components/article.component";

const Time = ({title}) => {
  return(
    <Article title={title}>
      <p>To indicate the full hour, just say στις, as in στις πέντε ("at five o'clock"). You may want to add the word ακριβώς ("exactly") to mean "at five o'clock sharp."</p>
      <p>If it is some minutes after the full hour, simply use και, as in στις πέντε και δέκα ("at five-ten"). However, if it's approaching the next hour already, use παρά (minus), as in στις έξι παρά δέκα ("at ten to six" = "five-fifty").</p>
      <ul>
        <li>Στις πέντε και τέταρτο "at a quarter past five" = "five-fifteen"</li>
        <li>Στις έξι παρά τέταρτο "at a quarter to six" = "five-forty-five"</li>
        <li>Στις πέντε και μισή "at half past five" = "five-thirty"</li>
      </ul>
    </Article>
  )
}

export default Time