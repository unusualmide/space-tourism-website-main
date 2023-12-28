import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home";
import Destination from "./features/destination/Destination";
import Crew from "./features/crew/Crew";
import Technology from "./features/technology/Technology";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


