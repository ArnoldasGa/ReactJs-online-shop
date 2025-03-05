
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
import AboutPage from './pages/AboutPage';
import SingeItemPage from './pages/SingleItemPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Sitemap from './pages/Sitemap';
import HTMLSitemap from './pages/HTMLSitemaps';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
     <Route path='/items' element={<ItemsPage/>}/>
     <Route path='/about' element={<AboutPage/>}/>
     <Route path='/items/:name/:id' element={<SingeItemPage/>}/>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/sitemap' element={<Sitemap />} />
     <Route path='/HTMLsitemap' element={<HTMLSitemap />} />  {/* Pridėkite HTML žemėlapį */}
  </Route>

)
);

const App = () => {
  return ( <RouterProvider router={router} />)
}

export default App
