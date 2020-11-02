import { Button, Heading, List } from 'grommet'
import React, { useEffect, useState } from 'react'

export default function ResultsFrame({ score, resetGame, users, setUsers, currentUser }) {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        //if the current user already has a score and it's less than the current score, set the user to the current score
        if (users[currentUser]) {
            if (users[currentUser] < score) {
                users[currentUser] = score
                window.localStorage.setItem('andersjbe/trivia', JSON.stringify({ users, currentUser }))
                setUsers(users)
            }
        // If this is the first time a user has finished a game, just set their score into localStorage
        } else {
            users[currentUser] = score
            window.localStorage.setItem('andersjbe/trivia', JSON.stringify({ users, currentUser }))
            setUsers(users)
        }

        const leaders = Object.entries(users)
            // Sorts the users by their score
            .sort((a, b) => {
                if (a[1] < b[1]) {
                    return -1
                } else if (a[1] > b[1]) {
                    return 1
                } else {
                    return 0
                }
            })
            // Grabs the top 5 scores
            .slice(0, 5)
            // Then converts it to an object so it can be used to render a list
            .map(arr => {
                return { username: arr[0], userScore: arr[1] }
            })
        
        setLeaderboard([...leaders])
    }, [users, currentUser, score, setUsers])

    return (
        <>
            <Heading level={2}>{`Your score: ${score}`}</Heading>
            <List 
                primaryKey='username'
                secondaryKey='userScore'
                data={[...leaderboard]}
            />
            <Button 
                label='Go Again?'
                onClick={() => resetGame()}
            />
        </>
    )
}