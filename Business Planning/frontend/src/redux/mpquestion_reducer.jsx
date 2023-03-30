import { createSlice } from "@reduxjs/toolkit";
export const questionReducer= createSlice({
    name:'questions',
    initialState: {
        queue:[],
        mpanswers:[],
        trace:0
    },
    reducers:{
        startExamAction : (mpstate,action)=>{
            let{mpquestions,mpanswers}= action.payload;
            return{
                ...mpstate,
                queue:mpquestions,
                mpanswers
            }
        },
        moveNextAction:(mpstate)=>{
            return {
                ...mpstate,
                trace : mpstate.trace + 1
            }
        },
        movePrevAction:(mpstate)=>{
            return {
                ...mpstate,
                trace : mpstate.trace - 1
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