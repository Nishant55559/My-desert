
import React from 'react';
import Home from './component/home/home';
import AboutUs from './component/about/about';
import Menu from './component/Menu/Menu';
import Reserve_table from './component/reserve_table/res_body/reserve_table';
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
    },
    {
      path:'/Reserve_table',
      element: <Reserve_table/>
    }
    ])

  return (<div>

<RouterProvider router={router}/>
  </div>
   
  );
}

export default App;
