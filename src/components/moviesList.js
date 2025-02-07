import React from 'react';
import PropTypes from 'prop-types';
import FavouriteComponent from './addFavourite.js';

const Placeholder = () => (
    <div className="placeholder-container">
        <p>No poster available</p>
    </div>
);

const MoviesList = ({ movies, handleFavouritesClick }) => {
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

                    <button
                        className="overlay mt-2 btn btn-primary"
                        onClick={() => handleFavouritesClick(movie)} // Pass movie object
                        onKeyDown={(e) => e.key === 'Enter' && handleFavouritesClick(movie)}
                        tabIndex={0}
                        aria-label="Add to favorites"
                        style={{ cursor: 'pointer' }}
                    >
                        <FavouriteComponent />
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
    handleFavouritesClick: PropTypes.func.isRequired
};

export default MoviesList;
