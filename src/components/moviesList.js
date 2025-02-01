import React from 'react'

const moviesList = (props) => {
    return (
        <div>
            {
                props.movies.map((movie, index) => (
                    <div key={movie.imdbID} className='movie my-4'>
                        <h5>{movie.Title}</h5>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                ))
            }
        </div>
    )
}

export default moviesList
