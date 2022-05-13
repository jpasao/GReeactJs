import Article from "../components/article.component";

const Subjunctive = ({title}) => {
  return(
    <Article title={title}>    
      <ul>
        <li>To say <em>I want to be rich</em> is literally <em>I want that I am rich</em>: θέλω να είμαι πλούσιος. <em>I want to always speak Greek</em> is literally <em>I want that I speak always Greek</em>, so this phrase would be θέλω να μιλάω πάντα ελληνικά.</li>
          <li>You cannot avoid this <em>I want that I speak</em> structure. And when it's someone else who is wishing for something, you have to adjust accordingly. <em>He wants to be rich</em> translates to <em>He wants that he is rich</em>, which is θέλει να είναι πλούσιος. Both verbs adjust: θέλω becomes θέλει, and είμαι becomes είναι. <em>You want to always speak Greek</em> is <em>you want that you speak always Greek</em>, or θέλεις να μιλάς πάντα ελληνικά.</li>
          <li>On the bright side, this makes more complex wishes easier. For example, <em>I want you to always speak Greek</em> is <em>I want that you speak always Greek</em>: θέλω να μιλάς πάντα ελληνικά. Θέλω is <em>I want</em>, and μιλάς is <em>you speak</em>. In Greek sentences, it is always clear who is to do what.</li>
          <li>We express a negative wish with μη (or μην, if the next word begins with a vowel or the letters κ, π, τ, ξ, ψ, μπ, ντ, γκ, τσ, and τζ). As said, θέλω να μη δουλεύω, which means <em>I want that not I work</em> or <em>I want not to work</em>. Do not confuse this with δεν θέλω να δουλεύω, meaning <em>I don't want to work</em>, which has a similar but not identical meaning.</li>
          <li>Either way, the να always introduces the wish. So when you have a freestanding να without any θέλω, we still interpret it as a wish or suggestion. For example, asked Μήπως να πάμε για πρωινό τώρα; meaning <em>Maybe we should go have breakfast now?</em></li>
        </ul>
    </Article>
  )
}

export default Subjunctive