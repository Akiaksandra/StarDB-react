import React from 'react';

import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const servicePropse = mapMethodsToProps(swapiService)
            return (
              <Wrapped {...props} {...servicePropse}/>
            )
          }
        }
        
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService;