import {createTheme} from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#ff3d00',
        }, secondary: {
            main: '#2196f3',
        }, background: {
            default: '#121212', paper: '#1e1e1e',
        }, text: {
            primary: '#fff', secondary: '#aaa',
        },
    },
});

export default Theme;
