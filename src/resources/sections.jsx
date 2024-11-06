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
import Quiz from "../routes/quiz.component";

export const sections = [
  {  route: 'plurals', component: <Plurals title='Plural of -ος, -α, and -ο' />, show: true },
  {  route: 'subjunctive', component: <Subjunctive title='Subjunctive'/>, show: true },
  {  route: 'time', component: <Time title='Telling Time' />, show: true },
  {  route: 'imperative', component: <Imperative title='Imperative' />, show: true },
  {  route: 'adjective', component: <Adjective title='Adjective Endings (-ος, -η, -ο)' />, show: true },
  {  route: 'there-is', component: <ThereIs title='υπάρχει / υπάρχουν and αρέσει / αρέσουν' />, show: true },
  {  route: 'accusative-weak', component: <AccusativeWeak title='Accusative Weak Personal Pronouns' />, show: true },
  {  route: 'advebs', component: <Adverbs title='Adjectives Versus Adverbs' />, show: true },
  {  route: 'genitive-weak', component: <GenitiveWeak title='Genitive Weak Personal Pronouns' />, show: true },
  {  route: 'indefinite-article', component: <IndefiniteArticle title='Use of the Indefinite Article in Modern Greek' />, show: true },
  {  route: 'numbers-in-nouns', component: <NumbersInNouns title='Numbers (Singular and Plural) in Nouns' />, show: true },
  {  route: 'genitive-case-of-nouns', component: <GenitiveCases title='Cases and Especially the Genitive Case of Nouns' />, show: true },
  {  route: 'vocative', component: <Vocative title='Vocative Case of Nouns' />, show: true },
  {  route: 'irregular-adjective', component: <IrregularAdjective title='Irregular Adjective πολύς/πολλοί' />, show: true },
  {  route: 'accusative', component: <Accusative title='Accusative Case of Nouns Used with έχω' />, show: true },
  {  route: 'to-have-first-person', component: <ToHaveFirstPerson title='First Person, Singular and Plural of the Verb έχω' />, show: true },
  {  route: 'to-have-second-and-third-person', component: <ToHaveSecondAndThird title='Second and Third Person Forms of the Verb έχω' />, show: true },
  {  route: 'to-be-past-tense', component: <ToBePastTense title='Past Tense of the Verb είμαι' />, show: true },
  {  route: 'to-have-past-tense', component: <ToHavePastTense title='είχα, the Past Tense of the Verb έχω' />, show: true },
  {  route: 'past-tenses', component: <PastTenses title='Past Tense of Common Greek Verbs' />, show: true },
  {  route: 'definite-article', component: <DefiniteArticle title='Definite Article of Nouns' />, show: true },
  {  route: 'declensions', component: <Declensions title='Declensions' />, show: true },
  {  route: 'comparative-degree', component: <ComparativeDegree title='Comparing Adjectives with the Comparative Degree' />, show: true },
  {  route: 'superlative-degree', component: <SuperlativeDegree title='Superlative Degree of Adjectives' />, show: true },
  {  route: 'quiz', component: <Quiz title='Take a quiz:' />, show: false },
  {  route: '/*', component: <Landing title='Choose what do you want to do:' />, show: false },   
];