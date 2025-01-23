
import React from 'react';
import Home from './component/home/home';
import AboutUs from './component/about/about';
import Menu from './component/Menu/Menu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/aboutUs',
      element: <AboutUs/>
    },
    {
      path:'/menu',
      element: <Menu/>
    }
    ])

  return (<div>

<RouterProvider router={router}/>
  </div>
   
  );
}

export default App;
