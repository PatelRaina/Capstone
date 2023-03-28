import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Quiz from './pages/Quiz';
import Footer from './components/Footer/Footer';
import Result from './pages/Result';
import Questions1 from './pages/Questions1';
import Questions2 from './pages/Questions2';
import { CheckUserExist } from "./helper/helper";
import Categories from './pages/Categories';
import MarketAnalysis from './pages/MarketAnalysis';
import OpportunityAnalysis from './pages/OpportunityAnalysis';
import MarketingPlan from './pages/MarketingPlan';
import OaResult from './pages/OaResult';
import MpResult from './pages/MpResult';
import MaResult from './pages/MaResult';
const Routers = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/home/quiz' element={<CheckUserExist><Quiz/></CheckUserExist>}/>
            <Route path='/result' element={<CheckUserExist><Result/></CheckUserExist>}/>
            <Route path='/Questions1' element={<Questions1/>}/>
            <Route path='/Questions2' element={<Questions2/>}/>
            <Route path='/marketanalysis' element={<MarketAnalysis/>}/>
            <Route path='/marketingplan' element={<MarketingPlan/>}/>
            <Route path='/opportunityanalysis' element={<OpportunityAnalysis/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/oaresult' element={<OaResult/>}/>
            <Route path='/mpresult' element={<MpResult/>}/>
            <Route path='/maresult' element={<MaResult/>}/>
        </Routes>
        
    )
}

export default Routers;