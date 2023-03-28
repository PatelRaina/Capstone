import { createSlice } from "@reduxjs/toolkit";
export const mpresultReducer= createSlice({
    name:'mpresult',
    initialState:{
        userId:null,
        mpresult:[],
        mpquestion:[]
    },
    reducers:{
        mpsetUserId:(state,action) =>{
            state.userId=action.payload
        },
        mppushResultAction : (state,action)=>{
            state.mpresult.push(action.payload)
        },
        mpupdateResultAction : (state,action)=>{
            const {trace, check} = action.payload;
            state.mpresult.fill(check, trace, trace + 1)
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