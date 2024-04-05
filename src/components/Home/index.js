import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

// class Home extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <div className="bottom-container">
//           <div className="home-container">
//             <div className="card-container-home">
//               <h1 className="heading">Instructions</h1>
//               <ol className="list list-item-part">
//                 <li>
//                   <span className="list-item">Total Questions:</span> 10
//                 </li>
//                 <li>
//                   <span className="list-item">Types of Questions:</span> MCQs
//                 </li>
//                 <li>
//                   <span className="list-item">Duration:</span> 10 Mins
//                 </li>
//                 <li>
//                   <span className="list-item">Marking Scheme:</span> Every
//                   Correct response, get 1 mark
//                 </li>
//                 <li>
//                   All the progress will be lost, if you reload during the
//                   assessment
//                 </li>
//               </ol>
//               <Link to="/assess/questions">
//                 <button type="button" className="start-assess-btn">
//                   Start Assessment
//                 </button>
//               </Link>
//             </div>
//             <div className="img-container">
//               <img
//                 src="https://res.cloudinary.com/dowxofd2k/image/upload/v1706331677/i1bzcj9rhmeysl5j2ac0.svg"
//                 alt="assessment"
//                 className="home-icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-components-container">
            <div className="card-component">
              <h1 className="instruction">Instructions </h1>
              <ol className="list list-item-part">
                <li>
                  <span className="list-item">Total Questions:</span> 10
                </li>
                <li>
                  <span className="list-item">Types of Questions:</span> MCQs
                </li>
                <li>
                  <span className="lis-item">Duration:</span> 10 Mins
                </li>
                <li>
                  <span className="list-item">Duration:</span> 10 Mins
                </li>
                <li>
                  <span className="list-item">Marking Scheme:</span> Every
                  Correct response, get 1 mark
                </li>
                <li>
                  All the progress will be lost, if you reload during the
                  assessment
                </li>
              </ol>
              <Link to="/assess/questions">
                <button type="button" className="start-assess-btn">
                  Start Assessment
                </button>
              </Link>
            </div>
            <img
              src="https://res.cloudinary.com/dowxofd2k/image/upload/v1706331677/i1bzcj9rhmeysl5j2ac0.svg"
              alt="assessment"
              className="home-icon"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
