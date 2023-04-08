import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import Contact from './Component/Contact/Contact';
import Gandpa from './Component/Gandpa/Gandpa';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('t-shirts.json')
      },
      {
        path:'/about',
        element:<Home></Home>,
      },
      {
        path:'order',
        element:<Order></Order>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'/gandpa',
        element:<Gandpa></Gandpa>
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
