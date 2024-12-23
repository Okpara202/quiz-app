import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Quiz from "./components/quiz";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="quiz" element={<Quiz />} />
    </>
  ))
  return (
    <div className="container">
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App