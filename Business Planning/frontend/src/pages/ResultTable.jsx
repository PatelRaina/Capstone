import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'
import '../styles/result.css';
const ResultTable = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,(res)=>{
            setData(res)
        })
    })
    return(
      <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                   
                    <td>result</td>
                </tr>
            </thead>
            <tbody >
                {!data ?? <div>No Data Found</div>}
                {
                   /*  <td>Email</td>
                    <td>Attempts</td>
                    <td>Business Feasibility Points</td>
                     <td>Business Feasibility Summary</td> 
                      */
                    data.map((v,i)=>(
                    <tr key={i} className={v?.businessfeasibilitysummary=="Not Success" ? "table-body" : "table-body1"}>
                    
                    <td>{v?.result || ''}</td>
                    
                </tr>
                    ))
                }
                
            </tbody>
        </table>
      </div>
    )
}

export default ResultTable;