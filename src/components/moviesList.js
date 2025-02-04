import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Placeholder = () => (
    <div className="placeholder-container">
        <p>No poster available</p>
    </div>
);

const MoviesList = ({ movies }) => {
    const [imageError, setImageError] = useState(false); // State for image errors

    if (!movies || movies.length === 0) {
        return <p>Type a movie name to start the search.</p>;
    }

    return (
        <div className="movie-list"> {/* Add a container class */}
            {movies.map((movie) => (
                <div key={movie.imdbID} className='movie my-4'>
                    <h5>{movie.Title}</h5>
                    <p>{movie.Year}</p>
                    {movie.Poster === 'N/A' || imageError ? (
                        <Placeholder />
                    ) : (
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            loading="lazy"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/images/rectangle-gold-frame-paper.jpg"; // Correct path
                                setImageError(true);
                            }}
                        />
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