import {useNavigate} from 'react-router-dom';
import {Button, Box} from '@mui/material';
import NavBar from './components/NavBar';


function App() {
    const navigate = useNavigate();

    return (<Box
        sx={{
            backgroundImage: `url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876018.jpg?ga=GA1.1.778672894.1745107084&semt=ais_hybrid&w=740')`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            textAlign: 'center',
            paddingTop: '5rem',
        }}
    >
        <NavBar/>
        <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/results')}
        >
            View Now Playing Movies
        </Button>
    </Box>);
}

export default App;
