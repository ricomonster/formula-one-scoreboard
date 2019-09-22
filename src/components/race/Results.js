// dependencies
import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

// config
import formulaOnePointFive from '@config/formula-one-five';

// context
import FormulaOneContext from '@context/FormulaOneContext';

// components
import { Driver } from '@components';

const Results = ({ category = 'f1', numberToShow }) => {
  // load up the context
  const { event, freePractice, qualifying, race } = useContext(
    FormulaOneContext
  );

  const activeEvent = useMemo(() => {
    if (event) {
      switch (event.name) {
        case 'Free Practice 1':
          // status?
          if (event.state === 'pre') {
            return [];
          }

          return freePractice['FP1'];

        case 'Free Practice 2':
          if (event.state === 'pre') {
            // return FP1
            return freePractice['FP1'];
          }

          return freePractice['FP2'];

        case 'Free Practice 3':
          // upcoming?
          if (event.state === 'pre') {
            // return FP2
            return freePractice['FP2'];
          }

          return freePractice['FP3'];

        case 'Qualifying':
          // upcoming?
          if (event.state === 'pre') {
            // return FP3
            return freePractice['FP3'];
          }

          return qualifying;

        case 'Race':
          if (event.state === 'pre') {
            return qualifying;
          }

          return race;

        default:
          break;
      }
    } else {
      return {};
    }
  });

  const results = useMemo(() => {
    if (activeEvent && category === 'f1') {
      return activeEvent.positions;
    }

    if (activeEvent && category === 'f1.5') {
      // filter out the teams
      // return the teams
      return activeEvent.positions
        .filter(item => {
          return formulaOnePointFive.indexOf(item.team.name) > -1;
        })
        .filter((item, index) => {
          if (numberToShow && numberToShow <= index) {
            return null;
          }

          item.order = index + 1;
          return item;
        });
    }

    return [];
  });

  return (
    <div className="race-results">
      {activeEvent &&
        results &&
        results.map((position, index) => {
          return (
            <Driver.Detail
              driver={position}
              key={index}
              position={position.order}
            />
          );
        })}
    </div>
  );
};

Results.propTypes = {
  category: PropTypes.oneOf(['f1', 'f1.5']),
  numberToShow: PropTypes.number,
};

export default Results;
