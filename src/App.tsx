import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Quiz from "./components/quiz";
import Title from "./components/title";
import Instruction from "./components/instructions";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Title />} >
        <Route index element={<Instruction />} />
        <Route path="quiz" element={<Quiz />} />
      </Route>
    </>
  ))

  return (
    <div className="container">

      <RouterProvider router={router} />
    </div>
  )
}

export default App