
import { 
  Route,
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
     <Route path='/items' element={<ItemsPage/>}/>
  </Route>

)
);

const App = () => {
  return ( <RouterProvider router={router} />)
}

export default App
