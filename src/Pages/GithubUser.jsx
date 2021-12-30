import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getGithubUser } from '../Redux/Github/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const GithubUser = () => {
    const {login} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getGithubUser(login))
    }, [])
    return (
        <div>
            {/* <Link to="/dashboard">Back to dashboard</Link> */}
            Welcome to Github User Profile Page, {login}
        </div>
    )
}

export default GithubUser
