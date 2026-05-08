import { useState } from 'react'
import './App.css'

import Questions from "../public/data/question";
import Options from "../public/data/option";
import Main from "../components/main"

function App() {
  const [index, setIndex] = useState(0)
  return (
    <>  
      <h1>Hii , I'm body</h1>
      <Main />
     
    </>
   
  )

}

export default App
