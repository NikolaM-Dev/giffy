import React from 'react';
import { Link, Route } from 'wouter';

import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src="/logo.png" />
          </figure>
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
};

export default App;
