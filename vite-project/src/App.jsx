import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
]);

function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App;