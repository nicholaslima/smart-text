import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import GlobalStyles from './styles/global';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
        <GlobalStyles />
    </div>
  );
}

export default App;
