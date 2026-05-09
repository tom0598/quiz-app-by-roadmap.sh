

export default function Button( {Previous, Next, index, Questions}) {

    return (
        <footer>
            <button onClick={() => Previous()} disabled={index === 0 ? true : false }>Previous</button>
            <button>Submit</button>
            <button onClick={() => Next()}  disabled={index === Questions.length ? true : false }>Next</button>
        </footer>
    )
}