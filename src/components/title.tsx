import { Outlet } from "react-router-dom"

function Title(prop: { score: number }) {
  return (
    <>
      <div className="title">
        <div>
          <h1>Trivia Quiz</h1>
          <p>Fill out this trivia quiz for fun</p>
        </div>
        <p className="score">Score : {prop.score}</p>
      </div>

      <hr />
      <Outlet />

    </>
  )
}

export default Title