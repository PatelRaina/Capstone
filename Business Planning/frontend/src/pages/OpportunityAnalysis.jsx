import React, { useEffect, useState } from 'react'
import "./quiz.css";
import { Navigate } from 'react-router-dom';
import { oauseFetchQuestion } from '../hooks/OpportunityAnalysisQuestion';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/OpportunityAnalysisQuestion';
import {oaPushAnswer, oaupdateResult} from '../hooks/setoaResult';
import {useSelector,useDispatch} from 'react-redux';

const OpportunityAnalysis = ({onChecked}) => {

    const[check, setChecked] = useState(undefined)
    const [{ isLoading,apiData,serverError}] = oauseFetchQuestion();
    
    const oaresult = useSelector(state=>state.oaresult.oaresult)
    
    const oquestions = useSelector(state=>state.questions.queue[state.oquestions.trace])

    const state = useSelector(state=>state)
    const {queue,trace} = useSelector(state=>state.questions)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(state);
      
        console.log(oaresult)
         dispatch(oaupdateResult({trace,check})) 
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

            if(oaresult.length<=trace){
                dispatch(oaPushAnswer(check))
            }
        }
    
    }

    if(oaresult.length && oaresult.length>=queue.length){
        return <Navigate to={'/oaresult'} replace="true"></Navigate>
    }

    function onChecked(check){
       // console.log(check);
        setChecked(check)
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
            <h2 className='text-light'>{ oquestions?.question }</h2>

            <ul key={oquestions?.id}>
                {
                    oquestions?.options.map((q,i)=>(
                        <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name= "options"
                            id={`q${i}-option`}
                            className="radio"
                            onChange={()=>onSelect(`${q}`)}
                        />
                        <label className='text' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${oaresult[trace == i ? 'check' : '']}`}></div>
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
        
    )
}

export default OpportunityAnalysis;