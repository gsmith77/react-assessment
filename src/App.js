import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ListOfShows from './components/ListOfShows';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchShows = async () => {
    if (inputValue) {
      const data = await axios.get(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
      if (data && data.data) {
        setShows(data.data)
      }
      setErrorMessage(null)
    } else {
      setErrorMessage('Input Invalid')
    }
  }

  return (
    <div className="App">
      <div className="header">Show Finder</div>
      <div style={{height: shows.length ? "100%" : "100vh"}} className="border">
        <SearchBar fetchShows={fetchShows} inputValue={inputValue} setInputValue={setInputValue} errorMessage={errorMessage} />
        <main>
          <div className="shows">
            <ListOfShows shows={shows} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;


// Success is:
// The initial page will have a text input and button.
// Successfully make the api call
// Display the results in a view that is human readable.