import { useState , createContext} from 'react'
import '../public/css/App.css'


import QuizData from "../public/data/quiz"
import Main from "../components/main"

const DataContext = createContext()

function App() {

  const [index, setIndex] = useState(0)
  const [userAns , setUserAns] = useState([])
  const [currentChoice, setCurrentChoice] = useState("")
  const [rightAns , setRightAns] = useState([])
  const [wrongAns, setWrongAns] = useState([])


  function Previous () {
    setIndex(prev => prev -1 )

    const prevQuestion = QuizData[index - 1]
    const existingAnswer = userAns.find( ans => ans.id === prevQuestion?.id)
    setCurrentChoice(existingAnswer?.a || "")
  }

  function Next () {
    setIndex (prev => prev +1 )

    const nextQuestion = QuizData[index + 1]
    const existingAnswer = userAns.find( ans => ans.id === nextQuestion?.id)
    setCurrentChoice(existingAnswer?.a || "")
  }




  function answer(formData) {
    const userguess = formData.get("choice")
    if (!userguess) return

    setUserAns ( prev => [
      ...prev,  
      {
        a: userguess,
        id: QuizData[index].id
      }
    ])

    setCurrentChoice(userguess)

    
   if(userguess === QuizData[index].a) {
    setRightAns(prev => [...prev, userguess])
   } else {
      setWrongAns(prev => [...prev, userguess])
   }
    
  }


  function handleChoice(e) {
    const value = e.target.value
    setCurrentChoice(value)
    
  }

  return (
    <>  
    <DataContext.Provider value={{index, QuizData, Next, Previous, answer, userAns, handleChoice, currentChoice,  rightAns, wrongAns}}>
      <Main />
    </DataContext.Provider>
     
    </>
   
  )

}

export  {DataContext}

export default App
