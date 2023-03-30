import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/result.css';
import { useDispatch, useSelector } from 'react-redux';
import { mpresetAllAction } from '../redux/mpquestion_reducer';
import { mpusePublishResult } from '../hooks/setmpResult';
import { mpresetResultAction } from '../redux/mpresult_reducer';
import { attempts_Number } from '../helper/mphelper';
import { flagResult } from '../helper/mphelper';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'

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
        const count = mpresult.reduce(
            (mpresult1, curr) => {
              if (curr === 0) {
                mpresult1.zeroCount++;
              } else {
                mpresult1.oneCount++;
              }
              return mpresult1;
            },
            { zeroCount: 0, oneCount: 0 },
          
          );
   const percentage=(count.zeroCount/mpresult.length)*100;
   console.log(percentage);
    ChartJS.register(
        BarElement, 
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend 
    )
    console.log(mpresult);
    const data={
            labels:["Success Ration"],
            datasets:[{
                label:"Success Ratio",
                data:[percentage],
                backgroundColor:'maroon',
                borderColor:'balck',
                borderWidth:1,
                barPercentage: 0.1,
            }]
    }
    const data1={
        labels:["Success","Not Success"],
        datasets:[{
            label:"Success Ratio",
            data:[count.zeroCount,count.oneCount],
            backgroundColor:'maroon',
            borderColor:'balck',
            borderWidth:1,
            barPercentage: 0.1,
            
                }]
}
    const options={
        scales: {
            y: 
                {
                    max: 100,
                  },
              },
             
              
        }
        const options1={
            scales: {
                y: 
                    {
                        max: 20,
                      },
                  },
            }
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
            </div>
           <div className='start'>  
            <Link className='btn1' to={'/'} onClick={onRestart}>Restart</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='btn1' to={'/categories'} >Go to Next Category</Link>
           </div>
           <div className='container'>
           <br/><br/>
           <h3 className="chart_title">Success Ration for Marketing Plan</h3>
           <h4 className="chart_title">Success Ration: {percentage}%</h4>
           <br/>
           <div className='chart'>
            <Bar className='bar'
            data={data}
            options={options}
            ></Bar>
            </div>
            <div className='chart1'>
            <Bar className='bar'
            data={data1}
            options={options1}
            ></Bar></div>
           </div>
        </div>
    )
}

export default MpResult;