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
import AssignmentDetails from './components/AssignmentDetails/AssignmentDetails';
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import SubmittedAssignment from './components/SubmittedAssignment/SubmittedAssignment';
import GiveMarks from './components/GiveMarks/GiveMarks';
import MarkedAssignments from './components/MarkedAssignments/MarkedAssignments';

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

      },
      {
        path: "/assignmentDetails/:id",
        element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/assignments/assignmentWise/${params.id}`)

      },
      {
        path: "/submissionForm/:id",
        element: <SubmissionForm></SubmissionForm>,
        loader: ({params}) => fetch(`http://localhost:5000/assignments/assignmentWise/${params.id}`)
      },
      {
        path: "/submittedAssignments",
        element: <SubmittedAssignment></SubmittedAssignment>,
        
      },
      {
        path:"/giveMarks/:id",
        element: <GiveMarks></GiveMarks>,
        loader: ({params}) => fetch(`http://localhost:5000/submittedAssignments/submittedAssignmentWise/${params.id}`)
      },
      {
        path: "/markedAssignments",
        element: <MarkedAssignments></MarkedAssignments>,
        loader: () => fetch('http://localhost:5000/markedAssignments')
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
