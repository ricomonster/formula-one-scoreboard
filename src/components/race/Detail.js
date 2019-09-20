// dependencies
import React, { useContext } from 'react';

// context
import FormulaOneContext from '@context/FormulaOneContext';

// components
import { DateTime } from '@components';

const Detail = () => {
  // load up the context
  const { event, track } = useContext(FormulaOneContext);

  console.log('event', event);
  console.log('track', track);

  return (
    <div className="race-detail">
      <h1 className="title is-3">{track.name}</h1>

      {track.circuit && (
        <p className="circuit-name subtitle is-5">{track.circuit.name}</p>
      )}

      <div className="race-info subtitle is-6">
        {track.date && track.endDate && (
          <p className="duration">
            <DateTime format="MMMM d">{track.date}</DateTime> -{' '}
            <DateTime format="MMMM d, yyyy">{track.endDate}</DateTime>
          </p>
        )}

        {event.circuit && (
          <>
            <div className="circuit-laps-turns">
              <span className="laps">{event.circuit.laps} laps</span> &bull;{' '}
              <span className="turns">{event.circuit.turns} turns</span>
            </div>

            <div className="circuit-distance-length">
              <span className="length">{event.circuit.length}</span> /{' '}
              <span className="distance">{event.circuit.distance}</span>
            </div>

            <p className="year">{event.circuit.established}</p>
          </>
        )}
      </div>
    </div>
  );
};

Detail.propTypes = {};

export default Detail;
