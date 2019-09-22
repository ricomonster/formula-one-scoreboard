// dependencies
import React, { useContext } from 'react';

// context
import FormulaOneContext from '@context/FormulaOneContext';

// components
import { DateTime } from '@components';

const Detail = () => {
  // load up the context
  const { event, grandPrix, track } = useContext(FormulaOneContext);

  console.log('event', event);
  console.log('track', track);
  console.log('gp', grandPrix);

  return (
    <div className="race-detail">
      <h1 className="title is-3">{grandPrix.name}</h1>

      {track.name && <p className="circuit-name subtitle is-5">{track.name}</p>}

      <div className="race-info subtitle is-6">
        {track.date && track.endDate && (
          <p className="duration">
            <DateTime format="MMMM d">{grandPrix.startDate}</DateTime> -{' '}
            <DateTime format="MMMM d, yyyy">{grandPrix.endDate}</DateTime>
          </p>
        )}

        {track && (
          <>
            <div className="circuit-laps-turns">
              <span className="laps">{track.laps} laps</span> &bull;{' '}
              <span className="turns">{track.turns} turns</span>
            </div>

            <div className="circuit-distance-length">
              <span className="length">{track.length}</span> /{' '}
              <span className="distance">{track.distance}</span>
            </div>

            <p className="year">{track.established}</p>
          </>
        )}
      </div>
    </div>
  );
};

Detail.propTypes = {};

export default Detail;
