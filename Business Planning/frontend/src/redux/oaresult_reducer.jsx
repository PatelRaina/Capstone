import { createSlice } from "@reduxjs/toolkit";
export const oaresultReducer= createSlice({
    name:'oaresult',
    initialState:{
        userId:null,
        oaresult:[],
        oquestion:[]
    },
    reducers:{
        oasetUserId:(state,action) =>{
            state.userId=action.payload
        },
        oapushResultAction : (state,action)=>{
            state.oaresult.push(action.payload)
        },
        oaupdateResultAction : (state,action)=>{
            const {trace, check} = action.payload;
            state.oaresult.fill(check, trace, trace + 1)
        },
        oaresetResultAction : () => {
            return {
                userId:null,
                oaresult:[],
                oquestion:[]
            }
        } 
    }
})
export const {oasetUserId, oapushResultAction, oaresetResultAction, oaupdateResultAction}=oaresultReducer.actions;
export default oaresultReducer.reducer;