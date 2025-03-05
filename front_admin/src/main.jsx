import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from 'login/Login';
import Home from 'home/Home';
import Logout from './router/Logout.jsx';
import Dashboard from './router/Dashboard.jsx';
import ProtectedRouter from './router/ProtectedRouter.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />
  },
  {
    path:"/logout",
    element: <Logout />
  },
  {
    path:"/",
    element: <ProtectedRouter />,
    children:[
      {
        path:"/dashboard",
        element: <Home />
      },
      {
        path:"/Container/inicio",
        element: <Home />
      }
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
