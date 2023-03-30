import { createSlice } from "@reduxjs/toolkit";


export const questionReducer= createSlice({
    name:'questions',
    initialState: {
        queue:[],
        oanswers:[],
        trace:0
    },
    reducers:{
        startExamAction : (state,action)=>{
            let{oquestions,oanswers}= action.payload;
            return{
                ...state,
                queue:oquestions,
                oanswers
            }
        },
        moveNextAction:(state)=>{
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction:(state)=>{
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        oaresetAllAction : () => {
            return {
                queue:[],
                oanswers:[],
                trace:0
            }
        }
    }
})
export const {startExamAction, moveNextAction, movePrevAction, oaresetAllAction }=questionReducer.actions;
export default questionReducer.reducer;