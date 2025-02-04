import './App.css';
import React, { useState } from 'react';
import MoviesList from './components/moviesList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMovies = async () => {
        const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "False") {
                console.error(`OMDB API Error: ${data.Error}`);
                setMovies([]);
                return;
            }

            setMovies(data.Search || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
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

    
    return (
        <div className='App'>
            <div className="container-fluid">
                <h1>Movies Hub</h1>
                <p>Find your favorite movies, series, and more.</p>
                <form onSubmit={handleSearchSubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for movies..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button className="btn btn-outline-secondary" type="submit" id="buttonSearch">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                </form>
                <h5 className="mt-4">Search Results:</h5>
                <MoviesList movies={movies} />
            </div>
        </div>
    );
};

export default App;
