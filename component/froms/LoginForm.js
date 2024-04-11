"use client"
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import TextField from '../Common/inputbox';
import { Button } from '@mui/material';
import Link from 'next/link';
import { LoginUser } from '@/hooks/user';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';


const LoginForm = () => {
    const {handleLogin , isLoginLoading} = LoginUser();
    // const [cookies, setCookie] = useCookies(['token']);
    const handleSubmit = async (value) => {
        const data = await handleLogin(value.username , value.password);
        // console.log(data);
        if(data.success){
            toast.success("user login successfully");
            window.location.replace('/');
            // setCookie('token' , data.token);
        }else{
            toast.error(data.error);
        }
    }
    const validate = Yup.object({
        username:Yup.string().required("Enter username"),
        password:Yup.string().required("Enter password"),
    })
  return (
    <Formik
        initialValues={{username:"" , password:""}}
        validationSchema={validate}
        onSubmit={handleSubmit}
    >
    <Form style={{width:'70%'}}>
        <div>
            <TextField label="username" type="text" name="username" placeholder="Enter Username"/>
            <TextField label="password" name="password" type="password" placeholder="Enter Password"/>
            <Button type='submit' variant="contained" className='w-100'>{isLoginLoading ? "Loading..." : "Log in"}</Button>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{margin:'20px'}}>{"Don't have Account"} <Link href='signup'>Sign up</Link></div>
            </div>
        </div>
    </Form>
    </Formik>
  )
}

export default LoginForm;