import React, { Suspense } from 'react';
import { Link, Route, Switch } from 'wouter';

import { GifsContextProvider } from 'context/GifsContext';
import Detail from 'pages/Detail/Detail';
import ErrorPage from 'pages/ErrorPage';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext';

import './App.css';

const HomePage = React.lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <StaticContext.Provider
      value={{ name: 'midudev', suscribeteAlCanal: true }}
    >
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt="Giffy logo" src="/logo.png" />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={ErrorPage} path="/:rest*" />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
};

export default App;
