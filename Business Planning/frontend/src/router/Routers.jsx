import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Quiz from '../pages/Quiz';
import Footer from '../components/Footer/Footer';
import Result from '../pages/Result';
import Questions1 from '../pages/Questions1';
import Questions2 from '../pages/Questions2';
const Routers = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/Questions1' element={<Questions1/>}/>
            <Route path='/Questions2' element={<Questions2/>}/>
            
        </Routes>
        
    )
}

export default Routers;