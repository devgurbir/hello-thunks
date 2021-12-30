import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../Redux/Login/actions'


export const Register = () => {
    const [formVal, setFormVal] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: "",        
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormVal({...formVal, [name]: value})
    }

    const dispatch = useDispatch()
    const isError = useSelector(state => state.login.isError)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formVal))
    }
    
    return (
        <div style={{display: "flex", flexDirection: "column", gap:"10px", justifyContent:"center", margin: "20px auto", width:"300px"}}>
            <form onSubmit={(e) => handleSubmit(e)} style={{display: "flex", flexDirection:"column", gap:"10px", justifyContent: "center"}}>
                <input onChange={(e) => handleChange(e)} value={formVal.name} type="text" name="name" required placeholder="Name" />
                <input onChange={(e) => handleChange(e)} value={formVal.email} type="email" name="email" required placeholder="Email" />
                <input onChange={(e) => handleChange(e)} value={formVal.password} type="password" name="password" required placeholder="Password" />
                <input onChange={(e) => handleChange(e)} value={formVal.username} type="text" name="username" required placeholder="Username" />
                <input onChange={(e) => handleChange(e)} value={formVal.mobile} type="text" name="mobile" required placeholder="Mobile" />
                <textarea onChange={(e) => handleChange(e)} value={formVal.description} type="text" name="description" required placeholder="Description" />
                <input type="submit" />
            </form>
        {isError && <div>Something went wrong</div>}
        </div>
    )
}
