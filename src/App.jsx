import { useState , createContext} from 'react'
import './App.css'


import Questions from "../public/data/question";
import Options from "../public/data/option";
import Main from "../components/main"

const DataContext = createContext()

function App() {

  const [index, setIndex] = useState(0)

  function Previous () {
    setIndex(prev => prev -1 )
  }

  function Next () {
    setIndex (prev => prev +1 )
  }


  return (
    <>  
    <DataContext.Provider value={{Questions, index, Options, Next, Previous}}>
      <Main />
    </DataContext.Provider>
     
    </>
   
  )

}

export {DataContext}

export default App
