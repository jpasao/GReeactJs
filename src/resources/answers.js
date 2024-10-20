import * as c from "./constants";

const answers = [
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ί", "form": c.singular, "case": c.nominative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "του", "ending": "ιού", "form": c.singular, "case": c.genitive, "accent": c.oxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ί", "form": c.singular, "case": c.accusative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ί", "form": c.singular, "case": c.vocative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ιά", "form": c.plural, "case": c.nominative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "των", "ending": "ιών", "form": c.plural, "case": c.genitive, "accent": c.oxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ιά", "form": c.plural, "case": c.accusative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ιά", "form": c.plural, "case": c.vocative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "του", "ending": "ιού", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ι", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ια", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "των", "ending": "ιών", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "τα", "ending": "ια", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ια", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": c.singular, "case": c.nominative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "του", "ending": "ιού", "form": c.singular, "case": c.genitive, "accent": c.proparoxytone, "moveToLast": true },
    { "category": c.parisyllabicNeuter, "starting": "το", "ending": "ι", "form": c.singular, "case": c.accusative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuter, "starting": "", "ending": "ι", "form": c.singular, "case": c.vocative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.secondConjugationVerb, "starting": "εγώ", "ending": "ώ", "form": c.singular, "person": c.first, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "εγώ", "ending": "άω", "form": c.singular, "person": c.first, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "εσύ", "ending": "άς", "form": c.singular, "person": c.second, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "αυτός", "ending": "ά", "form": c.singular, "person": c.third, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "αυτός", "ending": "άει", "form": c.singular, "person": c.third, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "εμείς", "ending": "ούμε", "form": c.plural, "person": c.first, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "εμείς", "ending": "άμε", "form": c.plural, "person": c.first, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "εσείς", "ending": "άτε", "form": c.plural, "person": c.second, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "αυτοί", "ending": "ούν", "form": c.plural, "person": c.third, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "αυτοί", "ending": "άν", "form": c.plural, "person": c.third, "class": c.first },
    { "category": c.secondConjugationVerb, "starting": "εγώ", "ending": "ώ", "form": c.singular, "person": c.first, "class": c.second },
    { "category": c.secondConjugationVerb, "starting": "εσύ", "ending": "είς", "form": c.singular, "person": c.second, "class": c.second },
    { "category": c.secondConjugationVerb, "starting": "αυτός", "ending": "εί", "form": c.singular, "person": c.third, "class": c.second },
    { "category": c.secondConjugationVerb, "starting": "εμείς", "ending": "ούμε", "form": c.plural, "person": c.first, "class": c.second },
    { "category": c.secondConjugationVerb, "starting": "εσείς", "ending": "είτε", "form": c.plural, "person": c.second, "class": c.second },
    { "category": c.secondConjugationVerb, "starting": "αυτοί", "ending": "ούν", "form": c.plural, "person": c.third, "class": c.second },
    { "category": c.parisyllabicFeminineI, "starting": "η", "ending": "ή", "form": c.singular, "case": c.nominative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "της", "ending": "ής", "form": c.singular, "case": c.genitive, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "τη", "ending": "ή", "form": c.singular, "case": c.accusative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ή", "form": c.singular, "case": c.vocative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "οι", "ending": "ές", "form": c.plural, "case": c.nominative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.oxytone, "moveToLast": true },
    { "category": c.parisyllabicFeminineI, "starting": "τις", "ending": "ές", "form": c.plural, "case": c.accusative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ές", "form": c.plural, "case": c.vocative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "η", "ending": "η", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "της", "ending": "ης", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "την", "ending": "η", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "η", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "οι", "ending": "ες", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicFeminineI, "starting": "τις", "ending": "ες", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ες", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "η", "ending": "η", "form": c.singular, "case": c.nominative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "της", "ending": "ης", "form": c.singular, "case": c.genitive, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "τη", "ending": "η", "form": c.singular, "case": c.accusative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "η", "form": c.singular, "case": c.vocative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "οι", "ending": "ες", "form": c.plural, "case": c.nominative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "τις", "ending": "ες", "form": c.plural, "case": c.accusative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicFeminineI, "starting": "", "ending": "ες", "form": c.plural, "case": c.vocative, "accent": c.proparoxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineOs, "starting": "ο", "ending": "ός", "form": c.singular, "case": c.nominative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "του", "ending": "ού", "form": c.singular, "case": c.genitive, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τον", "ending": "ό", "form": c.singular, "case": c.accusative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "έ", "form": c.singular, "case": c.vocative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "οι", "ending": "οί", "form": c.plural, "case": c.nominative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τους", "ending": "ούς", "form": c.plural, "case": c.accusative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "οί", "form": c.plural, "case": c.vocative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "ο", "ending": "ος", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "του", "ending": "ου", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τον", "ending": "ο", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "ε", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "οι", "ending": "οι", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "των", "ending": "ων", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "τους", "ending": "ους", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "οι", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false }, 
    { "category": c.parisyllabicMasculineOs, "starting": "ο", "ending": "ος", "form": c.singular, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "του", "ending": "ου", "form": c.singular, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicMasculineOs, "starting": "τον", "ending": "ο", "form": c.singular, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "ε", "form": c.singular, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "οι", "ending": "οι", "form": c.plural, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicMasculineOs, "starting": "των", "ending": "ων", "form": c.plural, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicMasculineOs, "starting": "τους", "ending": "ους", "form": c.plural, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicMasculineOs, "starting": "", "ending": "οι", "form": c.plural, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false }, 
    { "category": c.parisyllabicMasculineIs, "starting": "ο", "ending": "ής", "form": c.singular, "case": c.nominative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "του", "ending": "ή", "form": c.singular, "case": c.genitive, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "τον", "ending": "ή", "form": c.singular, "case": c.accusative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "ή", "form": c.singular, "case": c.vocative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "οι", "ending": "ές", "form": c.plural, "case": c.nominative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.oxytone, "moveToLast": true },
    { "category": c.parisyllabicMasculineIs, "starting": "τους", "ending": "ές", "form": c.plural, "case": c.accusative, "accent": c.oxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "ές", "form": c.plural, "case": c.vocative, "accent": c.oxytone, "moveToLast": false }, 
    { "category": c.parisyllabicMasculineIs, "starting": "ο", "ending": "ης", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "του", "ending": "η", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "τον", "ending": "η", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "η", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "οι", "ending": "ες", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveToLast": true },
    { "category": c.parisyllabicMasculineIs, "starting": "τους", "ending": "ες", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicMasculineIs, "starting": "", "ending": "ες", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveToLast": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ό", "form": c.singular, "case": c.nominative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "του", "ending": "ού", "form": c.singular, "case": c.genitive, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ό", "form": c.singular, "case": c.accusative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ό", "form": c.singular, "case": c.vocative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "ά", "form": c.plural, "case": c.nominative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "ά", "form": c.plural, "case": c.accusative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ά", "form": c.plural, "case": c.vocative, "accent": c.oxytone, "moveAccent": false }, 
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "του", "ending": "ου", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ο", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "των", "ending": "ων", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "α", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": c.singular, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "του", "ending": "ου", "form": c.singular, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicNeuterO, "starting": "το", "ending": "ο", "form": c.singular, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "ο", "form": c.singular, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": c.plural, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "των", "ending": "ων", "form": c.plural, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicNeuterO, "starting": "τα", "ending": "α", "form": c.plural, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterO, "starting": "", "ending": "α", "form": c.plural, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "του", "ending": "ους", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "ος", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false, "moveToLast": true },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "η", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": c.singular, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "του", "ending": "ους", "form": c.singular, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "το", "ending": "ος", "form": c.singular, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "ος", "form": c.singular, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": c.plural, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": false, "moveToLast": true },
    { "category": c.parisyllabicNeuterOs, "starting": "τα", "ending": "η", "form": c.plural, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicNeuterOs, "starting": "", "ending": "η", "form": c.plural, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": true, "moveToLast": false },
    { "category": c.parisyllabicFeminineOs, "starting": "η", "ending": "ός", "form": c.singular, "case": c.nominative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "της", "ending": "ού", "form": c.singular, "case": c.genitive, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "την", "ending": "ό", "form": c.singular, "case": c.accusative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "έ", "form": c.singular, "case": c.vocative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "οι", "ending": "οί", "form": c.plural, "case": c.nominative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "των", "ending": "ών", "form": c.plural, "case": c.genitive, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "τις", "ending": "ούς", "form": c.plural, "case": c.accusative, "accent": c.oxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "οί", "form": c.plural, "case": c.vocative, "accent": c.oxytone, "moveAccent": false }, 
    { "category": c.parisyllabicFeminineOs, "starting": "η", "ending": "ος", "form": c.singular, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "της", "ending": "ου", "form": c.singular, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "τη", "ending": "ο", "form": c.singular, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "ε", "form": c.singular, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "οι", "ending": "οι", "form": c.plural, "case": c.nominative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "των", "ending": "ων", "form": c.plural, "case": c.genitive, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "τις", "ending": "ους", "form": c.plural, "case": c.accusative, "accent": c.paroxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "οι", "form": c.plural, "case": c.vocative, "accent": c.paroxytone, "moveAccent": false }, 
    { "category": c.parisyllabicFeminineOs, "starting": "η", "ending": "ος", "form": c.singular, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "της", "ending": "ου", "form": c.singular, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicFeminineOs, "starting": "την", "ending": "ο", "form": c.singular, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "ε", "form": c.singular, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "οι", "ending": "οι", "form": c.plural, "case": c.nominative, "accent": c.proparoxytone, "moveAccent": false },
    { "category": c.parisyllabicFeminineOs, "starting": "των", "ending": "ων", "form": c.plural, "case": c.genitive, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicFeminineOs, "starting": "τις", "ending": "ους", "form": c.plural, "case": c.accusative, "accent": c.proparoxytone, "moveAccent": true },
    { "category": c.parisyllabicFeminineOs, "starting": "", "ending": "οι", "form": c.plural, "case": c.vocative, "accent": c.proparoxytone, "moveAccent": false },     
    { "category": c.isIaIAdjective, "starting": "ο", "ending": "ής", "form": c.singular, "case": c.nominative, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ή", "form": c.singular, "case": c.genitive, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ιού", "form": c.singular, "case": c.genitive, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "τον", "ending": "ή", "form": c.singular, "case": c.accusative, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ή", "form": c.singular, "case": c.vocative, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "οι", "ending": "ιοί", "form": c.plural, "case": c.nominative, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "των", "ending": "ιών", "form": c.plural, "case": c.genitive, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "τους", "ending": "ιούς", "form": c.plural, "case": c.accusative, "gender": c.masculine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιοί", "form": c.plural, "case": c.vocative, "gender": c.masculine }, 
    { "category": c.isIaIAdjective, "starting": "η", "ending": "ιά", "form": c.singular, "case": c.nominative, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "της", "ending": "ιάς", "form": c.singular, "case": c.genitive, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "την", "ending": "ιά", "form": c.singular, "case": c.accusative, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιά", "form": c.singular, "case": c.vocative, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "οι", "ending": "ιές", "form": c.plural, "case": c.nominative, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "των", "ending": "ιών", "form": c.plural, "case": c.genitive, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "τις", "ending": "ιές", "form": c.plural, "case": c.accusative, "gender": c.feminine },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιές", "form": c.plural, "case": c.vocative, "gender": c.feminine }, 
    { "category": c.isIaIAdjective, "starting": "το", "ending": "ί", "form": c.singular, "case": c.nominative, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ί", "form": c.singular, "case": c.genitive, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "του", "ending": "ιού", "form": c.singular, "case": c.genitive, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "το", "ending": "ί", "form": c.singular, "case": c.accusative, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ί", "form": c.singular, "case": c.vocative, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "τα", "ending": "ιά", "form": c.plural, "case": c.nominative, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "των", "ending": "ιών", "form": c.plural, "case": c.genitive, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "τα", "ending": "ιά", "form": c.plural, "case": c.accusative, "gender": c.neuter },
    { "category": c.isIaIAdjective, "starting": "", "ending": "ιά", "form": c.plural, "case": c.vocative, "gender": c.neuter },
];

export default answers;