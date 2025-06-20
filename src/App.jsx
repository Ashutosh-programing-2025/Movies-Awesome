import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Home from './Pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import IndividualCard from './components/UI/IndividualCard'
import TvShows from "./Pages/TvShows";

function App() {
  const queryClient = new QueryClient();
    const router = createBrowserRouter([
      {
        path:'/',
        element:<MainLayout/>,
        children:[
          {
            index:true,
            element:<Home/>
          },
          {
            path:'tvShows',
            element:<TvShows/>,
          },
          {
            path:'/:id',
            element:<IndividualCard/>
          }
        ]
      }
    ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
