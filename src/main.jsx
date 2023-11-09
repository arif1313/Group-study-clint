import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';



import ContexApi from './Component/Contex/ContexApi';
import Home from './Component/Home/Home';
import SineUp from './Component/SineUp/SineUp';
import Login from './Component/Login/Login';


import Error from './Component/ErrorPage/Error';
import CreateAssignment from './Component/CreateAssignment/CreateAssignment.jsx';
import AssignmentDetails from './Component/AssignmentDetails/AssignmentDetails.jsx';
import TakenAssignment from './Component/TakenAssignment/TakenAssignment.jsx';
import Update from './Component/Update/Update.jsx';
import Privet from './Component/Privet/Privet.jsx';
import Submitio from './Component/Submition/Submitio.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[

      {
        path: '/',
        element: <Home></Home>
        // loader:()=>fetch('http://localhost:5000/assignments')
   
      },
      {
        path:'/sinup',
        element:<SineUp></SineUp>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/creatass',
        element:<Privet> <CreateAssignment></CreateAssignment></Privet>
      },
    {
      path: '/assignmentsDetails/:id',
      element:<Privet> <AssignmentDetails></AssignmentDetails></Privet>,
      loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
     
      
    },
    {
     path:'/task',
     element: <Privet><TakenAssignment></TakenAssignment></Privet>
    },
    {
      path: '/update/:id',
      element:<Privet><Update></Update></Privet>,
      loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
    },
    {
      path: '/submition/:id',
      element: <Submitio></Submitio>,
      loader: ({params})=>fetch(`http://localhost:5000/takenAssignment/${params.id}`)
     
    }
     
     
    ]
   
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <ContexApi>
  <RouterProvider router={router} />
  </ContexApi>
  </React.StrictMode>,
)
