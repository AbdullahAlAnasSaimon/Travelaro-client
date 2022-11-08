import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/services',
        element: <Services></Services>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])