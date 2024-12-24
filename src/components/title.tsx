import { Outlet } from "react-router-dom"

function Title() {
  return (
    <>
      <div className="title">
        <div>
          <h1>Trivia Quiz</h1>
          <p>Fill out this trivia quiz for fun</p>
        </div>
       
      </div>

      <hr />
      <Outlet />

    </>
  )
}

export default Title