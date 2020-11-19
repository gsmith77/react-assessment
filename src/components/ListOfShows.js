import React from 'react';
import '../App.css'

export default function ListOfShows({shows}) {
    return (
        shows.length ? shows.map(item => {
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
          }) : <h1 style={{textAlign: 'center'}}>Go Search Some Shows!</h1>
    )
    
}