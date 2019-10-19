import posts from '../data/posts'
import {combineReducers} from 'redux'

const comment = (state={}, action) => {
  switch(action.type){
    case 'ADD_COMMENT': 
      if(!state[action.postId]){
        return {...state, [action.postId]: [action.comment]}
      }
      else{
        return {...state, [action.postId]: [...state[action.postId], action.comment]}
      }
    default: return state
  }
}

const post = (state=posts, action) => {
  switch(action.type){
    case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case 'ADD_POST': return [action.post, ...state]
    default: return state
  }
}

const rootReducer = combineReducers({comment, post})

export default rootReducer