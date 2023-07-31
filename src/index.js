import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { routes } from './Utils/routeUtils';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './Components/Welcome/Welcome';
import { TopBar } from './Components/App/TopBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tema = createTheme({
  palette: {
    primary: red,
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <TopBar />
      <Router>
        <Routes>
          <Route exact path={routes.home.path} element={<Welcome />} />
          <Route exact path={routes.listar.path} element={<App />} />
          <Route exact path={routes.adicionar.path} element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
