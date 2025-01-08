import React, { useState } from "react";
import Article from "../components/article.component";
import { questions, helpComments } from "../resources/questions";
import answers from "../resources/answers";
import { BUTTON_TEXTS, BUTTON_TYPES } from "../resources/button-types";
import Button from "../components/button.component";
import { CATEGORY_TYPES, GENDER_TYPE, CLASS_TYPE } from "../resources/enum-types"
import DialogModal from "../components/modal.component";
import { isIaIAdjective, secondConjugationVerb } from "../resources/constants";

const Quiz = ({title}) => {
    const [word, setWord] = useState({})
    const [question, setQuestion] = useState({})
    const [answer, setAnswer] = useState('')
    const [help, setHelp] = useState('')
    const [rightAnswer, setRightAnswer] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [modal, setModal] = useState(false)
    const [comboAnswers, setComboAnswers] = useState([])
    const [helpTable, setHelpTable] = useState([])
    const getRandomItem = (list) => list[Math.floor((Math.random() * list.length))]
    const accentedVocals = ['ά', 'έ', 'ί', 'ή', 'ό', 'ώ', 'ύ']
    const unaccentedVocals = ['α', 'ε', 'ι', 'η', 'ο', 'ω', 'υ']
    const moveAccentRight = (wordToModify) => {
        let unaccented = true, accented = false, modifiedWord = '';
        [...wordToModify].forEach(c => {
            let index = accentedVocals.indexOf(c.toLowerCase())
            if (unaccented) {
                if (index > -1) {
                    c = unaccentedVocals[index]
                    unaccented = false
                }
            } else if (accented === false) {
                index = unaccentedVocals.indexOf(c.toLowerCase())
                if (index > -1) {
                    c = accentedVocals[index]
                    accented = true
                }
            }
            modifiedWord = `${modifiedWord}${c.toLowerCase()}`
        })
        return modifiedWord
    }
    const moveAccentToLast = (wordToModify) => {
        let unaccentedWord = '', modifiedWord = '';
        [...wordToModify].forEach((c, i) => {
            let index = accentedVocals.indexOf(c.toLowerCase())
            if (index > -1) {
                c = unaccentedVocals[index]
            }
            unaccentedWord = `${unaccentedWord}${c.toLowerCase()}`
        })
        let lastUnaccented = [...unaccentedWord.matchAll(/[αειηοωυ;]/g)].pop().index;

        [...unaccentedWord].forEach((c, i) => {
            if (i === lastUnaccented) {
                const indexInVocals = unaccentedVocals.indexOf(c.toLowerCase())
                c = accentedVocals[indexInVocals]
            }
            modifiedWord = `${modifiedWord}${c.toLowerCase()}`
        })
        return modifiedWord
    }
    const newWord = () => {
        const currentWord = getRandomItem(questions)
        setWord(currentWord)
        getAnswers(currentWord)
        setAnswered(false)
        setAnswer('')
    }
    const checkAnswer = () => {
        setAnswered(true)
        setRightAnswer(question.ending === answer)
    }
    const showHelp = () => {
        const helpFound = helpComments.find((help) => help.category === word.category)
        setHelp(helpFound?.help)
        setModal(true)
    }
    const closeHelp = () => {
        setModal(false)
    }
    const beginProps = {
        type: BUTTON_TYPES.back,
        content: BUTTON_TEXTS.beginQuiz,
        clickHandle: newWord
    }
    const nextProps = {
        type: BUTTON_TYPES.back,
        content: BUTTON_TEXTS.nextQuestion,
        clickHandle: newWord
    }
    const checkProps = {
        type: `${BUTTON_TYPES.back} right`,
        content: BUTTON_TEXTS.checkAnswer,
        clickHandle: checkAnswer
    }
    const showProps = {
        type: `${BUTTON_TYPES.back}`,
        content: 'Show help',
        clickHandle: showHelp
    }
    const getAnswers = (currentQuestion) => {
        const filterByGender = currentQuestion.category === isIaIAdjective
        const filterByClass = currentQuestion.category === secondConjugationVerb

        let newAnswers;
        if (filterByGender) {
            newAnswers = answers.filter((answer) => {
                const genders = Object.keys(GENDER_TYPE).slice(1)
                const randomGender = GENDER_TYPE[genders[genders.length * Math.random() << 0]]
                return answer.category === currentQuestion.category &&
                    answer.gender === randomGender
            })
        } else if (filterByClass) {
            newAnswers = answers.filter((answer) => {
                const classes = Object.keys(CLASS_TYPE)
                const randomClass = CLASS_TYPE[classes[classes.length * Math.random() << 0]]
                return answer.category === currentQuestion.category &&
                    answer.class === randomClass
            })
        } else {
            newAnswers = answers.filter((answer) => 
                answer.category === currentQuestion.category &&
                answer.accent === currentQuestion.accent)
        }
        newAnswers.sort((a, b) => a.order - b.order)

        setHelpTable(newAnswers)
        const mappedOptions = newAnswers.map((answer) => {
            return { ending: answer.ending }
        })
        const uniqueOptions = mappedOptions.reduce((acc, current) => {
            const found = acc.find(item => item.ending === current.ending)
            return found 
                ? acc
                : acc.concat([current])
            }, []
        )
        setComboAnswers(uniqueOptions)
        const newQuestion = getRandomItem(newAnswers);
        setQuestion(newQuestion)
    }
    const handleAnswer = (event) => {
        setAnswer(event.target.value)
    }
    const initialized = word.element !== undefined;
    const answerResult = rightAnswer 
        ? <span className="rightAnswer">right</span>
        : <span className="wrongAnswer">wrong</span>;

    return (
        <Article title={title}>
            {
                initialized &&
                <section>
                    <details>
                        <summary>Check grammar details</summary>
                        <ul>
                            <li>{CATEGORY_TYPES[question?.category]}</li>
                            <li className="cap">{question?.form}</li>
                            {question?.case && <li className="cap">{question?.case}</li>}
                            <li className="cap">{question?.accent || question?.gender || question?.class}</li>
                        </ul>
                    </details>
                    <DialogModal openModal={modal} closeModal={closeHelp}>
                        <h3>{CATEGORY_TYPES[word.category]}</h3>
                        <figure>
                            <figcaption><h4>{word?.translation}</h4></figcaption>
                            <table style={{width:'100%'}}>
                                <thead>
                                    <tr>
                                        <th>Case</th>
                                        <th>Form</th>
                                        <th>Declension</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        helpTable.map((answer) => {
                                            const fullWord = `${word?.element}${answer.ending}`
                                            let modifiedWord = fullWord;
                                            if (answer.moveAccent !== undefined && answer.moveAccent === true) {
                                                modifiedWord = moveAccentRight(fullWord)
                                            }
                                            if (answer.moveToLast !== undefined && answer.moveToLast === true) {
                                                modifiedWord = moveAccentToLast(fullWord)
                                            }
                                            return (
                                            <tr>
                                                <td>{answer.case}</td>
                                                <td>{answer.form}</td>
                                                <td>
                                                    <span className="attenuated">{answer.starting}</span>
                                                    {` ${modifiedWord}`}
                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                            <br/>
                            <cite>{help}</cite>
                        </figure>
                        <br/>
                    </DialogModal>
                    <aside>
                        <br/>
                        <select onChange={handleAnswer} value="-1">
                            <option key="-1" value="-1">Select answer:</option>
                            {
                                comboAnswers.map((answer) => (
                                    <option value={answer.ending}>
                                        {`Ending: ${answer.ending}`}
                                    </option>
                                ))
                            }
                        </select>
                        {answered && <p>The answer is {answerResult}</p>}
                    </aside>
                    <Button buttonProps={showProps} />
                    <h3>
                        <span className="attenuated">{question?.starting}</span> {word?.element}
                        <span className="attenuated">{answer}</span>
                    </h3>
                    <h6>{word?.translation}</h6>
                </section>
            }
            {!initialized && <Button buttonProps={beginProps} />}
            {initialized && <Button buttonProps={nextProps} />}
            {initialized && <Button buttonProps={checkProps}/>} 
        </Article>
    )
}

export default Quiz;