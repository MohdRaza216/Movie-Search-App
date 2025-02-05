import React from 'react';
import PropTypes from 'prop-types';
import FavouriteComponent from './addFavourite.js';

const Placeholder = () => (
    <div className="placeholder-container">
        <p>No poster available</p>
    </div>
);

const MoviesList = ({ movies, handleFavouriteClick }) => {
    if (!movies || movies.length === 0) {
        return <p>Type a movie name to start the search.</p>;
    }

    return (
        <div className="movie-list"> 
            {movies.map((movie) => (
                <div key={movie.imdbID} className='movie my-4'>
                    <h5>{movie.Title}</h5>
                    <p>{movie.Year}</p>

                    {movie.Poster !== 'N/A' ? (
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            loading="lazy"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/images/rectangle-gold-frame-paper.jpg"; 
                            }}
                        />
                    ) : (
                        <Placeholder />
                    )}

                    {/* Ensure FavouriteComponent is not inside a button */}
                    <button
                        className="overlay mt-2"
                        onClick={() => handleFavouriteClick(movie)}
                        onKeyDown={(e) => e.key === 'Enter' && handleFavouriteClick(movie)}
                        aria-label="Add to favorites"
                    >
                        <span> {/* Use a span instead of placing a button inside */}
                            <FavouriteComponent />
                        </span>
                    </button>
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
    })).isRequired,
    handleFavouriteClick: PropTypes.func.isRequired
};

export default MoviesList;
