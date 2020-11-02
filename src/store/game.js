const SET_SCORE = 'andersjbe/trivia/SET_SCORE'

export function setScore(score) {
    return {
        score,
        type: SET_SCORE
    }
}

export default function reducer(state = {score: 0}, action) {
    switch (action.type) {
        case SET_SCORE:
            return { ...state, score: action.score }
        default:
            return { ...state }
    }
}