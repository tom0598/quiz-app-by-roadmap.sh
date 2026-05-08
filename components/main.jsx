
import Questions from "../public/data/question.jsx";
import Options from "../public/data/option.jsx";

export default function Main({index = 0}) {
    console.log(Options)

    return (
        <main>
            <div>
                <p>{Questions[index].q}</p> 
            </div>
            <form>
                {

                    
                    
                }
    
            </form>
           

        </main>
        
    )
}