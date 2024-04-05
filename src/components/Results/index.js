import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header'
// import ScoreContext from '../../ReactContext'

const Results = ({location}) => {
  const {score} = location.state
  //   const {completedTime} = props

  return (
    <>
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
              <p className="para">Congrats! You completed the assessment.</p>
              <p className="time-taken">Time Taken: 00</p>
              <p className="score">Your Score: {score}</p>
              <Link to="/assess/questions">
                <button type="button" className="reattempt-btn">
                  Reattempt
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-container">
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
      </div> */}
    </>
  )
}
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
