

function QuizBtn(prop : {handleNext() : void, handlePrev() : void}) {
    return (
        <div className="btn">
            <button onClick={prop.handlePrev}>Prev</button>
            <button onClick={prop.handleNext}>Next</button>
        </div>
    )
}

export default QuizBtn