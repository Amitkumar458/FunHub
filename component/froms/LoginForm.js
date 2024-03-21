"use client"
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import TextField from '../Common/inputbox';
import { Button } from '@mui/material';

const LoginForm = () => {
    const handleSubmit = (value) => {
        console.log(value);
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
    <Form>
        <div className='form-control'>
            <TextField label="username" type="text" name="username" placeholder="Enter Username"/>
            <TextField label="password" name="password" type="password" placeholder="Enter Password"/>
            <Button type='submit' variant="contained">Log in</Button>
        </div>
    </Form>
    </Formik>
  )
}

export default LoginForm