import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import { data } from './data/logements'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={ <About />}></Route>
        <Route path="/location/" element={<Location />}></Route>
        <Route path="*" element= { <Error />}></Route>
        {data.map((location) => ( <Route path={`/location/${location.id}`} element={<Location />}></Route> ))}
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
