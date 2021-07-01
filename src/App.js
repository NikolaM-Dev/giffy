import React from 'react';
import { Link, Route } from 'wouter';

import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/" className="App">
          App
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
};

export default App;
