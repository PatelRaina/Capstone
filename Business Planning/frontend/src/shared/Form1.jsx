import React, { useRef, useState } from 'react';
import './Form1.css'
import {Col, Form} from 'reactstrap';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
import { oasetUserId } from '../redux/oaresult_reducer';
import { mpsetUserId } from '../redux/mpresult_reducer';
import { masetUserId } from '../redux/maresult_reducer';

const Form1 = () => {

    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email')
        } else if(validator.isLength(email , {min:0, max: 0})){
          setEmailError('Email is required')
        }
        else {
            setEmailError('Enter valid Email!')
          }

       /*  if(validator.isLength(email)){
            setEmailError('Valid Email :)')
        }
        else {
            setEmailError('Enter valid Email!')
          } */
      }
    const inputRef = useRef(null);
    const dispatch=useDispatch()
    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
            dispatch(oasetUserId(inputRef.current?.value))
            dispatch(mpsetUserId(inputRef.current?.value))
            dispatch(masetUserId(inputRef.current?.value))
        }
    }
    return <Col lg='12'>
        <div className='form-bar'>
            <Form className='d-flex align-items-center gap-4'>
                <div className='mainForm' >
                    <h1  className='form'>Want to know your Bussiness Opportunities?</h1>
                    <div>
                    <label ><h3 className='form'> Enter Your Email ID:</h3> </label><input ref={inputRef} type="text" className='input' placeholder='Email ID' onChange={(e) => validateEmail(e)}/>
                    <span className='error'> * {emailError} </span>
                    </div>
                    <br/>
                    <Link to={'quiz'} className='form1' onClick={startQuiz}>Click Here To Get Started</Link>
                </div>
            </Form>
        </div>
    </Col>
};

export default Form1;