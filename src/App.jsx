import { createBrowserRouter, RouterProvider, UNSAFE_LocationContext, useLocation } from "react-router-dom";
import "./App.css";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import Footer from "./assets/Components/Footer/Footer";
import Home from "./assets/Components/Home/Home";
import Navbar from "./assets/Components/Navbar/Navbar";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Error from "./assets/Components/Error/Error";
import StartFramework from "./assets/Components/StartFramework/StartFramework";

const router = createBrowserRouter([
  {
    path: "",
    element: <StartFramework />,
    children: [
      { path: "", element: <Home /> , title:"home"},
      { path: "startframework", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About />  },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <Error /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
