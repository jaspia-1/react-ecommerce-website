import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '/public/assets/css/icofont.min.css';
import '/public/assets/css/animate.css';
import '/public/assets/css/style.min.css';
import '/public/assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Blog from './Blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import SingleBlog from './Blog/SingleBlog.jsx';
import About from './about/About.jsx';
import ContactPage from './contactPage/ContactPage.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

import Contact from'./contactPage/ContactPage.jsx'
import Login from './shop/Login.jsx';
import Signup from './components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/blog/:id',
        element:<SingleBlog></SingleBlog>
      },
      {
        path:'/shop',
        element:<Shop></Shop>
      },
      {
        path:"shop/:id",
        element:<SingleProduct></SingleProduct>
      },
      {
        path:"/cart-page",
        element:<PrivateRoute><CartPage></CartPage></PrivateRoute>
      },
      {
        path:"/about",
        element:<About></About>
      }
      ,
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      
      
    ]
  }
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
