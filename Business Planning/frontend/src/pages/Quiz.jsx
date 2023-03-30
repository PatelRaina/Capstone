import React, {useState } from 'react'
import "./quiz.css"
import Questions from './Questions';

const Quiz = () => {
    const [check, setChecked]=useState(undefined);
    function onChecked(check){
        console.log(check);
        setChecked(check)
    }
    
    return ( <>
        <div className='container'>
            <div className='container1'>
                <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
            </div>
            <Questions onChecked={onChecked}/>
        </div>
    </>);
};

export default Quiz;