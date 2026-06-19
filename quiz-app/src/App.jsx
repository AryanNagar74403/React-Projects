import React from 'react'
import questions from './questions'
import { useState } from 'react'
const App = () => {

  // console.log(questions);
const [currentQuestions, setcurrentQuestions] = useState(0)
const [selectAnswer, setselectAnswer] = useState(null)
const [isAnswered, setIsAnswered] = useState(false)
const [score, setscore] = useState(0)
const [isFinished, setIsFinished] = useState(false)


//handle answer click 
const handleAnswerClick=(index)=>{
if(isAnswered||isFinished) return;

setselectAnswer(index)
setIsAnswered(true)

if(index===questions[currentQuestions].correctAnswer){
  setscore((prev)=>prev+1)
}
}


//handle next click

const handleNextClick=()=>{
  if(currentQuestions<questions.length -1){
    // setcurrentQuestions(currentQuestions+1)
    setcurrentQuestions(prev => prev + 1);
    setselectAnswer(null)
    setIsAnswered(false)
  }
  else{
setIsFinished(true)
  }
}

//handle reset button
const handleResetbtn=()=>{
  setcurrentQuestions(0)
  setselectAnswer(null)
  setIsAnswered(false)
  setscore(0)
  setIsFinished(false)


}
  
  
  return (
    <div className='main-container'>
      <div className="header">
        <h1>Quiz App</h1>

        {!isFinished?(
           <p>{currentQuestions+1}:{questions[currentQuestions].question}</p>

        ):(
          <p>Quiz Finished Your Score: {score}/{questions.length}</p>
        )
      }
       
      </div>


      {!isFinished&&( 
         <ul className='questions'>

        {questions[currentQuestions].options.map((option,idx)=>{

          let className='';

          if(isAnswered){

            // if(idx===questions[currentQuestions].correctAnswer)
               if (idx === questions[currentQuestions].correctAnswer){
             
              className="correct"
            }

                else if(idx===selectAnswer){
            className = "incorrect"
          }

          }
          return (
            <li key={idx} className={className}
            onClick={()=>handleAnswerClick(idx)}>{option}
            
            </li>
        )
      
        }
        )}

      </ul>
      )}
    
      {!isFinished? (
        <button onClick={handleNextClick}>Next Questions</button>
      ):(
        <button onClick={handleResetbtn}>Reset Quiz</button>
      )}
      
    </div>
  )
}

export default App



















