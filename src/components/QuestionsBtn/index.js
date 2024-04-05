// import Timer from '../Timer'
import QuestionNumber from '../QuestionNumbers'
import './index.css'

const QuestionsBtn = props => {
  const {currentQuestion, questionsData} = props

  return (
    <div>
      <div className="background-card">
        <div className="question-count-container">
          <div className="content">
            <p className="question-number">{currentQuestion + 1}</p>
            <p className="question-content">Answered Question</p>
          </div>
          <div className="content2">
            <p className="question-number color-number">
              {10 - currentQuestion - 1}
            </p>
            <p className="question-content">Unanswered Question</p>
          </div>
        </div>
        <hr className="line-between-question-numbers" />
        <div className="question-numbers-submit-button-container">
          <div>
            <h1 className="questions">Questions (10)</h1>
            <ul className="numbers-list">
              <QuestionNumber questionNumberCount={questionsData.length} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default QuestionsBtn
