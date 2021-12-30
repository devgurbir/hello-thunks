import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const isAuth = useSelector(state => state.login.isAuth)
    return (
        <div style={{display: "flex", gap:"10px", margin: "10px", justifyContent: "center"}}>
            {isAuth && <div><Link to="/dashboard">Dashboard</Link></div>}
            {!isAuth && <div><Link to="/login">Login</Link></div>}
            {!isAuth && <div><Link to="/register">Register</Link></div>}
        </div>
    )
}