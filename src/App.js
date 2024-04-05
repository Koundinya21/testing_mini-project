import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
// import ScoreContext from './ReactContext/index'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Assessment from './components/Assessment'
import Results from './components/Results'
import NotFound from './components/NotFound'
import TimeUp from './components/TimeUp'

class App extends Component {
  //   state = {score: 0}

  //   updatingScore = () => {
  //     this.setState(prevScore => ({
  //       score: prevScore.score + 1,
  //     }))
  //   }

  //   render() {
  //     const {score} = this.state
  //     return (
  //       <ScoreContext.Provider value={{score, updatingScore: this.updatingScore}}>
  //         <Switch>
  //           <Route exact path="/login" component={LoginForm} />
  //           <ProtectedRoute exact path="/" component={Home} />
  //           <ProtectedRoute
  //             exact
  //             path="/assess/questions"
  //             component={Assessment}
  //           />
  //           <ProtectedRoute exact path="/results" component={Results} />
  //           <ProtectedRoute exact path="/time-up" component={TimeUp} />
  //           <Route path="/bad-path" component={NotFound} />
  //           <Redirect to="/bad-path" />
  //         </Switch>
  //       </ScoreContext.Provider>
  //     )
  //   }
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/assess/questions" component={Assessment} />
        <ProtectedRoute exact path="/results" component={Results} />
        <ProtectedRoute exact path="/time-up" component={TimeUp} />
        <Route path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    )
  }
}

export default App
