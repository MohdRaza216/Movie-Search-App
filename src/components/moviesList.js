import React from 'react'

const moviesList = (props) => {
    return (
        <div>
            {
                props.movies.map((movie, index) => (
                    <div key={movie.imdbID}>
                        <h2>{movie.Title}</h2>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title}/>
                    </div>
                ))
            }
        </div>
    )
}

export default moviesList
