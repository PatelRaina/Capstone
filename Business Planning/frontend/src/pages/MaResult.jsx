import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/result.css';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { maresetAllAction } from '../redux/maquestion_reducer';
import { mausePublishResult } from '../hooks/setmaResult';
import { maresetResultAction } from '../redux/maresult_reducer';
import { attempts_Number } from '../helper/mahelper';
import { flagResult } from '../helper/mahelper';
const MaResult = () => {
    const dispatch = useDispatch()
    const {questions:{queue,manswers},maresult:{maresult,userId}}=useSelector(state=>state)
    
    const totalPoints = queue.length * 1;
    const maattempts = attempts_Number(maresult);
    //const earnPoints= earnPoints_Number(oaresult,oanswers,1);
    const flag= flagResult(totalPoints)
    const questions = useSelector(state=>state.questions.queue[state.questions.trace])
    mausePublishResult({
        email:userId,
        maresult,
        maattempts, 
        mabusinessfeasibilitysummary:flag?"Success":"Not Success"
        });
    
    function onRestart(){
        dispatch(maresetAllAction())
        dispatch(maresetResultAction())
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
                <span className='text'>{maresult || ""}</span>
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

export default MaResult;