import {Component} from 'react'

import {Link} from 'react-router-dom'
import './index.css'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'

// import Results from '../Results'
// import ScoreContext from '../../ReactContext/index'
import QuestionsBtn from '../QuestionsBtn'
import Timer from '../Timer'

import OptionsContent from '../Options'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Assessment extends Component {
  state = {
    questionsData: [],
    apiStatus: apiStatusConstants.initial,
    currentQuestion: 0,
    selectedOptionId: '',
    score: 0,
    // timerRunning: true,
  }

  componentDidMount() {
    this.requestingQuestions()
  }

  setActiveOption = optionId => {
    this.setState({selectedOptionId: optionId})
  }

  onChangeSingleOption = event => {
    this.setState({selectedOptionId: event.target.value})
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" width="50" height="50" />
    </div>
  )

  requestingQuestions = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/assess/questions'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = fetchedData.questions.map(question => ({
        id: question.id,
        optionsType: question.options_type,
        questionsText: question.question_text,
        options: question.options.map(option => ({
          imageUrl: option.image_url,
          idOption: option.id,
          text: option.text,
          isCorrect: option.is_correct,
        })),
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        questionsData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dowxofd2k/image/upload/v1706372545/ugqa3jsdrqmpgseeyt8v.png"
        alt="failure"
        className="failure-image"
      />
      <h1 className="failure-heading">Oops! Something went wrong</h1>
      <p className="failure-para">We are having some trouble</p>
      <Link to="/assess/questions">
        <button type="button">Retry</button>
      </Link>
    </div>
  )

  toFindIndexOfTrue = () => {
    const {questionsData, currentQuestion} = this.state

    const displayingOneQuestion = questionsData[currentQuestion]
    const optionsValue = displayingOneQuestion.options

    function toFindTrue(option) {
      return option.isCorrect === 'true'
    }

    return optionsValue.find(toFindTrue)
  }

  checkTheAnswer = () => {
    const {selectedOptionId} = this.state
    const CorrectValue = this.toFindIndexOfTrue()
    console.log(CorrectValue.idOption)
    console.log('CHecking')
    if (CorrectValue.idOption === selectedOptionId) {
      this.setState(prev => ({
        score: prev.score + 1,
      }))
    }
  }

  increaseCount = () => {
    const {questionsData, currentQuestion} = this.state

    if (currentQuestion + 1 < questionsData.length) {
      this.setState(prev => ({
        currentQuestion: prev.currentQuestion + 1,
        selectedOptionId: '',
      }))
      this.checkTheAnswer()
    } else {
      console.log('Ended')
      //   this.setState({TestEnd: true})
    }
  }

  changeOption = optionId => {
    this.setState({selectedOptionId: optionId})
  }

  //   ClickSubmitBtn = () => {
  //     this.setState({TestEnd: true})
  //   }

  ClickSubmitBtn = () => {
    const {history} = this.props
    const {score} = this.state

    history.replace('/results', {score})
  }

  renderQuestions = () => {
    const {questionsData, currentQuestion, selectedOptionId, score} = this.state

    const displayingOneQuestion = questionsData[currentQuestion]
    const optionsValue = displayingOneQuestion.options

    const NumberOfQuestions = questionsData.length
    // console.log(selectedOptionId)

    console.log(NumberOfQuestions)
    console.log(score)

    return (
      <div className="Main-Background">
        <div>
          {/* {!TestEnd ?
            <div className="container">
              <div className="questions-Container">
                <div className="space-between-btn-questions">
                  <h1 className="question">
                    {currentQuestion + 1}.{displayingOneQuestion.questionsText}
                  </h1>

                  <hr className="line" />

                  <OptionsContent
                    optionType={displayingOneQuestion.optionsType}
                    options={optionsValue}
                    changeOption={this.changeOption}
                    activeOption={selectedOptionId}
                  />
                </div>

                {currentQuestion < 9 && (
                  <div className="button-container">
                    <button
                      type="button"
                      className="next-button"
                      onClick={this.increaseCount}
                    >
                      Next Question
                    </button>
                  </div>
                )}
              </div>

              <div>
                <Timer />
                <div className="questions-btn-space">
                  <QuestionsBtn
                    currentQuestion={currentQuestion}
                    questionsData={questionsData}
                  />
                  <div className="btn-container">
                    <button
                      type="button"
                      className="btn-submit"
                      onClick={this.ClickSubmitBtn}
                    >
                      Submit Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Results score={score} />
          )} */}
          <div className="container">
            <div className="questions-Container">
              <div className="space-between-btn-questions">
                <h1 className="question">
                  {currentQuestion + 1}.{displayingOneQuestion.questionsText}
                </h1>

                <hr className="line" />

                <OptionsContent
                  optionType={displayingOneQuestion.optionsType}
                  options={optionsValue}
                  changeOption={this.changeOption}
                  activeOption={selectedOptionId}
                />
              </div>

              {currentQuestion < 9 && (
                <div className="button-container">
                  <button
                    type="button"
                    className="next-button"
                    onClick={this.increaseCount}
                  >
                    Next Question
                  </button>
                </div>
              )}
            </div>

            <div>
              <Timer />
              <div className="questions-btn-space">
                <QuestionsBtn
                  currentQuestion={currentQuestion}
                  questionsData={questionsData}
                />
                <div className="btn-container">
                  <button
                    type="button"
                    className="btn-submit"
                    onClick={this.ClickSubmitBtn}
                  >
                    Submit Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTheQuestionsPart = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderQuestions()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="Assessment-container">
        <Header />
        {this.renderTheQuestionsPart()}
      </div>
    )
  }
}
export default Assessment
