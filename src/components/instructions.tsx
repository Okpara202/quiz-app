import { Link } from "react-router-dom"

function Instruction() {
    return (
        <div className="instructions">
            <p>Click below when ready to start quiz</p>
            <Link to="quiz">Go to quiz</Link>
        </div>
    )
}

export default Instruction