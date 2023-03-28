import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/result.css';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { oaresetAllAction } from '../redux/oaquestion_reducer';
import { oausePublishResult } from '../hooks/setoaResult';
import { oaresetResultAction } from '../redux/oaresult_reducer';
import { attempts_Number } from '../helper/oahelper';
import { flagResult } from '../helper/oahelper';
const OaResult = () => {
    const dispatch = useDispatch()
    const {questions:{queue,oanswers},oaresult:{oaresult,userId}}=useSelector(state=>state)
    
    const totalPoints = queue.length * 1;
    const oaattempts = attempts_Number(oaresult);
    //const earnPoints= earnPoints_Number(oaresult,oanswers,1);
    const flag= flagResult(totalPoints)
    const questions = useSelector(state=>state.questions.queue[state.questions.trace])
    oausePublishResult({
        email:userId,
        oaresult,
        oaattempts, 
        oabusinessfeasibilitysummary:flag?"Success":"Not Success"
        });
    
    function onRestart(){
        dispatch(oaresetAllAction())
        dispatch(oaresetResultAction())
    }
    return(
        <div className='container'>
            <div className='container1'>
            <h1 className='title1 text-light'>Your Bussines Plan Summary</h1>
            </div>
            <div className='result flex-center'>
                <div className='flex'>
                    <span className='text'>Email : </span>
                    <span className='text'>{userId || ""}</span>
                </div>
               
                
                <div className='flex'>
                <span className='text'>Questions: </span>
                
                <span className='text'>{questions  || ""}</span>
            </div>
                <div className='flex'>
                <span className='text'>Result: </span>
                <span className='text'>{oaresult || ""}</span>
            </div>
            </div>
           <div className='start'>  
            <Link className='btn1' to={'/'} onClick={onRestart}>Restart</Link>
           </div>
           <div className='container'>
            
           </div>
        </div>
    )
}

export default OaResult;