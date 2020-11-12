import './App.css';
import axios from 'axios'
import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    try {
      const data = await axios.get(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
      console.log(data.data)
      setShows(data.data)
    } catch (e) {
      alert(`${e.message}`)
    }
  }

  return (
    <div className="App">
      <div className="header">Show Finder</div>
      <div style={{height: shows.length ? "100%" : "100vh"}} className="border">
        <div className="row input-icons">
          <i class="fa fa-search icon"></i> 
          <input className="search-input input-field" onChange={(e) => setInputValue(e.target.value)} placeholder="The Office" value={inputValue} type="text" />
          <button className="search-button" onClick={fetchShows}>Search</button>
        </div>
        <main>
          <div className="shows">
            {shows.length ? shows.map(item => {
              const { show } = item
              //take out HTML tags ex: <p></p>
              let summary = show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'No Summary'
              return (
                <div className="row clear show">
                  <img src={show.image ? show.image.medium : 'https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon-768x768.jpg'} alt="show" className="show-image column large-2" />
                  <div className="show-background column large-7">
                    <h1 className="show-text">{show.name}</h1>
                    <div className="show-text">{summary}</div>
                    <button className="show-episodes-button">Show Episodes</button>
                  </div>
                </div>
              )
            }) : <h1 style={{textAlign: 'center'}}>Go Search Some Shows!</h1>}
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