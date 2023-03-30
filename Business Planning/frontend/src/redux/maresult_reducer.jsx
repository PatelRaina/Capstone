import { createSlice } from "@reduxjs/toolkit";
export const maresultReducer= createSlice({
    name:'maresult',
    initialState:{
        userId:null,
        maresult:[],
        mquestion:[]
    },
    reducers:{
        masetUserId:(state,action) =>{
            state.userId=action.payload
        },
        mapushResultAction : (state,action)=>{
            state.maresult.push(action.payload)
        },
        maupdateResultAction : (state,action)=>{
            const {trace, check} = action.payload;
            state.maresult.fill(check, trace, trace + 1)
        },
        maresetResultAction : () => {
            return {
                userId:null,
                maresult:[],
                mquestion:[]
            }
        } 
    }
})
export const {masetUserId, mapushResultAction, maresetResultAction, maupdateResultAction}=maresultReducer.actions;
export default maresultReducer.reducer;