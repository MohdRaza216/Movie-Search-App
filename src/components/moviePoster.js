import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MoviePoster = ({ posterUrl, movie }) => {
    const [imageError, setImageError] = useState(false);

    if (!posterUrl || posterUrl === "N/A" || imageError) {
        return null;
    }

    return (
        <img
            src={movie.Poster}
            alt={movie.Title}
            onError={(e) => {
                console.error("Image load error for:", movie.Poster);
                e.target.onerror = null;
                e.target.src = '/public/images/rectangle-gold-frame-paper.jpg';
                setImageError(true);
            }}
        />
    );
};

MoviePoster.propTypes = {
    posterUrl: PropTypes.string.isRequired,
    movie: PropTypes.shape({
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired
    }).isRequired
};

export default MoviePoster;
