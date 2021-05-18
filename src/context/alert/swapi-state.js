import React, {useReducer} from 'react'
import {SwapiContext} from './swapi-context'
import {swapiReducer} from './swapi-reducer'
import {GET_DATA} from '../types'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService();

export const SwapiState = ({children}) => {
  const [state, dispatch] = useReducer(swapiReducer, { data: [] });

  const getAllPlanets = async () => {
    const data = await swapiService.getAllPlanets();
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getAllPerson = async () => {
    const data = await swapiService.getAllPerson();
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getAllStarships = async () => {
    const data = await swapiService.getAllStarships();
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getPerson = async (id) => {
    const data = await swapiService.getPerson(id);
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getStarship = async (id) => {
    const data = await swapiService.getStarship(id);
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getPlanet = async (id) => {
    const data = await swapiService.getPlanet(id);
    dispatch({
      type: GET_DATA,
      payload: data
    })
    // return data;
  }

  const getPersonImage = async ({ id }) => {
    const data = await swapiService.getPersonImage(id);
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getStarshipImage = async ({ id }) => {
    const data = await swapiService.getStarshipImage(id);
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  const getPlanetImage= async ({ id }) => {
    const data = await swapiService.getPlanetImage(id);
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }

  return (
    <SwapiContext.Provider value={{
      getAllPerson, getAllPlanets, getAllStarships, getStarship, getPlanet, getPerson, getPlanetImage, getPersonImage, getStarshipImage,
      swapiState: state
    }}>
      {children}
    </SwapiContext.Provider>
  )
}
