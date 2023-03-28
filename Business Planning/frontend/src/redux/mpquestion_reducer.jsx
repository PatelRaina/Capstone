import { createSlice } from "@reduxjs/toolkit";
export const questionReducer= createSlice({
    name:'questions',
    initialState: {
        queue:[],
        mpanswers:[],
        trace:0
    },
    reducers:{
        startExamAction : (state,action)=>{
            let{mpquestions,mpanswers}= action.payload;
            return{
                ...state,
                queue:mpquestions,
                mpanswers
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
        mpresetAllAction : () => {
            return {
                queue:[],
                mpanswers:[],
                trace:0
            }
        }
    }
})
export const {startExamAction, moveNextAction, movePrevAction, mpresetAllAction }=questionReducer.actions;
export default questionReducer.reducer;