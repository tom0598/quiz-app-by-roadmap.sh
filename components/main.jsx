
import Questions from "../public/data/question.jsx";
import Options from "../public/data/option.jsx";

export default function Main({index = 1}) {
    console.log(Options)

    return (
        <main>
            <div>
                <p>{Questions[index].q}</p> 
            </div>
            <form>
            {
                Object.values(Options[index]).map((option) => (
                    <>
                        <input type="radio" value={option} name="choice" />
                        <label>{option}</label>
                    </>
                  
        
                ))
            }
            </form>
           

        </main>
        
    )
}