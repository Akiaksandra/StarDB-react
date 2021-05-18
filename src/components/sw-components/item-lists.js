import React, { useContext } from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import { SwapiContext } from '../../context/alert/swapi-context';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}
const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};
const PersonSuperList = () => {
  const {getAllPeople} = useContext(SwapiContext)
  return (
    <ItemList data={getAllPeople}>
      renderName()
    </ItemList>
  )
}
const PersonList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                    mapPersonMethodsToProps);

const PlanetList =  withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                    mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderModelAndName)),
                     mapStarshipMethodsToProps);


export { PersonList, PlanetList, StarshipList } 