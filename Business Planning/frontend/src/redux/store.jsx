import { combineReducers, configureStore } from '@reduxjs/toolkit';
import maquestionreducer from './maquestion_reducer';
import mpquestionreducer from './mpquestion_reducer';
import noquestionreducer from './noquestion_reducer';
import oaquestionreducer from './oaquestion_reducer';
import  questionReducer  from './question_reducer';
import  resultReducer  from './result_reducer';
import maresultreducer from './maresult_reducer';
import oaresultreducer from './oaresult_reducer';
import mpresultreducer from './mpresult_reducer';
const rootReducer = combineReducers({
    questions : questionReducer,
    questionn : noquestionreducer,
    mquestions : maquestionreducer,
    mpquestions : mpquestionreducer,
    oquestions : oaquestionreducer,
    result : resultReducer,
    maresult: maresultreducer,
    oaresult: oaresultreducer,
    mpresult: mpresultreducer
})
export default configureStore({ reducer : rootReducer});