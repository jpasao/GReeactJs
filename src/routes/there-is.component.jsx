import Article from "../components/article.component";

const ThereIs = ({title}) => {
  return(
    <Article title={title}>
      <p>In Greek, each flavor of noun gets a different ending for the plural:</p> 
      <ul>
        <li>Υπάρχει used in the singular means <em>there is</em> or <em>it exists</em></li>
        <li>The plural υπάρχουν means <em>there are</em> or <em>they exist</em>.</li>
      </ul>
      <p>So, whenever you are talking about one monument, one building, one person, or the like, you have to use υπάρχει.</p> 
      <p>When you're talking about more than one, use υπάρχουν.</p>
      <p>Use αρέσει for a singular noun and αρέσουν for plural. One of the translations of αρέσει is <em>it pleases</em>. Thus, Greeks say things like Μου αρέσει η μουσική (<em>the music pleases me</em>)</p>
      <p>To talk about more than one thing that you like, use αρέσουν, as in Μου αρέσουν τα εστιατόρια (<em>The restaurants please me</em>, meaning <em>I like the restaurants</em>)</p>
    </Article>
  )
}

export default ThereIs