import React, {Component} from 'react'
import MoodBoard from './MoodBoard'
import AddPhoto from './AddPhoto'
import Show from './Show'
import {Route, Link} from 'react-router-dom'

class Main extends Component {

  state = { loading: true }

  componentDidMount(){
    this.props.startLoadingPosts()
      .then( () => {
        this.setState({ loading: false })
      })
      this.props.startLoadingComments()
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

              <Route path='/AddPhoto' render={({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>)}/>

              <Route exact path='/show/:id' render={(params) => (
                <Show loading={this.state.loading}{...this.props} {...params}/>)}/>
                
            </div>
  }
}

export default Main