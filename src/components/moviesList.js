import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
    if (!movies || movies.length === 0) { 
        return <p>Type a movie name to start the search.</p>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.imdbID} className='movie my-4'>
                    <h5>{movie.Title}</h5>
                    <p>{movie.Year}</p>
                    {movie.Poster === 'N/A' ? (
                        <p>No poster available</p>
                    ) : (
                        <img src={movie.Poster} alt={movie.Title} onError={(e) => {e.target.onerror = null; e.target.src="placeholder_image.jpg"}}/>
                    )}
                </div>
            ))}
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired
    })).isRequired
};

export default MoviesList;