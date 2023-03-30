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
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'

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
    const macount = maresult.reduce(
        (maresult1, curr) => {
          if (curr === 0) {
            maresult1.zeroCount++;
          } else {
            maresult1.oneCount++;
          }
          return maresult1;
        },
        { zeroCount: 0, oneCount: 0 },
      
      );
    const mapercentage=(macount.zeroCount/maresult.length)*100;

    console.log(mapercentage);
    ChartJS.register(
        BarElement, 
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend 
    )

    console.log(maresult);
    const data={
            labels:["Success Ration"],
            datasets:[{
                label:"Success Ratio",
                data:[mapercentage],
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
            data:[macount.zeroCount,macount.oneCount],
            backgroundColor:'maroon',
            borderColor:'balck',
            borderWidth:1,
            barPercentage: 0.1,
            
    }]}

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
                    <span className='text'>User Email ID: </span>
                    <span className='text'>{userId || ""}</span>
                </div>
            </div>
           <div className='start'>  
            <Link className='btn1' to={'/'} onClick={onRestart}>Restart</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='btn1' to={'/categories'}>Go to next Category</Link>
           </div>
           <div className='container'>
           <br/><br/>
           <h3 className="chart_title">Success Ration for Opportunity Analysis</h3>
           <h4 className="chart_title">Success Ration: {mapercentage}%</h4>
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

export default MaResult;