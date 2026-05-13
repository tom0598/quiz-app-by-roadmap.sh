import {v4 as uuid } from "uuid"

const data = [
    {
        q: "Who was the first Indian woman to win an individual Olympic silver medal?",
        options: ["Saina Nehwal", "P.V. Sindhu", "Sakshi Malik", "Karnam Malleswari"],
        a: "P.V. Sindhu"
    },
    {
        q: "Which Indian state shares its borders with the maximum number of other states?",
        options: ["Madhya Pradesh", "Assam", "Uttar Pradesh", "Chhattisgarh"],
        a: "Uttar Pradesh"
    },
    {
        q: "Which constitutional amendment reduced the voting age from 21 to 18?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        a: "61st Amendment"
    },
    {
        q: "In which year was the first Five-Year Plan of India launched?",
        options: ["1947", "1950", "1951", "1955"],
        a: "1951"
    },
    {
        q: "Who presided over the 1924 Belgaum session of the Indian National Congress?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Sarojini Naidu"],
        a: "Mahatma Gandhi"
    },
    {
        q: "Which is the only active volcano located in the Indian territory?",
        options: ["Narcondam Island", "Barren Island", "Baratang Island", "Dhinodhar Hills"],
        a: "Barren Island"
    },
    {
        q: "Who was the first Chief Election Commissioner of independent India?",
        options: ["K.V.K. Sundaram", "Sukumar Sen", "S.P. Sen Verma", "T.N. Seshan"],
        a: "Sukumar Sen"
    },
    {
        q: "Which river is known as the Dakshina Ganga (Ganges of the South)?",
        options: ["Krishna", "Cauvery", "Godavari", "Mahanadi"],
        a: "Godavari"
    },
    {
        q: "Which Indian city is home to the headquarters of the International Solar Alliance?",
        options: ["New Delhi", "Bengaluru", "Gurugram", "Hyderabad"],
        a: "Gurugram"
    },
    {
        q: "Under which Article can the President of India declare a Financial Emergency?",
        options: ["Article 352", "Article 356", "Article 360", "Article 368"],
        a: "Article 360"
    }
];


const QuizData = data.map(obj => ({...obj, id: `${uuid()}`}))

export default QuizData