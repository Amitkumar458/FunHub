import LoginForm from '@/component/froms/LoginForm'
import React from 'react'

export default function login() {
    return (
        <div className='loginpage'>
            <h1 className='loginHead'>FunHub</h1>
            <LoginForm/>
        </div>
    )
}