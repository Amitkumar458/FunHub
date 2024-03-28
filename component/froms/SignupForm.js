"use client"
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import TextField from '../Common/inputbox';
import { Button } from '@mui/material';
import Link from 'next/link';
import { SignUser } from '@/hooks/user';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';


const SignUpForm = () => {
    const {handleSignIn , isSigninLoading} = SignUser();
    const [cookies, setCookie] = useCookies(['token']);
    const handleSubmit = async (value) => {
        const data = await handleSignIn(value.username , value.password , value.email , value.name);
        // console.log(data);
        if(data.success){
            toast.success("user login successfully");
            window.location.replace('/');
            setCookie('token' , data.token);
        }else{
            toast.error(data.error);
        }
    }

    const validate = Yup.object({
        username:Yup.string().required("Enter username"),
        password:Yup.string().min(8 , "password must be 8 character").required("Enter password"),
        email:Yup.string().email().required("Enter Email"),
        name:Yup.string().required("Enter Name"),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })
  return (
    <Formik
        initialValues={{email:"" , username:"" , password:"" , name:"" , confirmPassword:""}}
        validationSchema={validate}
        onSubmit={handleSubmit}
    >
    <Form style={{width:'70%'}}>
        <div>
            <TextField label="Email" type="email" name="email" placeholder="Enter Email"/>
            <TextField label="username" type="text" name="username" placeholder="Choose Username"/>
            <TextField label="name" type="text" name="name" placeholder="Choose Name"/>
            <TextField label="password" name="password" type="password" placeholder="Enter Password"/>
            <TextField label="password" name="confirmPassword" type="password" placeholder="Enter Confirm Password"/>
            <Button type='submit' variant="contained" className='w-100'>{isSigninLoading ? "Loading..." : "Sign in"}</Button>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{margin:'20px'}}>{"Already have Account"} <Link href='login'>Log in</Link></div>
            </div>
        </div>
    </Form>
    </Formik>
  )
}

export default SignUpForm;