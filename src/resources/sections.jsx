import Plurals from "../routes/plurals.component";
import Subjunctive from "../routes/subjunctive.component";
import Time from "../routes/time.component";

export const sections = [
  { key: 0, name: 'Plural of -ος, -α, and -ο', route: 'plurals', component: <Plurals/> },
  { key: 1, name: 'Subjunctive', route: 'subjunctive', component: <Subjunctive /> },
  { key: 2, name: 'Telling Time', route: 'time', component: <Time /> },
  // { key: 3, name: 'Imperative', route: 'imperative', component: <Imperative /> },
  // { key: 4, name: 'Adjective Endings (-ος, -η, -ο)', route: 'adjective', component: <Adjective /> },
  // { key: 5, name: 'υπάρχει/υπάρχουν and αρέσει/αρέσουν', route: 'there-is', component: <ThereIs /> },
  // { key: 6, name: 'Accusative Weak Personal Pronouns', route: 'accusative-weak', component: <AccusativeWeak /> },
  // { key: 7, name: 'Adjectives Versus Adverbs', route: 'advebs', component: <Adverbs /> },
  // { key: 8, name: 'Genitive Weak Personal Pronouns', route: 'genitive-weak', component: <GenitiveWeak /> },
  // { key: 9, name: 'Use of the Indefinite Article in Modern Greek', route: 'indefinite-article', component: <IndefiniteArticle /> },
  // { key: 10, name: 'Numbers (Singular and Plural) in Nouns', route: 'numbers-in-nouns', component: <NumbersInNouns /> },
  // { key: 11, name: 'Cases and Especially the Genitive Case of Nouns', route: 'genitive-case-of-nouns', component: <GenitiveCases /> },
  // { key: 12, name: 'Vocative Case of Nouns', route: 'vocative', component: <Vocative /> },
  // { key: 13, name: 'Irregular Adjective πολύς/πολλοί', route: 'irregular-adjetive', component: <IrregularAdjective /> },
  // { key: 14, name: 'Accusative Case of Nouns Used with έχω', route: 'accusative', component: <Accusative /> },
  // { key: 15, name: 'First Person, Singular and Plural of the Verb έχω', route: 'to-have-first-person', component: <ToHaveFirstPerson /> },
  // { key: 16, name: 'Second and Third Person Forms of the Verb έχω', route: 'to-have-second-and-third-person', component: <ToHaveSecondAndThird /> },
  // { key: 17, name: 'Past Tense of the Verb είμαι', route: 'to-be-past-tense', component: <ToBePastTense /> },
  // { key: 18, name: 'είχα, the Past Tense of the Verb έχω', route: 'to-have-past-tense', component: <ToHavePastTense /> },
  // { key: 19, name: 'Past Tense of Common Greek Verbs', route: 'past-tenses', component: <PastTenses /> },
  // { key: 20, name: 'Definite Article of Nouns', route: 'definite-article', component: <DefiniteArticle /> },
  // { key: 21, name: 'Declensions', route: 'declensions', component: <Declensions /> },
  // { key: 24, name: 'Comparing Adjectives with the Comparative Degree', route: 'comparative-degree', component: <ComparativeDegree /> },
  // { key: 25, name: 'Superlative Degree of Adjectives', route: 'superlative-degree', component: <SuperlativeDegree /> },
];