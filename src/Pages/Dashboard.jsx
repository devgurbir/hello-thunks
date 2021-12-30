import React from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../Components/SearchBar';
import { useState } from 'react';
import { searchGithub } from '../Redux/Github/actions';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const isAuth = useSelector(state => state.login.isAuth);
    const userInfo = useSelector(state => state.login.userInfo)
    const data = useSelector(state => state.github.data)
    const dispatch = useDispatch();
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    
    if(!isAuth) {
        return <Redirect to="/login" />
    }

    const {name, email, username, mobile} = userInfo

    return (
        <>
        <div>
            <h3>Welcome to dashboard, {name}</h3>
            <h5>Your Info: </h5>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Mobile: {mobile}</p> 
        </div>
        <SearchBar query={query} setQuery={setQuery} />
        {data?.map(el => <div key={el.login}><Link to={"/github/".concat(el.login)}>{el.login}</Link></div>)}
        {data.length > 0 && <button onClick={() => {
            dispatch(searchGithub(query, page+1));
            setPage(page => page + 1)
        } }>Next</button>}
        </>
    )
}
