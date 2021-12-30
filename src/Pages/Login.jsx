import React from 'react'
import { useState } from 'react'
import { loginUser } from '../Redux/Login/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const Login = () => {
    const [formVal, setFormVal] = useState({
        password: "",
        username: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormVal({...formVal, [name]: value})
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formVal))
    }

    const isAuth = useSelector(state => state.login.isAuth)

    if(isAuth){
        return <Redirect to="/dashboard" />
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap:"10px", justifyContent:"center", margin: "20px auto", width:"300px"}}>
            <form onSubmit={e => handleSubmit(e)} style={{display: "flex", flexDirection:"column", gap:"10px", justifyContent: "center"}}>
            <input onChange={(e) => handleChange(e)} value={formVal.username} type="text" name="username" required placeholder="Username" />
            <input onChange={(e) => handleChange(e)} value={formVal.password} type="password" name="password" required placeholder="Password" />
            <input type="submit" />
            </form>
        </div>
    )
}
