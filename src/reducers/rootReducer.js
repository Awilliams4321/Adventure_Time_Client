import { combineReducers } from 'redux'
import {trailsReducer } from './trailsReducer'

export const rootReducer = combineReducers({
    trails: trailsReducer
})