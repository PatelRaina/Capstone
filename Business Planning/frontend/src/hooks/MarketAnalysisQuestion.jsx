import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { magetServerData } from "../helper/mahelper";
import * as Action from "../redux/maquestion_reducer"
export const mauseFetchQuestion=()=>{
    const dispatch = useDispatch();
    const [getData,setGetData]= useState({ isLoading: false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));
        (async ()=>{
            try {
                const [{mquestions,manswers}]=await magetServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/maquestions`,(data)=>data)
                console.log({mquestions,manswers});
                if(mquestions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:mquestions}));
                    dispatch(Action.startExamAction({question:mquestions,manswers}))
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
