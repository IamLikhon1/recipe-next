import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SingleRecipe from './component/SingleRecipe/SingleRecipe';
import Main from './layout/Main';
import App from './App'
// Create a client
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path:'/single/:id',
        element:<SingleRecipe/>,
        loader:({params})=>fetch(`https://recipe-server-production.up.railway.app/getRecipe/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // Provide the client to your App */}

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
