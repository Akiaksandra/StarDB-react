import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import PlanetView from './planet-view';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import {SwapiContext} from '../../context/alert/swapi-context'

import './random-planet.css';

const initState = {
  planet: {},
  loading: true,
  error: false
};

const RandomPlanet = () => {

  const [state, setState] = useState(initState)

  const { getPlanet, swapiState } = useContext(SwapiContext);
  console.log(swapiState)
  // componentDidMount() {
  //   updatePlanet();
  //   //interval = setInterval(updatePlanet, 5000);
  // }

  // componentWillUnmount() {
  //   clearInterval(interval);
  // }

  useEffect(() => {
    updatePlanet();
    // const interval = setInterval(updatePlanet, 5000);
    // return () => clearInterval(interval);
  }, []);
  

  const onPlanetLoaded = (planet) => {
    setState({
      planet,
      loading: false,
      error: false
    });
  };
  useEffect(()=>{
    onPlanetLoaded(swapiState.data)
  }, [swapiState.data])

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false
    });
  };

  const updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 2;
      getPlanet(id)
  };

    const { planet, loading, error } = state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
}

export default RandomPlanet;
