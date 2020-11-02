import { Box } from 'grommet'
import React, { useEffect, useState } from 'react'
import questionData from '../data/Apprentice_TandemFor400_Data.json'
import ResultsFrame from './ResultsFrame'
import Question from './Question'

/**
 * Renders a component that renders frames of questions, 
 * along with an intro and results. 
 * After it's mounted, the component grabs the question 
 * data located in /data. It will then parse and prepare 
 * the JSON data to be consumed by the Question 
 * components
 */
export default function Game({ users, currentUser, setUsers }) {
    const [score, setScore] = useState(0)
    const [frames, setFrames] = useState([])
    const [currentFrame, setCurrentFrame] = useState(0)

    // Prepares a new round of questions
    function loadQuestions() {
        const questions = questionData
            .sort(() => 0.5 - Math.random())
            .slice(0, 10)
            .map((question, i) => {
                const answers = [...question.incorrect, question.correct].sort(() => 0.5 - Math.random())
                return (
                    <Question
                        answers={answers}
                        correct={question.correct} 
                        question={question.question}
                        position={i}
                        setCurrentFrame={setCurrentFrame}
                        score={score}
                        setScore={setScore}
                    />)
            })

        setFrames([
            ...questions,
            <ResultsFrame
                score={score}
                resetGame={resetGame}
                setUsers={setUsers}
                users={users}
                currentUser={currentUser}
            />
        ])

        console.log(frames)
    }

    function resetGame() {
        setScore(0)
        setCurrentFrame(0)
        loadQuestions()
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
            {frames[currentFrame]}
        </Box>
    )
}

