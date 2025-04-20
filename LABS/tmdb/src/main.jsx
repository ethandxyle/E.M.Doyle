import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Results from './components/Results';
import Error from './components/Error';
import Theme from './components/ui/Theme';
import {ThemeProvider} from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={Theme}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/results" element={<Results/>}/>
                <Route path="/error" element={<Error/>}/>
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
</React.StrictMode>);
