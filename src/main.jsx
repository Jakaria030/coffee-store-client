import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AddCoffee from './pages/AddCoffee';
import UpdateCoffee from './pages/UpdateCoffee';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Details from './pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
