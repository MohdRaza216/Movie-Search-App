import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MoviesList from './components/moviesList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddFavourite from './components/addFavourite.js';

const MoviePoster = ({ posterUrl }) => {
    const [imageError, setImageError] = useState(false);
    return (
        <div>
            {posterUrl && !imageError ? (
                <img src={posterUrl} alt="Movie Poster" onError={() => setImageError(true)} />
            ) : (
                <img src="/images/rectangle-gold-frame-paper.jpg" alt="movie" />
            )}
        </div>
    );
};

MoviePoster.propTypes = {
    posterUrl: PropTypes.string
};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [favourites, setFavourites] = useState([]);

    const fetchMovies = async () => {
        const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;

        console.log("Fetching from URL:", url);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.Error || `HTTP error! status: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log("OMDb API Response:", data);

            if (data.Response === "False") {
                console.error(`OMDB API Error: ${data.Error}`);
                setMovies([]);
                setError(data.Error);
                return;
            }

            setMovies(data.Search || []);
            setError(null);
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error.message);
            setMovies([]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchMovies();
    };

    const addFavouriteMovie = (movie) => {
        setFavourites((prevFavourites) => {
            // Check if the movie is already in the favorites list
            if (!prevFavourites.some(fav => fav.imdbID === movie.imdbID)) {
                return [...prevFavourites, movie];
            }
            return prevFavourites;
        });
    };


    return (
        <div className='App'>
            <div className="container-fluid">
                <h1>Movies Hub</h1>
                <p>Find your favourite movies, series, and more.</p>
                <form onSubmit={handleSearchSubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for movies..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button className="btn btn-outline-secondary" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                </form>

                {error && <div className="alert alert-danger">{error}</div>}

                <h5 className="mt-4">Search Results:</h5>
                <MoviesList movies={movies} MoviePoster={MoviePoster} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie}
                />
                <hr />
                <h5 className="mt-4">Favorites:</h5>
                <MoviesList movies={favourites} handleFavouriteClick={() => { }} />

            </div>
        </div>
    );
};

export default App;
