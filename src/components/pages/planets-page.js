import React, { useState } from 'react';

import Row from '../row';

import {
  PlanetDetails,
  PlanetList,
} from '../sw-components';

const initState = {
  selectedItem: null
};

const PlanetPage = () => {

  const [state, setState] = useState(initState);

  const onItemSelected = (selectedItem) => {
    setState({ selectedItem });
  };

    return (
      <Row 
          left={<PlanetList onItemSelected={onItemSelected}/>} 
          right={<PlanetDetails itemId={state.selectedItem}/>} />
    );
}

export default PlanetPage;