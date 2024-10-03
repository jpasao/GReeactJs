import Plurals from "../routes/plurals.component";
import Subjunctive from "../routes/subjunctive.component";
import Time from "../routes/time.component";
import Imperative from "../routes/imperative.component";
import Adjective from "../routes/adjective.component";
import ThereIs from "../routes/there-is.component";
import AccusativeWeak from "../routes/accusative-weak.component";
import Adverbs from "../routes/adverb.component";
import GenitiveWeak from "../routes/genitive-weak.component";
import IndefiniteArticle from "../routes/indefinite-article.component";
import NumbersInNouns from "../routes/numbers-in-nouns.component";
import GenitiveCases from "../routes/genitive-cases.component";
import Vocative from "../routes/vocative.component";
import IrregularAdjective from "../routes/irregular-adjective.component";
import Accusative from "../routes/accusative.component";
import ToHaveFirstPerson from "../routes/to-have-first-person.component";
import ToHaveSecondAndThird from "../routes/to-have-second-and-third-person.component";
import ToBePastTense from "../routes/to-be-past-tense.component";
import ToHavePastTense from "../routes/to-have-past-tense.component";
import PastTenses from "../routes/past-tenses.component";
import DefiniteArticle from "../routes/definite-article.component";
import Declensions from "../routes/declensions.component";
import ComparativeDegree from "../routes/comparative-degree.component";
import SuperlativeDegree from "../routes/superlative-degree.comonent";
import Landing from "../routes/landing";

export const sections = [
  {  route: 'plurals', component: <Plurals title='Plural of -ος, -α, and -ο' /> },
  {  route: 'subjunctive', component: <Subjunctive title='Subjunctive'/> },
  {  route: 'time', component: <Time title='Telling Time' /> },
  {  route: 'imperative', component: <Imperative title='Imperative' /> },
  {  route: 'adjective', component: <Adjective title='Adjective Endings (-ος, -η, -ο)' /> },
  {  route: 'there-is', component: <ThereIs title='υπάρχει / υπάρχουν and αρέσει / αρέσουν' /> },
  {  route: 'accusative-weak', component: <AccusativeWeak title='Accusative Weak Personal Pronouns' /> },
  {  route: 'advebs', component: <Adverbs title='Adjectives Versus Adverbs' /> },
  {  route: 'genitive-weak', component: <GenitiveWeak title='Genitive Weak Personal Pronouns' /> },
  {  route: 'indefinite-article', component: <IndefiniteArticle title='Use of the Indefinite Article in Modern Greek' /> },
  {  route: 'numbers-in-nouns', component: <NumbersInNouns title='Numbers (Singular and Plural) in Nouns' /> },
  {  route: 'genitive-case-of-nouns', component: <GenitiveCases title='Cases and Especially the Genitive Case of Nouns' /> },
  {  route: 'vocative', component: <Vocative title='Vocative Case of Nouns' /> },
  {  route: 'irregular-adjective', component: <IrregularAdjective title='Irregular Adjective πολύς/πολλοί' /> },
  {  route: 'accusative', component: <Accusative title='Accusative Case of Nouns Used with έχω' /> },
  {  route: 'to-have-first-person', component: <ToHaveFirstPerson title='First Person, Singular and Plural of the Verb έχω' /> },
  {  route: 'to-have-second-and-third-person', component: <ToHaveSecondAndThird title='Second and Third Person Forms of the Verb έχω' /> },
  {  route: 'to-be-past-tense', component: <ToBePastTense title='Past Tense of the Verb είμαι' /> },
  {  route: 'to-have-past-tense', component: <ToHavePastTense title='είχα, the Past Tense of the Verb έχω' /> },
  {  route: 'past-tenses', component: <PastTenses title='Past Tense of Common Greek Verbs' /> },
  {  route: 'definite-article', component: <DefiniteArticle title='Definite Article of Nouns' /> },
  {  route: 'declensions', component: <Declensions title='Declensions' /> },
  {  route: 'comparative-degree', component: <ComparativeDegree title='Comparing Adjectives with the Comparative Degree' /> },
  {  route: 'superlative-degree', component: <SuperlativeDegree title='Superlative Degree of Adjectives' /> },
  {  route: '/*', component: <Landing title='Choose what do you want to do:' /> } 
];