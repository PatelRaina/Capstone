import { oapostServerData } from '../helper/oahelper'
import * as Action from '../redux/oaresult_reducer'

export const oaPushAnswer = (oaresult)=>async(dispatch)=>{
    try {
        await dispatch(Action.oapushResultAction(oaresult))
    } catch (error) {
        console.log(error)
    }
}

export const oaupdateResult = (index) => async (dispatch) =>{
    try {
        dispatch(Action.oaupdateResultAction(index))
    } catch (error) {
        console.log(error);
    }
}
export const oausePublishResult = (resultData)=>{
    const {oaresult,email}=resultData;
    (async ()=>{
        try {
            if(oaresult !==[] && !email)throw new Error("Couldn't get Result");
            await oapostServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/oaresult`,resultData,(data)=>data)

        } catch (error) {
            console.log(error)
        }
    })()
}