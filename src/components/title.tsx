import { Outlet } from "react-router-dom"

function Title() {
  return (
    <>
      <div className="title">
        <h1>Trivia Quiz</h1>
        <p>Fill out this trivia quiz for fun</p>
      </div>

      <hr />
      <Outlet />

    </>
  )
}

export default Title