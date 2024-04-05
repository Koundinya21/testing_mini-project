// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

// import Header from '../Header'
// // import DefaultOption from '../DefaultOption'
// // import ImageOption from '../ImageOption'
// // import SingleOptions from '../SingleOptions'
// // import Timmer from '../Timer'
// import OptionsContent from '../Options'
// import './index.css'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// // const optionType = {
// //   initial: 'INITIAL',
// //   default: 'DEFAULT',
// //   image: 'IMAGE',
// //   singleSelect: 'SINGLE_SELECT',
// // }

// class Assessment extends Component {
//   state = {
//     questionData: [],
//     // optionsQuestionData: [],
//     apiStatus: apiStatusConstants.initial,
//     // apiOptionsType: optionType.Default,
//     activeQuestion: 0,
//   }

//   componentDidMount() {
//     this.requestingQuestions()
//   }

//   renderLoadingView = () => (
//     <div className="products-loader-container" data-testid="loader">
//       <Loader type="ThreeDots" color="#0b69ff" width="50" height="50" />
//     </div>
//   )

//   requestingQuestions = async () => {
//     this.setState({
//       apiStatus: apiStatusConstants.inProgress,
//     })

//     const jwtToken = Cookies.get('jwt_token')

//     const apiUrl = 'https://apis.ccbp.in/assess/questions'
//     const options = {
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//       method: 'GET',
//     }

//     const response = await fetch(apiUrl, options)

//     if (response.ok) {
//       const fetchedData = await response.json()
//       console.log(fetchedData)

//       const updatedData = fetchedData.questions.map(question => ({
//         id: question.id,
//         optionsType: question.options_type,
//         questionsText: question.question_text,
//         options: question.options.map(option => ({
//           imageUrl: option.image_url,
//           idOption: option.id,
//           text: option.text,
//           isCorrect: option.is_correct,
//         })),
//       }))
//       console.log(updatedData)

//       this.setState({
//         apiStatus: apiStatusConstants.success,
//         questionData: updatedData,
//       })
//     } else {
//       this.setState({apiStatus: apiStatusConstants.failure})
//     }
//   }

//   renderFailure = () => (
//     <div className="failure-container">
//       <img
//         src="https://res.cloudinary.com/dowxofd2k/image/upload/v1706372545/ugqa3jsdrqmpgseeyt8v.png"
//         alt="failure"
//         className="failure-image"
//       />
//       <h1 className="failure-heading">Oops! Something went wrong</h1>
//       <p className="failure-para">We are having some trouble</p>
//       <Link to="/assess/questions">
//         <button type="button">Retry</button>
//       </Link>
//     </div>
//   )

//   renderDefaultOptions = () => (
//     // this.setState({apiOptionsType: optionType.default})

//     <>
//       <p>Default Option</p>
//     </>
//   )

//   renderEachOption = () => (
//     <>
//       <p>SINGLE SELECT</p>
//     </>
//   )

//   renderImage = () => (
//     <>
//       <p>Image</p>
//     </>
//   )

//   onIncrement = () => {
//     const {activeQuestion, questionData} = this.state

//     if (activeQuestion < questionData.length) {
//       this.setState(prevState => ({
//         activeQuestion: prevState.activeQuestion + 1,
//         // apiOptionsType: questionData.optionType,
//       }))
//     }
//   }

//   //   renderEachQuestionOptions = () => {
//   //     const {apiOptionsType} = this.state
//   //     console.log(apiOptionsType)

//   //     switch (apiOptionsType) {
//   //       case optionType.default:
//   //         return this.renderDefaultOptions()
//   //       case optionType.image:
//   //         return this.renderImageOptions()
//   //       case optionType.singleSelect:
//   //         return this.renderSingleOptions()

//   //       default:
//   //         return null
//   //     }
//   //   }
//   renderOptions = () => {
//     const {questionData, activeQuestion} = this.state
//     const displayQuestion = questionData[activeQuestion]
//     console.log('OKOK')

//     switch (displayQuestion.optionType) {
//       case 'DEFAULT':
//         return this.renderDefaultOptions()
//       case 'SINGLE_SELECT':
//         return this.renderSingleOptions()
//       case 'IMAGE':
//         return this.renderImage()
//       default:
//         return null
//     }
//   }

//   renderQuestions = () => {
//     const {apiStatus} = this.state

//     switch (apiStatus) {
//       case apiStatusConstants.success:
//         return this.renderEachQuestion()
//       case apiStatusConstants.failure:
//         return this.renderFailure()
//       case apiStatusConstants.inProgress:
//         return this.renderLoadingView()

//       default:
//         return null
//     }
//   }

//   render() {
//     const {questionData, activeQuestion} = this.state

//     const displayQuestion = questionData[activeQuestion]

//     // const {options, optionsType} = displayQuestion
//     // console.log(optionsType)
//     // console.log(options)

//     return (
//       <div>
//         <Header />
//         <ul>
//           {displayQuestion !== undefined ? (
//             <div>
//               <h1 key={displayQuestion.id}>{displayQuestion.questionsText}</h1>
//               <hr />
//               {/* {this.renderEachQuestionOptions()} */}

//               <ul>
//                 {/* {displayQuestion.options.map(eachOption => (
//                   <h1 key={eachOption.id}>{eachOption.text}</h1>
//                 ))} */}
//               </ul>
//               <OptionsType />
//             </div>
//           ) : (
//             <h1>Loading</h1>
//           )}
//         </ul>
//         {/* {this.renderQuestions()} */}
//         {/* {this.renderEachQuestionOptions()} */}
//         {/* {this.renderOptionsDefault()} */}
//         {/* <Timmer /> */}
//         {activeQuestion < 9 ? (
//           <button type="button" onClick={this.onIncrement}>
//             next
//           </button>
//         ) : (
//           <button type="button">End</button>
//         )}
//       </div>
//     )
//   }
// }

// export default Assessment

// import './index.css'
// import {useState} from 'react'

// const QuestionNumber = props => {
//   const {questionNumberCount} = props
//   const numbers = Array.from(Array(questionNumberCount).keys())

//   const [activeNumber, setActiveNumber] = useState('')
//   const [attemptedQuestion, setAttemptedQuestion] = useState([])

//   const handleButtonClick = number => {
//     setActiveNumber(number)
//     setAttemptedQuestion([...attemptedQuestion, number])
//     console.log('Button clicked:', number + 1)
//   }

//   const isAttemptedQuestion = number => attemptedQuestion.includes(number)

//   return (
//     <li>
//       {numbers.map(number => (
//         <button
//           key={number}
//           type="button"
//           onClick={() => handleButtonClick(number)}
//           //   className={
//           //     activeNumber === number ? 'number-class active' : 'number-class'
//           //   }
//           className={
//             isAttemptedQuestion(number) ? 'number-class active' : 'number-class'
//           }
//         >
//           {number + 1}
//         </button>
//       ))}
//     </li>
//   )
// }

// export default QuestionNumber
