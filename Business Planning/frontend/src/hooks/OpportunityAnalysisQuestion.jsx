import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { oagetServerData } from "../helper/oahelper";
import * as Action from "../redux/oaquestion_reducer"

export const oauseFetchQuestion=()=>{
    const dispatch = useDispatch();
    const [getData,setGetData]= useState({ isLoading: false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));
        (async ()=>{
            try {
                const [{oquestions,oanswers}]=await oagetServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/oaquestions`,(data)=>data)
                console.log({oquestions,oanswers});
                if(oquestions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:oquestions}));
                    dispatch(Action.startExamAction({question:oquestions,oanswers}))
                }else{
                    throw new Error("No Questions Available");
                }
            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }
        })();
    },[dispatch]);

    return [getData,setGetData];
}

export const MoveNextQuestion =()=>async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion =()=>async(dispatch)=>{
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}