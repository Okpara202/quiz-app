import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Quiz from "./components/quiz";
import Title from "./components/title";
import Instruction from "./components/instructions";
import { useState } from "react";

function App() {

 
const [score ] = useState<number>(0)
 

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Title score={score} />} >
        <Route index element={<Instruction />} />
        <Route path="quiz" element={<Quiz  />} />
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