import {connect} from "react-redux"
import Main from './Main'
import * as actions from '../redux/actions'
import {bindActionCreators} from "redux"
import {withRouter} from 'react-router'

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}

function mapStateToProps(state){
  return {
    posts: state
  }
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App