import { Box, Meter } from 'grommet'
import React, { useState } from 'react'
import questionData from '../data/Apprentice_TandemFor400_Data.json'

export default function Game() {
    const [score, setScore] = useState(0)
    const [frames, setFrames] = useState([])
    const [currentFrame, setCurrentFrame] = useState(0)

    // Prepares a new round of questions
    function loadQuestions() {
        const questions = questionData
            .sort(() => 0.5 - Math.random())
            .slice(0, 10)
            .map(question => {
                answers = [...question.incorrect, question.correct].sort(() => 0.5 - Math.random())
                return (<Question answers={answers} correct={correct} question={question} />)
            })

        setFrames([
            <IntroFrame />, 
            ...questions, 
            ResultsFrame
        ])
    }

    useEffect(() => {
        loadQuestions()
    }, [])

    return (
        <Box
            align='center'
            alignSelf='center'
            margin='small'
            padding='small'
        >
            

        </Box>
    )
}

function IntroFrame() {

}

function ResultsFrame() {

}