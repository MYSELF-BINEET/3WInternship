import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserSubmissionForm from './components/user'
import AdminLogin from './components/adminLogin'
import AdminDashboard from './components/admin'
import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <UserSubmissionForm />,
    }
    ,
    {
      path: "/admin",
      element: < AdminLogin/>,
    },{
      path:"/admin-dashboard",
      element:<AdminDashboard />
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App
