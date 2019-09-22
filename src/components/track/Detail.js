// dependencies
import React, { useContext, useState } from 'react';

// context
import FormulaOneContext from '@context/FormulaOneContext';

const Detail = () => {
  // load up the context
  const { event, track } = useContext(FormulaOneContext);

  // console.log('event', event);
  // console.log('track', track);

  return (
    <div className="track-detail">
      {track.circuit && <h2 className="title is-5">{track.circuit.name}</h2>}

      {event.circuit && (
        <div className="columns">
          <ul className="track-meta meta-list column">
            <li>
              <span className="meta-label">Circuit Type:</span>
              <span className="meta-value">{event.circuit.type}</span>
            </li>

            <li>
              <span className="meta-label">Circuit Length:</span>
              <span className="meta-value">{event.circuit.length}</span>
            </li>

            <li>
              <span className="meta-label">Distance:</span>
              <span className="meta-value">{event.circuit.distance}</span>
            </li>

            <li>
              <span className="meta-label">No. of Laps:</span>
              <span className="meta-value">{event.circuit.laps}</span>
            </li>
          </ul>

          <ul className="track-meta meta-list column">
            <li>
              <span className="meta-label">No. of Turns:</span>
              <span className="meta-value">{event.circuit.turns}</span>
            </li>

            <li>
              <span className="meta-label">Circuit Direction:</span>
              <span className="meta-value">{event.circuit.direction}</span>
            </li>

            <li>
              <span className="meta-label">Date Established:</span>
              <span className="meta-value">{event.circuit.established}</span>
            </li>

            <li>
              <span className="meta-label">Capacity:</span>
              <span className="meta-value">{event.circuit.capacity}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

Detail.propTypes = {};

export default Detail;
