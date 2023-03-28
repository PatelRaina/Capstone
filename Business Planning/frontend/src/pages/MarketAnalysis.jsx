import React, { useEffect, useState } from 'react'
import "./quiz.css";
import { Navigate } from 'react-router-dom';
import { mauseFetchQuestion } from '../hooks/MarketAnalysisQuestion';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/MarketAnalysisQuestion';
import {maPushAnswer, maupdateResult} from '../hooks/setmaResult';
import {useSelector,useDispatch} from 'react-redux';

const MarketAnalysis = ({onChecked}) => {

    const[check, setChecked] = useState(undefined)
    const [{ isLoading,apiData,serverError}] = mauseFetchQuestion();
    const mquestions = useSelector(state=>state.questions.queue[state.mquestions.trace])
    const maresult = useSelector(state=>state.maresult.maresult)
    const state = useSelector(state=>state)
    const {queue,trace} = useSelector(state=>state.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(state);
        console.log(maresult)
         dispatch(maupdateResult({trace,check})) 
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
            if(maresult.length<=trace){
                dispatch(maPushAnswer(check))
            }
        }
    }

    function onChecked(check){
        console.log(check);
        setChecked(check)
    }
    if(maresult.length && maresult.length>=queue.length){
        return <Navigate to={'/maresult'} replace="true"></Navigate>
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
            <h2 className='text-light'>{ mquestions?.question }</h2>

            <ul key={mquestions?.id}>
                {
                    mquestions?.options.map((q,i)=>(
                        <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name= "options"
                            id={`q${i}-option`}
                            onChange={()=>onSelect(i)}
                        />
                        <label className='text' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${maresult[trace == i ? 'check' : '']}`}></div>
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

export default MarketAnalysis   ;














