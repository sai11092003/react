import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AboutUs from './components/About';
import ContactUs from './components/Contact';
import useBody from '../utils/usebody';
import Register from './components/Register';
import Forgetpass from './components/forgotpasswod';
import RestaurantList from './components/RestaurantList';
import Cart from './components/Cart';
import Login from './components/Login';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import usercontext,{authcontext} from '../utils/useContext';
import store from '../utils/store';
const APPlayout = () => {
    const {allResults,SetallResults,SetResults,Results}=useBody();
    const [isAuth,SetisAuth]=useState(false)
    const [Username,SetUsername]=useState('')
    return (
        <Provider store={store}>
            <authcontext.Provider value={{
                isAuth,
                SetisAuth,
                Username,
                SetUsername
            }}>
        <usercontext.Provider value={{
            allResults:allResults,
            SetallResults:SetallResults,
            SetResults:SetResults,
            Results:Results
            }}>
            <Header/>
            <Outlet/>
            <Footer/>
        </usercontext.Provider>
        </authcontext.Provider>
        </Provider>
        
    );
};
const Approvider=createBrowserRouter([
        {
            path:"/",
            element:<APPlayout/>,
            children:[
            {path:"/",element:<Body/>},      {
                path: '/about', 
                element: <AboutUs />, 
              },{ path: '/contact-us', 
              element: <ContactUs/>, },{path:'/login',element:<Login/>},{path:'/register',element:<Register/>},
              {path:'/forgot-password',element:<Forgetpass/>},{path:'/burger/:id',element:<RestaurantList/>},
              {path:'/cart',element:<Cart/>}
            ]
        }
    ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Approvider} />);
