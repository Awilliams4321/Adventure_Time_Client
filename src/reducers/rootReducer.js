import { combineReducers } from 'redux'
import {trailsReducer } from './trailsReducer'
import {favoritesReducer } from './favoritesReducer'


export const rootReducer = combineReducers({
    trails: trailsReducer,
    favorites: favoritesReducer
})