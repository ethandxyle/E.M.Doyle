import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./App.css";
import background from "./assets/background.jpg";

const App = () => {
    const [people, setPeople] = useState([]);

    const [showTable, setShowTable] = useState(false);

    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        if (!shouldFetch) return;

        const fetchData = async () => {
            try {
                const response = await axios.get("https://swapi.dev/api/people");
                setPeople(response.data.results);
                setShowTable(true);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                setShouldFetch(false);
            }
        };

        fetchData();
    }, [shouldFetch]);

    const handleSubmit = () => {
        setShouldFetch(true);
    };

    const handleReset = () => {
        setShowTable(false);
        setPeople([]);
    };

    return (
        <div
            className="app-container"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                padding: "2rem",
                color: "white",
                width:" 1700px",
            }}
        >
            <h1>Star Wars Characters</h1>
            <div className="button-group">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            {showTable && <Table data={people} />}
        </div>
    );
};

export default App;
