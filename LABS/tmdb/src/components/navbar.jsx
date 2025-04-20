import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@mui/material';
import {styled, alpha} from '@mui/material/styles';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 'auto',
    width: '100%',
    maxWidth: 300,
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit', '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim() !== '') {
            navigate(`/results?query=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
        }
    };

    return (<AppBar position="fixed" sx={{backgroundColor: '#1c1c1c'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            {/* Left side: TMDB title and navigation links */}
            <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                <Typography variant="h6" component="div">
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                        TMDB App
                    </Link>
                </Typography>
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    Home
                </Link>
                <Link to="/results" style={{textDecoration: 'none', color: 'white'}}>
                    Now Playing
                </Link>
            </Box>

            <Search>
                <SearchIconWrapper>
                    <FontAwesomeIcon icon={faSearch}/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </Search>
        </Toolbar>
    </AppBar>);
};

export default NavBar;
