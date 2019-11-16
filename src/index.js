import React from 'react';
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {HashRouter as Router} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from "./Components/App"
import thunk from 'redux-thunk'
// import {database} from './database/config'

const store = createStore(rootReducer, {posts: [], comments: {} },applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'))