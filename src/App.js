import React from 'react';
import { Link, Route } from 'wouter';

import ListGifs from './components/ListGifs';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/colombia">Gifs de Colombia</Link>
        <Link to="/gif/argentina">Gifs de Argentina</Link>
        <Link to="/gif/malacia">Gifs de Malacia</Link>
        <Route path="/gif/:keyword" component={ListGifs} />
      </section>
    </div>
  );
};

export default App;
