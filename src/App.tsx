import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Quiz from "./components/quiz";
import Title from "./components/title";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Title />} >
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