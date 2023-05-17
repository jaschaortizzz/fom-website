import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/mainLayout/mainLayout'
import Home from './Home'

export default createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
    </Route>
    
));