import { mapostServerData } from '../helper/mahelper'
import * as Action from '../redux/maresult_reducer'

export const maPushAnswer = (maresult)=>async(dispatch)=>{
    try {
        await dispatch(Action.mapushResultAction(maresult))
    } catch (error) {
        console.log(error)
    }
}

export const maupdateResult = (index) => async (dispatch) =>{
    try {
        dispatch(Action.maupdateResultAction(index))
    } catch (error) {
        console.log(error);
    }
}
export const mausePublishResult = (resultData)=>{
    const {maresult,email}=resultData;
    (async ()=>{
        try {
            if(maresult !==[] && !email)throw new Error("Couldn't get Result");
            await mapostServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/maresult`,resultData,(data)=>data)

        } catch (error) {
            console.log(error)
        }
    })()
}