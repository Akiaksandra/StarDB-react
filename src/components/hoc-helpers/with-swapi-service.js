import React from 'react';
import {SwapiState} from '../../context/alert/swapi-state'
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  // const swapiService = useContext(SwapiContext);
  return (props) => {
    return (
      <SwapiState>
        {
          (swapiService) => {
            const servicePropse = mapMethodsToProps(swapiService)
            return (
              <Wrapped {...props} {...servicePropse}/>
            )
          }
        }
        
      </SwapiState>
    )
  }
}

export default withSwapiService;