import { mppostServerData } from '../helper/mphelper'
import * as Action from '../redux/mpresult_reducer'

export const mpPushAnswer = (mpresult)=>async(dispatch)=>{
    try {
        await dispatch(Action.mppushResultAction(mpresult))
    } catch (error) {
        console.log(error)
    }
}

export const mpupdateResult = (index) => async (dispatch) =>{
    try {
        dispatch(Action.mpupdateResultAction(index))
    } catch (error) {
        console.log(error);
    }
}
export const mpusePublishResult = (resultData)=>{
    const {mpresult,email}=resultData;
    (async ()=>{
        try {
            if(mpresult !==[] && !email)throw new Error("Couldn't get Result");
            await mppostServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/mpresult`,resultData,(data)=>data)

        } catch (error) {
            console.log(error)
        }
    })()
}