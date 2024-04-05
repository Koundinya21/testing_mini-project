// import {Component} from 'react'
// import {withRouter} from 'react-router-dom'
// // import QuestionsBtn from '../QuestionsBtn'
// import './index.css'

// class Timer extends Component {
//   state = {
//     isTimerRunning: true,
//     timerMinutes: 10,
//     timeElapsedInSeconds: 0,
//   }

//   componentDidMount() {
//     this.tick()
//   }

//   componentWillUnmount() {
//     this.clearTimeInterval()
//   }

//   clearTimeInterval = () => {
//     clearInterval(this.timerId)
//   }

//   //   ClickSubmitBtn = () => {
//   //     clearInterval(this.timerId)
//   //     console.log('Timmer Cleared')
//   //     const {history} = this.props
//   //     history.replace('/results')
//   //     console.log(`${this.renderElapsedTime()}`)
//   //   }

//   IncrementInElapsedTime = () => {
//     const {timerMinutes, timeElapsedInSeconds} = this.state
//     const isTimeCompleted = timeElapsedInSeconds === timerMinutes * 60

//     if (isTimeCompleted) {
//       this.clearTimeInterval()
//       this.setState({isTimerRunning: false})
//     } else {
//       this.setState(prev => ({
//         timeElapsedInSeconds: prev.timeElapsedInSeconds + 1,
//       }))
//       //   console.log(timeElapsedInSeconds)
//     }
//   }

//   clickSubmitBtn = () => {
//     const {history, elapsedTime} = this.props
//     clearInterval(this.timerId)
//     history.replace('/results', {elapsedTime})
//   }

//   tick() {
//     this.timerId = setInterval(this.IncrementInElapsedTime, 1000)
//   }

//   renderElapsedTime = () => {
//     const {timeElapsedInSeconds} = this.state
//     const Minute = Math.floor(timeElapsedInSeconds / 60)
//     const seconds = Math.floor(timeElapsedInSeconds % 60)
//     const stringifiedMin = Minute > 9 ? Minute : `0${Minute}`
//     const stringifiedSec = seconds > 9 ? seconds : `0${seconds}`

//     return `00:${stringifiedMin}:${stringifiedSec}`
//   }

//   renderTime = () => {
//     const {timerMinutes, timeElapsedInSeconds} = this.state
//     const totalTimeRemainingSeconds = timerMinutes * 60 - timeElapsedInSeconds
//     const Minute = Math.floor(totalTimeRemainingSeconds / 60)
//     const seconds = Math.floor(totalTimeRemainingSeconds % 60)
//     const stringifiedMinutes = Minute > 9 ? Minute : `0${Minute}`
//     const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

//     return `${stringifiedMinutes}:${stringifiedSeconds}`
//   }

//   render() {
//     const {isTimerRunning} = this.state
//     console.log(`isTimerRunning: ${isTimerRunning}`)
//     const time = this.renderTime()
//     console.log(time)
//     // const elapsedTime = this.renderElapsedTime()
//     // console.log(elapsedTime)
//     // if (!isTimerRunning) {
//     //   return <Redirect to="/time-up" />
//     // }

//     return (
//       <div>
//         <div className="timer-container">
//           <h1 className="heading">Time Left</h1>
//           <p className="time">{time}</p>
//         </div>
//         {/* <div>
//           <div>
//             <div className="questions-btn-space">
//               <QuestionsBtn
//                 currentQuestion={currentQuestion}
//                 questionsData={questionsData}
//               />
//               <div className="btn-container">
//                 <button
//                   type="button"
//                   className="btn-submit"
//                   onClick={this.ClickSubmitBtn}
//                 >
//                   Submit Assessment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     )
//   }
// }

// export default withRouter(Timer)

import {Component} from 'react'

import './index.css'
// import Results from '../Results'

class Timer extends Component {
  state = {
    ElapsedTimeInSeconds: 0,
    timerMinutes: 10,
  }

  componentDidMount() {
    this.Tick()
  }

  componentWillUnmount() {
    this.clearInterval()
  }

  clearInterval = () => clearInterval(this.timerId)

  IncrementOfElapsedTime = () => {
    const {ElapsedTimeInSeconds, timerMinutes} = this.state
    const TimerCompleted = timerMinutes * 60 === ElapsedTimeInSeconds

    if (TimerCompleted) {
      this.clearInterval()
    } else {
      this.setState(prev => ({
        ElapsedTimeInSeconds: prev.ElapsedTimeInSeconds + 1,
      }))
    }
  }

  Tick = () => {
    this.timerId = setInterval(this.IncrementOfElapsedTime, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  RenderMinutesDisplayed = () => {
    const {ElapsedTimeInSeconds, timerMinutes} = this.state
    const timeRemaining = timerMinutes * 60 - ElapsedTimeInSeconds

    const Minutes = Math.floor(timeRemaining / 60)
    const Seconds = Math.floor(timeRemaining % 60)

    const stringifiedMin = Minutes > 9 ? Minutes : `0${Minutes}`
    const stringifiedSec = Seconds > 9 ? Seconds : `0${Seconds}`

    return `${stringifiedMin}:${stringifiedSec}`
  }

  RenderCompletedTime = () => {
    // this.props.onElapsedTimeChange(this.state.elapsedTimeInSeconds)

    const {ElapsedTimeInSeconds} = this.state
    const Minutes = Math.floor(ElapsedTimeInSeconds / 60)
    const Seconds = Math.floor(ElapsedTimeInSeconds % 60)

    const Min = Minutes > 9 ? Minutes : `0${Minutes}`
    const Sec = Seconds > 9 ? Seconds : `0${Seconds}`
    return `${Min}:${Sec}`
  }

  render() {
    // const clearedTime=null
    // if(!isTimerRunning){
    //     clearedTime=
    // }

    const completedTime = this.RenderCompletedTime()
    console.log(completedTime)
    return (
      <>
        <div className="timer-container">
          <h1 className="heading">Time Left</h1>
          <p className="time">{this.RenderMinutesDisplayed()}</p>
          {/* <button type="button" onClick={this.clearTimer}>
            click
          </button> */}
        </div>
      </>
    )
  }
}

export default Timer
