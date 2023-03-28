import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/result.css';
import { useDispatch, useSelector } from 'react-redux';
import { mpresetAllAction } from '../redux/mpquestion_reducer';
import { mpusePublishResult } from '../hooks/setmpResult';
import { mpresetResultAction } from '../redux/mpresult_reducer';
import { attempts_Number } from '../helper/mphelper';
import { flagResult } from '../helper/mphelper';
const MpResult = () => {
    const dispatch = useDispatch()
    const {questions:{queue,mpanswers},mpresult:{mpresult,userId}}=useSelector(state=>state)
    
    const totalPoints = queue.length * 1;
    const mpattempts = attempts_Number(mpresult);
    //const earnPoints= earnPoints_Number(oaresult,oanswers,1);
    const flag= flagResult(totalPoints)
    const questions = useSelector(state=>state.questions.queue[state.questions.trace])
    mpusePublishResult({
        email:userId,
        mpresult,
        mpattempts, 
        mpbusinessfeasibilitysummary:flag?"Success":"Not Success"
        });
    
    function onRestart(){
        dispatch(mpresetAllAction())
        dispatch(mpresetResultAction())
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
                <span className='text'>{mpresult || ""}</span>
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

export default MpResult;