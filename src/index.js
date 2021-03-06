import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error from './pages/Error';
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
        {data.map((location) => ( <Route path={"/"+location.id}  key={`route-for`+location.id} element={<Location/>} render={({ match }) => <Location id={match.params.id} />}></Route> ))}
        <Route path="*" element= { <Error />}></Route>
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


