import {Box, Typography} from '@mui/material';
import NavBar from './NavBar';

const Error = () => {
    return (<>
        <NavBar/>
        <Box sx={{textAlign: 'center', mt: 10}}>
            <Typography variant="h3" color="error">
                Something went wrong!
            </Typography>
            <Typography variant="h5">Try refreshing or go back home.</Typography>
        </Box>
    </>);
};

export default Error;
