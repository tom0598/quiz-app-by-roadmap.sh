import { useContext, useState } from "react";
import "../public/css/main.css"
import Button from "./buttons.jsx";
import { DataContext} from "../src/App.jsx";

export default function Main() {
    
    const { QuizData, index, Previous, Next, answer, userAns, currentChoice, handleChoice, wrongAns, rightAns} = useContext(DataContext)

    const currentQuestion = QuizData[index]

    const isSumbit = userAns.some(ans => ans.id === currentQuestion.id)

    


    return (
        <main>
            <div className="question">
                <p>{QuizData[index].q}</p> 
            </div>

            <form action={answer} id="quiz-form" key={index}>
            {
                currentQuestion.options.map((option) => (
                    <div key={option} style={{
                        backgroundColor : 
                        rightAns.includes(option) || (currentQuestion.a === option && isSumbit ) ?
                        "green"
                        : wrongAns.includes(option) ?
                        "red"
                        : ""
                    }}>
                        <label htmlFor={`opt${index}-${option}`} >
                            <input type="radio" id={`opt${index}-${option}`}   value={option} name="choice" checked={currentChoice === option} onChange={handleChoice} required  />
                            &nbsp;
                
                            {option} 
                        </label>
                    </div>
                
                ))
            }
            </form>

           <Button />
        </main>
       
        
    )
}