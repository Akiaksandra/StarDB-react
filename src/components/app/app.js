import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import { SwapiState } from '../../context/alert/swapi-state';

import './app.css';
import { PeoplePage, PlanetsPage, StartshipsPage, SecretPage, LoginPage } from '../pages';
import { StarshipDetails } from '../sw-components';

const initState = {
  isLoggedIn: false
}

const App = () => {

  const [state, setState] = useState(initState);

  const onLogin = () => {
    setState({ isLoggedIn: true })
  }

    const {isLoggedIn} = state;
    return (
      <ErrorBoundry>
        <SwapiState >
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet/>
              <Switch>
                <Route path="/"
                
                       render={() => <h2>Welcome to StarDB</h2>}
                       exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StartshipsPage} />
                <Route path="/starships/:id"
                       render={({ match }) => {
                         const { id } = match.params;
                         return <StarshipDetails itemId={id} />
                       }}/>

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={onLogin}/>
                  )}/>

                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}/>

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiState>
      </ErrorBoundry>
    );
}

export default App;
