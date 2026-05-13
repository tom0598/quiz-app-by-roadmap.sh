import "../public/css/button.css"
import { useContext, useState } from "react";

export default function Button() {

    const { QuizData, index, Previous, Next, answer, userAns} = useContext(DataContext)

    function checksubmit () {
        return userAns.some(ans => ans.id === QuizData[index].id)
    }


    return (
        <footer>
            {
                index !== 0 ?
                <button onClick={() => Previous()}>Previous</button>
                :
                null
            }
          

            <button 
                type="submit" 
                form="quiz-form" 
                disabled={checksubmit()}
                >Submit
            </button>

            {
                index+1 !== QuizData.length ?
                <button onClick={() => Next()} >Next</button>
                :
                null

            }
           
        </footer>
    )
}