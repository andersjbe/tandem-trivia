import { Box, Button, RadioButtonGroup, Heading, Text } from 'grommet'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setScore } from '../store/game'

export default function Question(props) {
    const { score } = useSelector(state => state.game)
    const dispatch = useDispatch()
    const { question,
        answers,
        correct,
        position,
        setCurrentFrame } = props

    const [answered, setAnswered] = useState(false)
    const [answer, setAnswer] = useState('')

    const submitAnswer = () => {
        console.log('submitting')
        if (answer === correct) {
            dispatch(setScore(score + 100))

        }

        setAnswered(true)
    }

    return (
        <>
            <Heading level={4}>{question}</Heading>

            {
                answered ?
                    answers.map((answer, i) => (
                        <Box
                            background={answer === correct ? '#1c1' : '#fff'}
                            pad='xsmall'
                            round='small'
                        >
                            <Text textAlign='start' key={1000 + i}>{answer}</Text>
                        </Box>
                    ))
                    :
                    <RadioButtonGroup
                        name='answers'
                        options={answers}
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                    />
            }

            {
                answered ?
                    <Button
                        color='#ff694e'
                        margin='small'
                        label='Next'
                        onClick={() => {
                            setCurrentFrame(position + 1)
                            setAnswered(false)
                            setAnswer('')
                        }}
                    /> :
                    <Button
                        color='#ff694e'
                        margin='small'
                        label='Submit'
                        onClick={() => submitAnswer()}
                    />
            }
        </>
    )

}