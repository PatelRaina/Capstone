import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export function attempts_Number(mpresult){
    return mpresult.filter(r=>r!==undefined).length;
}
/* export function earnPoints_Number(oaresult,oanswers,point){
    return oaresult.map((element,i)=>oanswers[i]===element).filter(i=>i).map(i=>point).reduce((prev,curr)=>prev+curr,0);
} */
export function flagResult(totalPoints,earnPoints)
{
    return (totalPoints * 50/100)<earnPoints;
}
/* export function oaCheckUserExist({children}){
    const auth = useSelector(state=>state.result.userId)
    return auth? children : <Navigate to={'/'} replace={true}></Navigate>
} */
export async function mpgetServerData(url,callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data):data;
}
export async function mppostServerData(url,mpresult,callback){
    const data = await (await axios.post(url,mpresult))?.data;
    return callback ? callback(data):data;
}