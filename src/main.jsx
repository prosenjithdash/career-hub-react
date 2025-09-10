import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FeaturedJobDetails from './components/FeaturedJobDetails/FeaturedJobDetails';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/featuredJobs/:id',
        element: <FeaturedJobDetails/>
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
