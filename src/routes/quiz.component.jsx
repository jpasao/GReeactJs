import React, { useState } from "react";
import Article from "../components/article.component";
import questions from "../resources/questions";
import answers from "../resources/answers";
import { BUTTON_TEXTS, BUTTON_TYPES } from "../resources/button-types";
import Button from "../components/button.component";

const Quiz = ({title}) => {
    const [word, setWord] = useState({})
    const [question, setQuestion] = useState({})
    const [answer, setAnswer] = useState('')
    const [rightAnswer, setRightAnswer] = useState(false)
    const getRandomItem = (list) => list[Math.floor((Math.random() * list.length))]
    const setButtonTitle = () => {
        const {content, ...rest} = props
        const newContent = BUTTON_TEXTS.nextQuestion
        const newProps = { content: newContent, ...rest}
        setNextProps(newProps)
    }
    const newWord = () => {
        setButtonTitle()
        const currentWord = getRandomItem(questions)
        setWord(currentWord)
        getAnswers(currentWord)
    }
    const checkAnswer = () => {
        setRightAnswer(question.ending === answer)
    }
    const props = {
        type: BUTTON_TYPES.back,
        content: BUTTON_TEXTS.beginQuiz,
        clickHandle: newWord
    }
    const checkProps = {
        type: BUTTON_TYPES.back,
        content: BUTTON_TEXTS.checkAnswer,
        clickHandle: checkAnswer
    }
    const [nextProps, setNextProps] = useState(props)
    const [comboAnswers, setComboAnswers] = useState([])
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

    return (
        <Article title={title}>   
            <blockquote>
                {question?.starting} {word?.element}{answer}
                <p><cite>{word?.translation}</cite></p>          
                <aside>
                    <p>
                        <select onChange={handleAnswer}>
                            <option value="0">Select an answer</option>
                            {
                                comboAnswers.map((answer, index) => {
                                    const valueShown = `Starting: ${answer.starting} | Ending: ${answer.ending} | Form: ${answer.form} | Case: ${answer.case} | Accent: ${answer.accent}`;
                                    return (
                                        <option 
                                            key={`${answer.starting}${index}`} 
                                            value={answer.ending}>
                                                {valueShown}
                                        </option>)
                                })
                            }
                        </select>
                    </p>
                </aside>
            </blockquote>
            <Button buttonProps={nextProps} />
            <Button buttonProps={checkProps} />
            <p>
            {
                rightAnswer ? 'right' : 'wrong'
            }               
            </p>
 
        </Article>
    )
}

export default Quiz;