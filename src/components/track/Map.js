// dependencies
import React, { useContext } from 'react';

// context
import FormulaOneContext from '@context/FormulaOneContext';

const Map = () => {
  // load up the context
  const { track } = useContext(FormulaOneContext);

  return (
    <figure className="track-map">
      {track && (
        <img alt={track.name} className="track-map-image" src={track.map} />
      )}
    </figure>
  );
};

export default Map;
