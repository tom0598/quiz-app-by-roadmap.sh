import { useContext } from "react";
import { v4 as uuid } from "uuid"

import Button from "./buttons.jsx";
import { DataContext } from "../src/App.jsx";

export default function Main() {
    const {Questions, Options, index, Previous, Next} = useContext(DataContext)
    const id = uuid()

    return (
        <main>
            <div>
                <p>{Questions[index].q}</p> 
            </div>
            <form>
            {
                (Options[index]).map((option) => (
                    <div key={id}>
                        <input type="radio" value={option} name="choice"/>
                        <label>{option}</label>
                    </div>
                  
        
                ))
            }
            </form>
           <Button  
                Previous={Previous} 
                Next={Next} 
                index={index}
                Questions={Questions}
            />

        </main>
        
    )
}