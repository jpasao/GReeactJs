import * as c from "./constants";
import { 
    ACCENT_TYPE as accents, 
    CASE_TYPE as cases, 
    NUMBER_TYPE as numbers,
    GENDER_TYPE as genders,
    PERSON_TYPES as persons,
    CLASS_TYPE as classes
} from "./enum-types";

const answers = [
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ί", "form": numbers.singular, "case": cases.nominative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "του", "ending": "ιού", "form": numbers.singular, "case": cases.genitive, "accent": accents.oxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ί", "form": numbers.singular, "case": cases.accusative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ί", "form": numbers.singular, "case": cases.vocative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ιά", "form": numbers.plural, "case": cases.nominative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "των", "ending": "ιών", "form": numbers.plural, "case": cases.genitive, "accent": accents.oxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ιά", "form": numbers.plural, "case": cases.accusative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ιά", "form": numbers.plural, "case": cases.vocative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "του", "ending": "ιού", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ι", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ια", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "των", "ending": "ιών", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ια", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ια", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": numbers.singular, "case": cases.nominative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "του", "ending": "ιού", "form": numbers.singular, "case": cases.genitive, "accent": accents.proparoxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": numbers.singular, "case": cases.accusative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ι", "form": numbers.singular, "case": cases.vocative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.secondConjugationVerb, "starting": "εγώ", "ending": "ώ", "form": numbers.singular, "person": persons.first, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "εγώ", "ending": "άω", "form": numbers.singular, "person": persons.first, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "εσύ", "ending": "άς", "form": numbers.singular, "person": persons.second, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "αυτός", "ending": "ά", "form": numbers.singular, "person": persons.third, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "αυτός", "ending": "άει", "form": numbers.singular, "person": persons.third, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "εμείς", "ending": "ούμε", "form": numbers.plural, "person": persons.first, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "εμείς", "ending": "άμε", "form": numbers.plural, "person": persons.first, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "εσείς", "ending": "άτε", "form": numbers.plural, "person": persons.second, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "αυτοί", "ending": "ούν", "form": numbers.plural, "person": persons.third, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "αυτοί", "ending": "άν", "form": numbers.plural, "person": persons.third, "class": classes.first },
    { "category": c.secondConjugationVerb, "starting": "εγώ", "ending": "ώ", "form": numbers.singular, "person": persons.first, "class": classes.second },
    { "category": c.secondConjugationVerb, "starting": "εσύ", "ending": "είς", "form": numbers.singular, "person": persons.second, "class": classes.second },
    { "category": c.secondConjugationVerb, "starting": "αυτός", "ending": "εί", "form": numbers.singular, "person": persons.third, "class": classes.second },
    { "category": c.secondConjugationVerb, "starting": "εμείς", "ending": "ούμε", "form": numbers.plural, "person": persons.first, "class": classes.second },
    { "category": c.secondConjugationVerb, "starting": "εσείς", "ending": "είτε", "form": numbers.plural, "person": persons.second, "class": classes.second },
    { "category": c.secondConjugationVerb, "starting": "αυτοί", "ending": "ούν", "form": numbers.plural, "person": persons.third, "class": classes.second },
    { "category": c.parisyllabicFeminineI, "starting": "η", "ending": "ή", "form": numbers.singular, "case": cases.nominative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "της", "ending": "ής", "form": numbers.singular, "case": cases.genitive, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "τη", "ending": "ή", "form": numbers.singular, "case": cases.accusative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ή", "form": numbers.singular, "case": cases.vocative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "οι", "ending": "ές", "form": numbers.plural, "case": cases.nominative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.oxytone, "moveToLast": true },
    { "category": c.parisyllabicFeminineI, "starting": "τις", "ending": "ές", "form": numbers.plural, "case": cases.accusative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ές", "form": numbers.plural, "case": cases.vocative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "η", "ending": "η", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "της", "ending": "ης", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "την", "ending": "η", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "η", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "οι", "ending": "ες", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicFeminineI, "starting": "τις", "ending": "ες", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ες", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "η", "ending": "η", "form": numbers.singular, "case": cases.nominative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "της", "ending": "ης", "form": numbers.singular, "case": cases.genitive, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "τη", "ending": "η", "form": numbers.singular, "case": cases.accusative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "η", "form": numbers.singular, "case": cases.vocative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "οι", "ending": "ες", "form": numbers.plural, "case": cases.nominative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "τις", "ending": "ες", "form": numbers.plural, "case": cases.accusative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ες", "form": numbers.plural, "case": cases.vocative, "accent": accents.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineOs, "starting": "ο", "ending": "ός", "form": numbers.singular, "case": cases.nominative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "του", "ending": "ού", "form": numbers.singular, "case": cases.genitive, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τον", "ending": "ό", "form": numbers.singular, "case": cases.accusative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "έ", "form": numbers.singular, "case": cases.vocative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "οι", "ending": "οί", "form": numbers.plural, "case": cases.nominative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τους", "ending": "ούς", "form": numbers.plural, "case": cases.accusative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "οί", "form": numbers.plural, "case": cases.vocative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "ο", "ending": "ος", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "του", "ending": "ου", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τον", "ending": "ο", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "ε", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "οι", "ending": "οι", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "των", "ending": "ων", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τους", "ending": "ους", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "οι", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false }, 
    { "category": c.parisyllabicMasculineOs, "starting": "ο", "ending": "ος", "form": numbers.singular, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "του", "ending": "ου", "form": numbers.singular, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicMasculineOs, "starting": "τον", "ending": "ο", "form": numbers.singular, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "ε", "form": numbers.singular, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "οι", "ending": "οι", "form": numbers.plural, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "των", "ending": "ων", "form": numbers.plural, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicMasculineOs, "starting": "τους", "ending": "ους", "form": numbers.plural, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "οι", "form": numbers.plural, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false }, 
    { "category": c.parisyllabicMasculineIs, "starting": "ο", "ending": "ής", "form": numbers.singular, "case": cases.nominative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "του", "ending": "ή", "form": numbers.singular, "case": cases.genitive, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "τον", "ending": "ή", "form": numbers.singular, "case": cases.accusative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "ή", "form": numbers.singular, "case": cases.vocative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "οι", "ending": "ές", "form": numbers.plural, "case": cases.nominative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.oxytone, "moveToLast": true },
    { "category": c.parisyllabicMasculineIs, "starting": "τους", "ending": "ές", "form": numbers.plural, "case": cases.accusative, "accent": accents.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "ές", "form": numbers.plural, "case": cases.vocative, "accent": accents.oxytone, "moveToLast": false }, 
    { "category": c.parisyllabicMasculineIs, "starting": "ο", "ending": "ης", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "του", "ending": "η", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "τον", "ending": "η", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "η", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "οι", "ending": "ες", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicMasculineIs, "starting": "τους", "ending": "ες", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "ες", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ό", "form": numbers.singular, "case": cases.nominative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "του", "ending": "ού", "form": numbers.singular, "case": cases.genitive, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ό", "form": numbers.singular, "case": cases.accusative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ό", "form": numbers.singular, "case": cases.vocative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "ά", "form": numbers.plural, "case": cases.nominative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "ά", "form": numbers.plural, "case": cases.accusative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ά", "form": numbers.plural, "case": cases.vocative, "accent": accents.oxytone, "moveAccent": false }, 
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "του", "ending": "ου", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ο", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "των", "ending": "ων", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "α", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": numbers.singular, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "του", "ending": "ου", "form": numbers.singular, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": numbers.singular, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ο", "form": numbers.singular, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": numbers.plural, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "των", "ending": "ων", "form": numbers.plural, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": numbers.plural, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "α", "form": numbers.plural, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "του", "ending": "ους", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "ος", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": true },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "η", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": numbers.singular, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "του", "ending": "ους", "form": numbers.singular, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": numbers.singular, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "ος", "form": numbers.singular, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": numbers.plural, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": false, "moveToLast": true },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": numbers.plural, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "η", "form": numbers.plural, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicFeminineOs, "starting": "η", "ending": "ός", "form": numbers.singular, "case": cases.nominative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "της", "ending": "ού", "form": numbers.singular, "case": cases.genitive, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "την", "ending": "ό", "form": numbers.singular, "case": cases.accusative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "έ", "form": numbers.singular, "case": cases.vocative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "οι", "ending": "οί", "form": numbers.plural, "case": cases.nominative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "των", "ending": "ών", "form": numbers.plural, "case": cases.genitive, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "τις", "ending": "ούς", "form": numbers.plural, "case": cases.accusative, "accent": accents.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "οί", "form": numbers.plural, "case": cases.vocative, "accent": accents.oxytone, "moveAccent": false }, 
    { "category": c.parisyllabicFeminineOs, "starting": "η", "ending": "ος", "form": numbers.singular, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "της", "ending": "ου", "form": numbers.singular, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "τη", "ending": "ο", "form": numbers.singular, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "ε", "form": numbers.singular, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "οι", "ending": "οι", "form": numbers.plural, "case": cases.nominative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "των", "ending": "ων", "form": numbers.plural, "case": cases.genitive, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "τις", "ending": "ους", "form": numbers.plural, "case": cases.accusative, "accent": accents.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "οι", "form": numbers.plural, "case": cases.vocative, "accent": accents.paroxytone, "moveAccent": false }, 
    { "category": c.parisyllabicFeminineOs, "starting": "η", "ending": "ος", "form": numbers.singular, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "της", "ending": "ου", "form": numbers.singular, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicFeminineOs, "starting": "την", "ending": "ο", "form": numbers.singular, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "ε", "form": numbers.singular, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "οι", "ending": "οι", "form": numbers.plural, "case": cases.nominative, "accent": accents.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "των", "ending": "ων", "form": numbers.plural, "case": cases.genitive, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicFeminineOs, "starting": "τις", "ending": "ους", "form": numbers.plural, "case": cases.accusative, "accent": accents.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "οι", "form": numbers.plural, "case": cases.vocative, "accent": accents.proparoxytone, "moveAccent": false },     
    { "category": c.isIaIAdjective, "starting": "ο", "ending": "ής", "form": numbers.singular, "case": cases.nominative, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ή", "form": numbers.singular, "case": cases.genitive, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ιού", "form": numbers.singular, "case": cases.genitive, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "τον", "ending": "ή", "form": numbers.singular, "case": cases.accusative, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ή", "form": numbers.singular, "case": cases.vocative, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "οι", "ending": "ιοί", "form": numbers.plural, "case": cases.nominative, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "των", "ending": "ιών", "form": numbers.plural, "case": cases.genitive, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "τους", "ending": "ιούς", "form": numbers.plural, "case": cases.accusative, "gender": genders.masculine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιοί", "form": numbers.plural, "case": cases.vocative, "gender": genders.masculine }, 
    { "category": c.isIaIAdjective, "starting": "η", "ending": "ιά", "form": numbers.singular, "case": cases.nominative, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "της", "ending": "ιάς", "form": numbers.singular, "case": cases.genitive, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "την", "ending": "ιά", "form": numbers.singular, "case": cases.accusative, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιά", "form": numbers.singular, "case": cases.vocative, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "οι", "ending": "ιές", "form": numbers.plural, "case": cases.nominative, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "των", "ending": "ιών", "form": numbers.plural, "case": cases.genitive, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "τις", "ending": "ιές", "form": numbers.plural, "case": cases.accusative, "gender": genders.feminine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιές", "form": numbers.plural, "case": cases.vocative, "gender": genders.feminine }, 
    { "category": c.isIaIAdjective, "starting": "το", "ending": "ί", "form": numbers.singular, "case": cases.nominative, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ί", "form": numbers.singular, "case": cases.genitive, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ιού", "form": numbers.singular, "case": cases.genitive, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "το", "ending": "ί", "form": numbers.singular, "case": cases.accusative, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ί", "form": numbers.singular, "case": cases.vocative, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "τα", "ending": "ιά", "form": numbers.plural, "case": cases.nominative, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "των", "ending": "ιών", "form": numbers.plural, "case": cases.genitive, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "τα", "ending": "ιά", "form": numbers.plural, "case": cases.accusative, "gender": genders.neuter },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιά", "form": numbers.plural, "case": cases.vocative, "gender": genders.neuter },
];

export default answers;