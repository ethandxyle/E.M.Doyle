import {Card, CardContent, CardMedia, Typography} from '@mui/material';

const MovieCard = ({movie}) => {
    const imageBase = 'https://image.tmdb.org/t/p/w500';
    const defaultImage = 'https://img.freepik.com/free-photo/side-view-hand-pressing-buzzer-show_23-2149943734.jpg?ga=GA1.1.778672894.1745107084&semt=ais_hybrid&w=740';

    return (<Card sx={{maxWidth: 250, height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
            component="img"
            image={movie.poster_path ? `${imageBase}${movie.poster_path}` : defaultImage}
            alt={movie.title}
            sx={{
                width: '100%', height: 400, objectFit: 'cover',
            }}
        />
        <CardContent>
            <Typography variant="h6">{movie.title}</Typography>
            <Typography variant="body2">{movie.overview}</Typography>
            <Typography variant="subtitle2">Rating: {movie.vote_average}</Typography>
        </CardContent>
    </Card>);
};

export default MovieCard;
