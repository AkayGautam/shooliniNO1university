import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Styles from './css/quiz'

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'Would you rather',
        choices: ['Study crop disease? (Agriculture)', 'Study medicine formation? (Pharmacy)'],
        type: 'MCQs',
        correctAnswer:true
      },
      {
        question:
          'Would you rather',
        choices: ['Study the cause of various diseases? (Basic science)', 'Study the uses of drugs to cure diseases? (Pharmacy)'],
        type: 'MCQs',
        correctAnswer: true
      },
      {
        question:
          'Would you rather',
        choices: [
          'Study human and plant physiology? (Basic Science',
          'Study only plant physiology? (Agriculture)'
        ],
        type: 'MCQs',
        correctAnswer: true
      },
      {
        question: 'Would you rather',
        choices: ['Determine blood types? (Basic Science)', 'Determine vaccine strains? (Pharmacy)'],
        type: 'MCQs',
        correctAnswer: true
      },
    ],
  }

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

console.log("llll", selectedAnswerIndex)



  return (
<>
    <Header />
      <Styles> 
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <input readonly
                onClick={() => onAnswerSelected(answer, index)}
                key={answer} value={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                } />
                
            
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">

          

          <div class="container mt-2">
	<div class="row justify-content-center align-items-center text-left p-2">
		<div class="m-1 col-12  shadow-sm p-3 mb-5 bg-white border rounded">
			<div class="pt-5 pb-5">
			<h5>See your Result Please Enter Details</h5>
				<form class="form text-left" action="#" method="POST">
					<div class="form-group input-group-md ">
						<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
						
					</div>
					<div class="form-group input-group-md">
						<input type="text" class="form-control" id="name" placeholder="Name" />
					</div>
          <div class="form-group input-group-md">
						<input type="number" class="form-control" id="number" placeholder="Contact No." />
					</div>
                    <input type="hidden" value={questions.length} id="questionLenngth" /> 
                    <input type="hidden" value={result.score} id="score" /> 
                    <input type="hidden" value={result.correctAnswers} id="correctAnswers" /> 

					<button class="btn btn-lg btn-block btn-primary mt-0" type="submit">
                        Submit
                    </button>
					
				</form>
			</div>
			
		</div>
	</div>
</div>

        </div>
      )}
    </div>
    </Styles> 
    <Footer />
    </>
  )
}

export default Quiz