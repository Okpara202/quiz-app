
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

function QuizBtn(prop: { handleNext(): void, handlePrev(): void, questionNumber: number, data: Quiz[] | undefined }) {
    return (
        <div className="btn">

            {prop.questionNumber == 1 ? "" :
                <button onClick={prop.handlePrev}>
                    Back
                </button>}


            {prop.questionNumber === prop.data?.length ? <button>
                Submit
            </button> :
                <button onClick={prop.handleNext}>
                    Next
                </button>}
        </div>
    )
}

export default QuizBtn