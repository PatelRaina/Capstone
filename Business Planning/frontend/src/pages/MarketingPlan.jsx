import React, { useEffect, useState } from 'react'
import "./quiz.css";
import { Navigate } from 'react-router-dom';
import { mpuseFetchQuestion } from '../hooks/MarketingPlanQuestion';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/MarketingPlanQuestion';
import {mpPushAnswer, mpupdateResult} from '../hooks/setmpResult';
import {useSelector,useDispatch} from 'react-redux';

const MarketingPlan = ({onChecked}) => {

    const[check, setChecked] = useState(undefined)
    const [{ isLoading,serverError}] = mpuseFetchQuestion();
    const mpquestions = useSelector(mpstate=>mpstate.questions.queue[mpstate.mpquestions.trace])
    const mpresult = useSelector(mpstate=>mpstate.mpresult.mpresult)
    const mpstate = useSelector(mpstate=>mpstate)
    const {queue,trace} = useSelector(mpstate=>mpstate.questions)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(mpstate);
        console.log(mpresult)
         dispatch(mpupdateResult({trace,check})) 
     },[check])

    function onPrev(){
        //console.log("On Previous Click")
        if(trace>0){
            dispatch(MovePrevQuestion())
        }
    }

    function onNext(){
        console.log("On next Click")
        if(trace<queue.length){
            dispatch(MoveNextQuestion())
            if(mpresult.length<=trace){
                dispatch(mpPushAnswer(check))
            }
        }
    }
    function onChecked(check){
        console.log(check);
        setChecked(check)
    }
    
    if(mpresult.length && mpresult.length>=queue.length){
        return <Navigate to={'/mpresult'} replace="true"></Navigate>
    }

    function onSelect(i){
         onChecked(i);
         setChecked(i);
    }
    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
    return(
        
        <div className='container'>
            <div className='container1'>
            <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
            </div>
            <div className='radiobtn'>
            <h2 className='text-light'>{ mpquestions?.question }</h2>
            <ul key={mpquestions?.id}>
                {
                    mpquestions?.options.map((q,i)=>(
                        <li key={i}>
                        <label className="radio-container">
                        <input 
                            type="radio"
                            value={false}
                            name= "options"
                            id={`q${i}-option`}
                            className="radio"
                            onChange={()=>onSelect(i)}
                        />
                        <span className="radio-label" htmlFor={`q${i}-option`}>{q}</span>
                        </label>
                        <div className={`check ${mpresult[trace == i ? 'check' : '']}`}></div>
                        </li>
                    ))
                }
            </ul>
            <div className='grid'>
                {trace > 0 ? <button className='btnpre' onClick={onPrev}>Previous</button>:<div></div> }
                <button className='btnnext' onClick={onNext}>Next</button>
            </div>
        </div>
    </div> 
)}

export default MarketingPlan   ;







