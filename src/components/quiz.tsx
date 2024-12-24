import { useQuery } from "@tanstack/react-query";
import "./quiz.css";
import { ShuffleAnswer } from "./extra";
import { useState } from "react";
import QuizBtn from "./quizBtn";


function Quiz() {

    type Quiz = {
        // Api type
        category: string,
        correctAnswer: string
        difficulty: string,
        id: string,
        incorrectAnswers: string[],
        isNiche: boolean,
        question: { text: string }
        regions: []
        tags: string[]
        type: string
    }

    const { data, isLoading, error } = useQuery({
        // fetching Api
        queryKey: [],
        queryFn: async () => {
            const res = await fetch("https://the-trivia-api.com/v2/questions");
            const post = await res.json() as Quiz[];
            return post
        }
    })

    const [count, setCount] = useState<number>(0);
    const [questionNumber, setquestionNumber] = useState<number>(1);


    function getNextQuestion() {
        // get next question
        setCount(prevState => prevState + 1);
        setquestionNumber(prevState => prevState + 1)
    }

    function getPreviousQuestion() {
        // get previous question
        setCount(prevState => prevState - 1);
        setquestionNumber(prevState => prevState - 1);
    }

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>{error.message}</h3>
    }

    const quiz = <div className="quiz">
        <h2 className="question">{questionNumber}. {data?.[count].question.text}</h2>
        {ShuffleAnswer([...(data?.[count].incorrectAnswers || []), data?.[count].correctAnswer as string]).map(answer => {


            return < ul key={answer} className="answer">
                <label>
                    <input type="radio" name="answer" />
                    <li>{answer}</li>
                </label>
            </ul>
        })
        }
    </div >

    return (
        <>



            {quiz}

            <hr />

            <QuizBtn handleNext={getNextQuestion} handlePrev={getPreviousQuestion} data={data} questionNumber={questionNumber} />
        </>
    )
}

export default Quiz