import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import CreateAssignment from './components/CreateAssignment/CreateAssignment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Assignments from './components/Assignments/Assignments';
import UpdateAssignment from './components/UpdateAssignment/UpdateAssignment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/createAssignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        // loader: () => fetch('http://localhost:5000/assignments')
      },
      {
        path: "/updateAssignment/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({params}) => fetch(`http://localhost:5000/assignments/assignmentWise/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
