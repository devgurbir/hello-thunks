import React from 'react'
import { useDispatch } from 'react-redux';
import { searchGithub } from '../Redux/Github/actions';
import { useState } from 'react';

export const SearchBar = ({query, setQuery}) => {
    
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Search Github</h3>
            <input value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Search user" />
            <button onClick={() => dispatch(searchGithub(query)) }>Search</button>
        </div>
    )
}
