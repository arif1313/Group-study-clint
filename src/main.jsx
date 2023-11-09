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
        element: <CreateAssignment></CreateAssignment>
      },
    {
      path: '/assignmentsDetails/:id',
      element: <AssignmentDetails></AssignmentDetails>,
      loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
     
      
    },
    {
     path:'/takenAssingment',
     element: <TakenAssignment></TakenAssignment>
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
