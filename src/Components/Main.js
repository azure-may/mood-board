import React, {Component} from 'react'
import MoodBoard from './MoodBoard'
import AddPhoto from './AddPhoto'
import Show from './Show'
import {Route, Link} from 'react-router-dom'

class Main extends Component {
  componentDidMount(){
  }
  render () {
    return  <div>
              <h1>
                <Link to='/'>Mood Board</Link>
              </h1>
              <Route exact path='/' render={() => (
                <div>
                  <MoodBoard {...this.props}/>
                </div>
              )}/>
              <Route exact path='/add-photo' render={() => (<AddPhoto {...this.props}/>)}/>
              <Route exact path='/show/:id' render={(params) => (<Show {...this.props} {...params}/>)}/>
            </div>
  }
}

export default Main