import {
    createStore, combineReducers, compose
} from 'redux'
import game from './game'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    game
})

export default function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        composeEnhancers()
    )
}