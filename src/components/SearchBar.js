import React from 'react';
import '../App.css'

export default function SearchBar({ fetchShows, inputValue, setInputValue, errorMessage }) {
    return (
        <div className="column">
            {errorMessage ? <h1 className="error">{errorMessage}</h1> : null}
            <div className="row input-icons">
            <i className="fa fa-search icon"></i> 
            <input className="search-input" onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" />
            <button className="search-button" onClick={fetchShows}>Search</button>
            </div>
        </div>
    )
}