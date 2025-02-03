import './App.css';
import React, { useState } from 'react';
import MoviesList from './components/moviesList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                throw new Error(`OMDB API Error: ${data.Error}`);
            }
            
            setMovies(data.Search || []);  
        } catch (error) {
            alert(error.message);
        }
    };
    

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchMovies();
    }

    return (
        <div className='App'>
        <div className="container-fluid">
            <h1>Movies Hub</h1>
            <p>Find your favorite movies, series, and more.</p>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            <h5 className="mt-4">Search Results:</h5>
            <MoviesList movies={movies} />
        </div>
        </div>
    );
};

export default App;
