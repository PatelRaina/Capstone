import { createSlice } from "@reduxjs/toolkit";
export const mpresultReducer= createSlice({
    name:'mpresult',
    initialState:{
        userId:null,
        mpresult:[],
        mpquestion:[]
    },
    reducers:{
        mpsetUserId:(mpstate,action) =>{
            mpstate.userId=action.payload
        },
        mppushResultAction : (mpstate,action)=>{
            mpstate.mpresult.push(action.payload)
        },
        mpupdateResultAction : (mpstate,action)=>{
            const {trace, check} = action.payload;
            mpstate.mpresult.fill(check, trace, trace + 1)
        },
        mpresetResultAction : () => {
            return {
                userId:null,
                mpresult:[],
                mpquestion:[]
            }
        } 
    }
})
export const {mpsetUserId, mppushResultAction, mpresetResultAction, mpupdateResultAction}=mpresultReducer.actions;
export default mpresultReducer.reducer;