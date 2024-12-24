import { Outlet } from "react-router-dom"

function Title() {
  return (
    <>
    <div className="title">
      <h1>Trivia Quiz</h1>
      <p>Fill out this trivia quiz for fun</p>
    </div>


      <Outlet />

    </>
  )
}

export default Title