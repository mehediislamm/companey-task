import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/ErrorPage/Error";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);