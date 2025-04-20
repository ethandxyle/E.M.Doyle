import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Grid, Typography, Toolbar} from '@mui/material';
import MovieCard from './Card';
import NavBar from './NavBar';
import api from '../api';


const Results = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = query ? await api.get(`/search/movie?query=${query}`) : await api.get('/movie/now_playing');
                setMovies(res.data.results);
            } catch (err) {
                setError('Something went wrong. Please try again.');
            }
        };

        fetchMovies();
    }, [query]);

    if (error) {
        return <Typography>{error}</Typography>;
    }

    return (<>
            <Toolbar/>
            <NavBar/>
            <div
                style={{
                    backgroundImage: `url(${'https://img.freepik.com/free-photo/movie-background-collage_23-2149876018.jpg?ga=GA1.1.778672894.1745107084&semt=ais_hybrid&w=740'})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    padding: '2rem',
                }}
            >
                <Typography variant="h4" color="white" mb={3}>
                    {query ? `Results for "${query}"` : 'Now Playing'}
                </Typography>
                <Grid container spacing={2}>
                    {movies.map((movie) => (<Grid key={movie.id}>
                            <MovieCard movie={movie}/>
                        </Grid>))}
                </Grid>
            </div>
        </>);
};

export default Results;
