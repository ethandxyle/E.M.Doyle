import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import axios from "axios"
import MovieCard from "./components/movieCard.jsx"
import {useState} from "react";

const App = () => {
    const [movies, setMovies] = useState("")
    const handleClick = () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        }
        axios(options)
            .then(response => {
                console.log(response.data.results)
                let movieArray = response.data.results.map((movie,i) => {
                    return <MovieCard key={i} data={movie}/>
                })
                setMovies(movieArray)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <>
            <h1>App Comp</h1>
            <Router>
                <div className="App">
                    <hr/>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacts</Link>
                            </li>
                        </ul>
                    <hr/>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </Router>
            <button onClick={handleClick}>Now Playing</button>
            {movies}
        </>
    )
}

export default App;