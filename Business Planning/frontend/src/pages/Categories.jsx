import React from "react";
import "./quiz.css"
import { Link } from "react-router-dom";

const Categories =()=>{
    return (
        <div className="cat">
        <h1 className='text1'> Business Planning Elements</h1><br/>
        <Link to={'/Questions1'} className="categories"> Industry Analysis </Link><br/><br/><br/>
        <Link to={'/marketanalysis'} className="categories"> Market Analysis </Link><br/><br/><br/>
        <Link to={'/opportunityanalysis'} className="categories"> Opportunity Analysis </Link><br/><br/><br/>
        <Link to={'/marketingplan'} className="categories"> Marketing Plan </Link><br/><br/><br/>
        </div>
    )
}
export default Categories;