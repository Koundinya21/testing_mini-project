import './index.css'
// import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import DetailsContext from '../../ReactContext'
import TimeUp from '../TimeUp'

// import ScoreContext from '../../ReactContext'

const Results = ({location}) => {
  const {score} = location.state
  //   const {completedTime} = props

  return (
    <DetailsContext.Consumer>
      {value => {
        const {elapsedTimeInSeconds, isTimerRunning} = value
        const hours = Math.floor(elapsedTimeInSeconds / 3600)
        const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60)
        const seconds = Math.floor(elapsedTimeInSeconds % 60)
        const disHr = hours > 9 ? hours : `0${hours}`
        const disMin = minutes > 9 ? minutes : `0${minutes}`
        const disSec = seconds > 9 ? seconds : `0${seconds}`
        const formattedTime = `${disHr}:${disMin}:${disSec}`

        return isTimerRunning ? (
          <div>
            <Header />
            <div className="bg-container">
              <div className="component">
                <div className="result-card-container">
                  <div className="bg-card">
                    <img
                      src="https://res.cloudinary.com/dowxofd2k/image/upload/v1711890610/Asset_2_1_c8uttm.png"
                      alt="submit"
                      className="img-submit"
                    />
                    <p className="para">
                      Congrats! You completed the assessment
                    </p>
                    <p className="time-taken">Time Taken: {formattedTime}</p>
                    <p className="score">Your score: {score}</p>
                    <Link to="/assessment">
                      <button type="button" className="reattempt-btn">
                        Reattempt
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <TimeUp />
        )
      }}
    </DetailsContext.Consumer>
  )
}

/* <div className="bg-container">
        <div className="component">
          <div className="results-card_container">
            <img
              src="https://res.cloudinary.com/dowxofd2k/image/upload/v1711890610/Asset_2_1_c8uttm.png"
              alt="submit"
              className="img-submit"
            />
            <p className="para">Congrats! You completed the assessment.</p>
            <p className="time-taken">Time Taken: 000000</p>
            <p className="score">Your Score: {score}</p>

            <Link to="/assess/questions">
              <button type="button" className="reattempt-btn">
                Reattempt
              </button>
            </Link>
          </div>
        </div>
      </div> */

//   <ScoreContext.Consumer>
//     {value => {
//       const {score} = value
//       return (
//         <>
//           <Header />
//           <div className="bg-container">
//             <div className="bg-card">
//               <div className="results-card_container">
//                 <img
//                   src="https://res.cloudinary.com/dowxofd2k/image/upload/v1711890610/Asset_2_1_c8uttm.png"
//                   alt="submit"
//                   className="img-submit"
//                 />
//                 <p className="para">Congrats! You completed the assessment.</p>
//                 <p className="time-taken">Time Taken: 0000</p>
//                 <p className="score">Your Score: {score}</p>
//                 <Link to="/assess/questions">
//                   <button type="button" className="reattempt-btn">
//                     Reattempt
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </>
//       )
//     }}
//   </ScoreContext.Consumer>

export default Results
