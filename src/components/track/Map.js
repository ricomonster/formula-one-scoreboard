// dependencies
import React, { useContext } from 'react';

// context
import FormulaOneContext from '@context/FormulaOneContext';

const Map = () => {
  // load up the context
  const { track } = useContext(FormulaOneContext);

  return (
    <figure className="track-map">
      {track.circuit && (
        <img
          alt={track.circuit.name}
          className="track-map-image"
          src={track.circuit.diagram.href}
        />
      )}
    </figure>
  );
};

export default Map;
