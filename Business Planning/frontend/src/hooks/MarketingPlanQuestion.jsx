import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { mpgetServerData } from "../helper/mphelper";
import * as Action from "../redux/mpquestion_reducer"


export const mpuseFetchQuestion=()=>{
    const dispatch = useDispatch();
    const [getData,setGetData]= useState({ isLoading: false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));
        (async ()=>{
            try {
                const [{mpquestions,mpanswers}]=await mpgetServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/mpquestions`,(data)=>data)
                console.log({mpquestions,mpanswers});
                if(mpquestions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:mpquestions}));
                    dispatch(Action.startExamAction({question:mpquestions,mpanswers}))
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