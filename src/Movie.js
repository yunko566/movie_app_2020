import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, year, summary, poster, genres}){
    return(
     <div>
     <img src={poster} alt={title} title={title} />   
     <div className="movie-data">
         <h3 className="movie-title">{title}</h3>
         <h5 className="movie-year">{year}</h5>
         <p className="movie-summary">{summary}</p> 
     </div> 
     </div>
    ); 
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;