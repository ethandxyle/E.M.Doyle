import axios from "axios"
import {useState} from "react";

const App = () => {

    const baseURL = "https://dog.ceo/api"
    const [imagePath, setImagePath] = useState("")
    useEffect=()=>{
        axios.get(endpoint)
            .catch(err => {
                console.error("Error:", err.message)
            })
            .then(response => {
                setImagePath(response.data.message)
                console.log("Response.", response.data.message)
            })
    }
    const handleClick = () => {
        // console.log("Clicked")
        let route = "breeds/image/random"
        let endpoint = `${baseURL}/${route}`



    }
    return (
        <>
            <h1>Dog Image Generator</h1>
            <button onClick={handleClick}>click me</button>
            <img src={imagePath} alt=""/>
        </>


    )
}

export default App