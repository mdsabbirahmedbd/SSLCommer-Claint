

import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Cancal from './../componants/Cancal';
import Fail from "../componants/Fail";
import Success from "../componants/Success";

   export  const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    },
    {
        path:'/cancel',
        element:<Cancal></Cancal>
    },
    {
        path:'/fail',
        element:<Fail></Fail>
    },
    {
        path:'/success',
        element:<Success></Success>
    }

  ])








