import React, { useState } from "react";
import Article from "../components/article.component";
import questions from "../resources/questions";
import answers from "../resources/answers";
import { BUTTON_TEXTS, BUTTON_TYPES } from "../resources/button-types";
import Button from "../components/button.component";
import { CATEGORY_TYPES } from "../resources/enum-types"
import DialogModal from "../components/modal.component";

const Quiz = ({title}) => {
    const [word, setWord] = useState({})
    const [question, setQuestion] = useState({})
    const [answer, setAnswer] = useState('')
    const [rightAnswer, setRightAnswer] = useState(false)
    const [answered, setAnswered] = useState(false)
    const [modal, setModal] = useState(false)
    const [comboAnswers, setComboAnswers] = useState([])
    const getRandomItem = (list) => list[Math.floor((Math.random() * list.length))]
    const newWord = () => {
        const currentWord = getRandomItem(questions)
        setWord(currentWord)
        getAnswers(currentWord)
        setAnswered(false)
    }
    const checkAnswer = () => {
        setAnswered(true)
        setRightAnswer(question.ending === answer)
    }
    const showHelp = () => {
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
        const newAnswers = answers.filter((answer) => 
            answer.category === currentQuestion.category && 
            answer.accent === currentQuestion.accent);
        setComboAnswers(newAnswers);
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
                            <li>{CATEGORY_TYPES[word.category]}</li>
                            <li className="cap">{question?.form}</li>
                            <li className="cap">{question?.case}</li>
                            <li className="cap">{question?.accent}</li>
                        </ul>
                    </details>
                    <DialogModal openModal={modal} closeModal={closeHelp}>
                        <h3>{CATEGORY_TYPES[word.category]}</h3>
                        <figure>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Case</th>
                                        <th>Form</th>
                                        <th>Declension</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        comboAnswers.map((answer) => {
                                            return (
                                            <tr>
                                                <td>{answer.case}</td>
                                                <td>{answer.form}</td>
                                                <td>
                                                    <span className="attenuated">{answer.starting}</span>
                                                    {` ${word?.element}`}
                                                    <span className="attenuated">{answer.ending}</span></td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                            <figcaption className="left">{word?.translation}</figcaption>
                        </figure>
                    </DialogModal>
                    <aside>
                        <br/>
                        <select onChange={handleAnswer} value="-1">
                            <option key="-1" value="-1">Select answer:</option>
                            {
                                comboAnswers.map((answer, index) => {
                                    return (
                                        <option key={index} value={answer.ending}>
                                            {`Ending: ${answer.ending}`}
                                        </option>)
                                })
                            }
                        </select>
                        {answered && <p>The answer is {answerResult}</p>}
                    </aside>
                    <Button buttonProps={showProps} />
                    <h3>
                        <span className="attenuated">{question?.starting}</span> {word?.element}
                        <span className="attenuated">{answer}</span>
                    </h3>
                    <p>
                        <cite>{word?.translation}</cite>
                    </p>
                </section>
            }
            {!initialized && <Button buttonProps={beginProps} />}
            {initialized && <Button buttonProps={nextProps} />}
            {initialized && <Button buttonProps={checkProps}/>} 
        </Article>
    )
}

export default Quiz;