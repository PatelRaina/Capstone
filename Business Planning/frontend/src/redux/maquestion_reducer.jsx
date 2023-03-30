import { createSlice } from "@reduxjs/toolkit";


export const questionReducer= createSlice({
    name:'questions',
    initialState: {
        queue:[],
        manswers:[],
        trace:0
    },
    reducers:{
        startExamAction : (state,action)=>{
            let{mquestions,manswers}= action.payload;
            return{
                ...state,
                queue:mquestions,
                manswers
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
        maresetAllAction : () => {
            return {
                queue:[],
                manswers:[],
                trace:0
            }
        }
    }
})
export const {startExamAction, moveNextAction, movePrevAction, maresetAllAction }=questionReducer.actions;
export default questionReducer.reducer;